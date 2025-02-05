import { createContext, FC, useState, ReactNode, useMemo } from "react";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionTrigger from "./AccordionTrigger";
import AccordionContent from "./AccordionContent";
import { accordionBaseCls } from "@consts/className";

interface AccordionProps {
  children?: ReactNode;
  className?: string;
}

interface AccordionCompoundProps {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

interface AccordionContextProps {
  activeItems: number[];
  toggleItem: (itemId: number) => void;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

const Accordion: FC<AccordionProps> & AccordionCompoundProps = ({
  children,
  className,
}) => {
  const [activeItems, setActiveItems] = useState<number[]>([]); //배열로

  const toggleItem = (itemId: number) => {
    setActiveItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const contextValue = {
    activeItems,
    toggleItem,
  };

  const accordionCls = useMemo(() => {
    return className ? `${className} ${accordionBaseCls}` : accordionBaseCls;
  }, [className]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={accordionCls}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
export { AccordionContext };
