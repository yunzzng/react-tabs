import { createContext, FC, ReactNode, useMemo, useState } from "react";
import SelectTrigger from "./SelectTrigger";
import SelectContent from "./SelectContent";
import Popover from "../Popover";
import SelectItem from "./SelectItem";
import { SelectBaseCls } from "../../consts/className";

interface SelectProps {
  value: string;
  onChange?: (value: string, label: ReactNode) => void;
  children?: ReactNode;
  className?: string;
}

interface SelectCompoundProps {
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Trigger: typeof SelectTrigger;
}

interface SelectContextProps {
  value: string;
  label: ReactNode;
  onChange?: (value: string, label: ReactNode) => void;
}

const SelectContext = createContext<SelectContextProps>({
  value: "",
  label: "",
  onChange: () => {},
});

const Select: FC<SelectProps> & SelectCompoundProps = ({
  value,
  onChange,
  children,
  className,
}) => {
  const [label, setLabel] = useState<ReactNode>("");

  const handleChange = (newValue: string, newLabel: ReactNode) => {
    if (onChange) {
      // value와 label 전달
      onChange(newValue, newLabel);
      // newValue:1, newLabel: One
    }
    setLabel(newLabel);
  };

  const selectCls = useMemo(() => {
    return className
      ? `${className} ${SelectBaseCls}`
      : SelectBaseCls;
  }, [className]);

  return (
    <SelectContext.Provider value={{ value, label, onChange: handleChange }} >
      <Popover className={selectCls}>{children}</Popover>
    </SelectContext.Provider>
  );
};

Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Trigger = SelectTrigger;

export default Select;
export { SelectContext };
