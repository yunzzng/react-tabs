import {
  FC,
  ReactNode,
  useContext,
  useMemo,
  cloneElement,
  ReactElement,
  isValidElement,
} from "react";
import { modalTriggerBaseCls } from "@consts/className";
import { ModalContext } from ".";

interface ModalTriggerProps {
  className?: string;
  children: ReactNode;
}

const ModalTrigger: FC<ModalTriggerProps> = ({ className, children }) => {
  const modalContext = useContext(ModalContext) ?? { openModal: () => {} };
  const { openModal } = modalContext;

  const modalTriggerCls = useMemo(() => {
    return className
      ? `${className} ${modalTriggerBaseCls}`
      : modalTriggerBaseCls;
  }, [className]);

  // 사용자가 여러개 사용할 경우
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, index) => {
          if (isValidElement(child)) {
            const childElement = child as ReactElement;
            return cloneElement(childElement, {
              onClick: openModal,
              className: `${modalTriggerCls} ${
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
      onClick: openModal,
      className: `${modalTriggerCls} ${children.props.className || ""}`,
    });
  }

  // 기본 버튼 태그
  return (
    <button
      onClick={openModal}
      className={modalTriggerCls}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
};

export default ModalTrigger;
