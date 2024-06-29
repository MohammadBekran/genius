import { toast } from "react-toastify";

const showLoadingToast = (message: string, id: string) => {
  toast.loading(message, { toastId: id });
};

const dismissToast = (id: string) => {
  toast.dismiss(id);
};

const showSuccessToast = (message: string) => {
  toast.success(message);
};

const showErrorToast = (message: string) => {
  toast.error(message);
};

export { showLoadingToast, dismissToast, showSuccessToast, showErrorToast };
