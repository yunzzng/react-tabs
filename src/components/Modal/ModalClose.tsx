import {
  FC,
  ReactNode,
  useContext,
  useMemo,
  cloneElement,
  ReactElement,
  isValidElement,
} from "react";
import { modalButtonBaseCls } from "../../consts/className";
import { ModalContext } from ".";

interface ModalButtonProps {
  className?: string;
  children: ReactNode;
}

const ModalClose: FC<ModalButtonProps> = ({ className, children }) => {
  const { closeModal } = useContext(ModalContext);

  const modalCloseCls = useMemo(() => {
    return className
      ? `${className} ${modalButtonBaseCls}`
      : modalButtonBaseCls;
  }, [className]);

  // 사용자가 여러개 사용할 경우
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, index) => {
          if (isValidElement(child)) {
            const childElement = child as ReactElement;
            return cloneElement(childElement, {
              onClick: closeModal,
              className: `${modalCloseCls} ${
                childElement.props.className || ""
              }`.trim(),
              key: index,
            });
          }
          return child;
        })}
      </>
    );
  }

  // 사용자가 정한 태그에다가 onclick
  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      onClick: closeModal,
      className: `${modalCloseCls} ${children.props.className || ""}`,
    });
  }

  // 기본 버튼 태그
  return (
    <button
      onClick={closeModal}
      className={modalCloseCls}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
};

export default ModalClose;
