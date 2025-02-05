import React, { ReactNode, useContext, useMemo } from "react";
import { SelectItemBaseCls } from "@consts/className";
import { SelectContext } from ".";
import { usePopover } from "@ui/Popover";

interface SelectItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children: label,
  className,
}) => {
  const selectContext = useContext(SelectContext) ?? { onChange: () => {} };
  const popoverContext = usePopover() ?? { close: () => {} };

  const { onChange } = selectContext;
  const { close } = popoverContext;

  const selectItemCls = useMemo(() => {
    return className ? `${className} ${SelectItemBaseCls}` : SelectItemBaseCls;
  }, [className]);

  // 아이템 선택하면 닫힘
  const handleClick = () => {
    if (onChange) {
      onChange(value, label);
    }
    close();
  };

  return (
    <div onClick={handleClick} className={selectItemCls}>
      {label}
    </div>
  );
};

export default SelectItem;

// 우선순위
// 1. 기능
// 2. 성능개선
// 3. 유지보수(리팩토링)
