import { FC, ReactNode, useContext, useMemo } from "react";
import { modalContentBaseCls } from "@consts/className";
import { createPortal } from "react-dom";
import { ModalContext } from ".";

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

const ModalContent: FC<ModalContentProps> = ({ children, className }) => {
  const { isOpen } = useContext(ModalContext);

  const modalContentCls = useMemo(() => {
    return className
      ? `${className} ${modalContentBaseCls}`
      : modalContentBaseCls;
  }, [className]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={modalContentCls}
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default ModalContent;