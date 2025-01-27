import { FC, ReactNode, useMemo } from "react";
import { toastCloseBaseCls } from "@consts/className";

interface ToastCloseProps {
  className?: string;
  onClose?: () => void;
  children?: ReactNode;
}

// 토스트 닫기
const ToastClose: FC<ToastCloseProps> = ({ className, onClose, children }) => {
  const toastCloseCls = useMemo(() => {
    return className ? `${className} ${toastCloseBaseCls}` : toastCloseBaseCls;
  }, [className]);

  return (
    <button className={toastCloseCls} onClick={onClose}>
      {children || "닫기"}
    </button>
  );
};

export default ToastClose;
