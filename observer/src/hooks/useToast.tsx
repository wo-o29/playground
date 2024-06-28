import { ToastService } from "@/components/Toast/ToastService";
import { getToastId } from "@/utils/getToastId";

export interface PendingToastTextType {
  pending: string;
  success: string;
  error: string;
}

const useToast = () => {
  const toastService = ToastService.getInstance();

  const successToast = (message: string) => {
    const id = getToastId();
    toastService.addToast(id, "success", message);
  };

  const errorToast = (message: string) => {
    const id = getToastId();
    toastService.addToast(id, "error", message);
  };

  const warningToast = (message: string) => {
    const id = getToastId();
    toastService.addToast(id, "warning", message);
  };

  const infoToast = (message: string) => {
    const id = getToastId();
    toastService.addToast(id, "info", message);
  };

  const pendingToast = (promise: any, text: PendingToastTextType) => {
    const id = getToastId();
    toastService.addToast(id, "pending", text.pending);

    promise()
      .then((result) => {
        toastService.updateToast(id, "success", text.success);
        return result;
      })
      .catch((error) => {
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
