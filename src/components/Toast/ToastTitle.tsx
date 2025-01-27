import { FC, ReactNode, useMemo } from "react";
import { toastTitleBaseCls } from "@consts/className";

interface ToastTitleProps {
  className?: string; 
  children: ReactNode
}

// 토스트 제목
const ToastTitle: FC<ToastTitleProps> = ({ className, children})  => {

    const toastTitleCls= useMemo(() => {
      return className ? `${className} ${toastTitleBaseCls}` : toastTitleBaseCls;
  }, [className]);

    return (
      <div className={toastTitleCls}>
        {children}
      </div>
    );
};

export default ToastTitle;