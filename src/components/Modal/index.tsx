import { createContext, FC, ReactNode, useMemo } from "react";
import ModalBackdrop from "./ModalBackdrop";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";
import ModalClose from "./ModalClose";
import { modalBaseCls } from "../../consts/className";

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProps {
  open?: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  children: ReactNode;
  className?: string;
}

interface ModalCompoundProps {
  Backdrop: typeof ModalBackdrop;
  Trigger: typeof ModalTrigger;
  Content: typeof ModalContent;
  Close: typeof ModalClose;
}

const Modal: FC<ModalProps> & ModalCompoundProps = ({
  open,
  onOpenModal,
  onCloseModal,
  children,
  className,
}) => {
  const modalCls = useMemo(() => {
    return className ? `${className} ${modalBaseCls}` : modalBaseCls;
  }, [className]);

  const contextValue = useMemo(
    () => ({
      isOpen: open || false,
      openModal: onOpenModal,
      closeModal: onCloseModal,
    }),
    [open, onOpenModal, onCloseModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <div className={modalCls}>{children}</div>
    </ModalContext.Provider>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

export default Modal;
export { ModalContext };