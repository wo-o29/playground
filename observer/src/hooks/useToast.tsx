import { ToastService } from "@/components/Toast/ToastService";
import { useRef } from "react";

export interface PendingToastTextType {
  pending: string;
  success: string;
  error: string;
}

const useToast = () => {
  const toastService = ToastService.getInstance();
  const toastId = useRef(0);

  const successToast = (message: string) => {
    const id = String(toastId.current++);
    toastService.addToast(id, "success", message);
  };

  const errorToast = (message: string) => {
    const id = String(toastId.current++);
    toastService.addToast(id, "error", message);
  };

  const warningToast = (message: string) => {
    const id = String(toastId.current++);
    toastService.addToast(id, "warning", message);
  };

  const infoToast = (message: string) => {
    const id = String(toastId.current++);
    toastService.addToast(id, "info", message);
  };

  const pendingToast = (promise: any, text: PendingToastTextType) => {
    const id = String(toastId.current++);
    toastService.addToast(id, "pending", text.pending);

    return promise()
      .then((result: any) => {
        toastService.updateToast(id, "success", text.success);
        console.log(id);
        return result;
      })
      .catch((error: any) => {
        toastService.updateToast(id, "error", text.error);
        throw error;
      });
  };

  return {
    successToast,
    errorToast,
    warningToast,
    infoToast,
    pendingToast,
  };
};

export default useToast;
