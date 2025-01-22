import { FC, useContext, useMemo } from "react";
import { usePopover } from "@ui/Popover";
import { SelectTriggerBaseCls } from "@consts/className";
import { SelectContext } from ".";
import PopoverTrigger from "@ui/Popover/PopoverTrigger";
import { DEFAULT_TRIGGER_PLACEHOLDER } from "./consts";

interface SelectTriggerProps {
  className?: string;
  placeholder?: string;
}


const SelectTrigger: FC<SelectTriggerProps> = ({ className, placeholder=DEFAULT_TRIGGER_PLACEHOLDER }) => {
  const { toggle } = usePopover();
  const { label } = useContext(SelectContext);

  const selectTriggerCls = useMemo(() => {
    return className
      ? `${className} ${SelectTriggerBaseCls}`
      : SelectTriggerBaseCls;
  }, [className]);

  return (
    <PopoverTrigger onClick={toggle} className={selectTriggerCls}>
      {label || placeholder }
    </PopoverTrigger>
  );
};

export default SelectTrigger;