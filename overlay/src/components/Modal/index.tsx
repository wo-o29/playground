import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export interface ModalProps {
  isOpen?: boolean;
  close?: () => void;
}

function Modal({ children, isOpen = false, close }: PropsWithChildren<ModalProps>) {
  return (
    <>
      {isOpen === true && (
        <div className={styles.modal}>
          {children} <button onClick={close}>닫기</button>{" "}
        </div>
      )}
    </>
  );
}

export default Modal;
