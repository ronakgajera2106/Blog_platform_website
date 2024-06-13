import { Bounce, toast } from "react-toastify";

const UseToast = (
  message: string | null | undefined,
  type: "error" | "warning" | "success" = "success"
) => {
  // Define background color based on the type
  let bgColor = "";
  switch (type) {
    case "error":
      bgColor = "#FF7B7B";
      break;
    case "warning":
      bgColor = "#FFD166";
      break;
    case "success":
      bgColor = "#272727";
      break;
    default:
      bgColor = "#FFFFFF";
      break;
  }

  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    progressClassName: "bg-white",
    style: {
      backgroundColor: bgColor,
      color: type === "warning" ? "black" : "white",
    },
  });
};

export default UseToast;
