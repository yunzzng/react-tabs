import { cloneElement, FC, isValidElement, ReactElement, ReactNode, Ref, useContext, useMemo } from "react";
import { PopoverContext } from ".";
import { popoverTriggertBaseCls } from "@consts/className";

interface PopoverTriggerProps {
  children: ReactNode | ((isOpen: boolean) => ReactElement);
  className?: string;
  onClick?: () => void;
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className }) => {
  const { toggle, triggerRef, isOpen } = useContext(PopoverContext);

  const popoverTriggerCls = useMemo(() => {
    return className
      ? `${className} ${popoverTriggertBaseCls}`
      : popoverTriggertBaseCls;
  }, [className]);

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      onClick: toggle,
      className: `${popoverTriggerCls} ${children.props.className || ""}`,
    });
  }

  return (
    <button
      ref={triggerRef as Ref<HTMLButtonElement>}
      onClick={toggle}
      className={popoverTriggerCls}
    >
      {/* {children}  */}
      {typeof children === "function" ? children(isOpen) : children}
    </button>
  );
};

export default PopoverTrigger;
