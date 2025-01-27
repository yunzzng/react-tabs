import { FC, ReactNode, useMemo } from "react";
import { toastDescriptionBaseCls } from "@consts/className";

interface ToastDescriptionProps {
  className?: string; 
  children: ReactNode;
}

// 토스트 내용
const ToastDescription: FC<ToastDescriptionProps> = ({ className, children })  => {

    const toastDescriptionCls= useMemo(() => {
      return className ? `${className} ${toastDescriptionBaseCls}` : toastDescriptionBaseCls;
  }, [className]);

    return (
      <div className={toastDescriptionCls}>
        {children}
      </div>
    );
};

export default ToastDescription;