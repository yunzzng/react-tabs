import { FC, useContext, useMemo } from "react";
import { modalBackdropBaseCls } from "@consts/className";
import { createPortal } from "react-dom";
import { ModalContext } from ".";

interface ModalBackdropProps {
  className?: string;
}

const ModalBackdrop: FC<ModalBackdropProps> = ({ className }) => {
  const modalContext = useContext(ModalContext) ?? {
    closeModal: () => {},
    isOpen: false,
  };
  const { closeModal, isOpen } = modalContext;

  const modalBackdropCls = useMemo(() => {
    return className
      ? `${className} ${modalBackdropBaseCls}`
      : modalBackdropBaseCls;
  }, [className]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={modalBackdropCls}
      onClick={closeModal}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    />,
    document.body
  );
};

export default ModalBackdrop;
