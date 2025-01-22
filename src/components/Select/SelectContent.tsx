import { FC, ReactNode, useMemo } from "react";
import { usePopover } from "../Popover";
import { SelectContentBaseCls } from "../../consts/className";
import PopoverContent from "../Popover/PopoverContent";

interface SelectCotentProps {
  children: ReactNode;
  className?: string;
}

const SelectContent: FC<SelectCotentProps> = ({ children, className }) => {
  const { isOpen } = usePopover();

  const selectContentCls = useMemo(() => {
    return className
      ? `${className} ${SelectContentBaseCls}`
      : SelectContentBaseCls;
  }, [className]);

  if (!isOpen) return null;
  return (
    <PopoverContent className={selectContentCls}>{children}</PopoverContent>
  );
};

export default SelectContent;
