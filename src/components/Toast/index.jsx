import { toast } from "react-toastify";

export const creationError = () => {
  toast.error("Oops! Something went wrong!", {
    icon: "⛔",
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const creationSuccess = () =>
  toast.success("Success!", {
    icon: "✅",
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
