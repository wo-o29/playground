import React, { useState, useEffect, useRef } from "react";
import { ToastArrayType, ToastService } from "./ToastService";
import ToastMessage from "./ToastMessage";
import styles from "./Toast.module.css";
import classNames from "classnames/bind";
import { ToastType } from "@/type/type";

const cn = classNames.bind(styles);

export interface IndividualToastType {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastProps {
  limit?: number; // 토스트 개수, 기본 값 3
  autoClose?: number; // 자동으로 토스트가 제거되는 시간, 기본 값 3000ms
}

function Toast({ limit = 3, autoClose = 3000 }: ToastProps) {
  const [messages, setMessages] = useState<IndividualToastType[]>([]);
  const id = useRef(0);

  useEffect(() => {
    if (messages.length > limit) {
      return;
    }

    const handleNewMessage = ({ id, type, message }: ToastArrayType) => {
      setMessages((prev) => [...prev, { id, type, message }]);

      if (type === "pending") {
        return;
      }

      // 메시지를 일정 시간 후에 제거
      setTimeout(() => {
        setMessages((prev) => prev.filter((toast) => toast.id !== id));
      }, autoClose);
    };

    const handleUpdateToast = ({ id, type, message }: ToastArrayType) => {
      setMessages((prev) => {
        const updatedMessages = prev.map((toast) => {
          if (toast.id === id) {
            return { ...toast, type, message };
          }
          return toast;
        });
        return updatedMessages;
      });

      if (type === "pending") {
        return;
      }

      setTimeout(() => {
        setMessages((prev) => prev.filter((toast) => toast.id !== id));
      }, autoClose);
    };

    const toastService = ToastService.getInstance();

    toastService.subscribe(handleNewMessage, handleUpdateToast);

    return () => {
      toastService.unsubscribe(handleNewMessage, handleUpdateToast);
    };
  }, [messages.length]);

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  return (
    <div className={cn("toast-box")}>
      {messages.map((toast) => (
        <ToastMessage
          message={toast.message}
          autoClose={autoClose}
          type={toast.type}
          key={toast.id}
          onClose={() => handleDeleteMessage(toast.id)}
        />
      ))}
    </div>
  );
}

export default React.memo(Toast);
