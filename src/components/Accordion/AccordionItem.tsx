import { ReactNode, useMemo, useContext, FC, createContext } from 'react';
import { AccordionContext } from '.';
import { accordionItemBaseCls } from '@consts/className';

interface AccordionItemContextProps {
  isActive: boolean;
  toggleActive: () => void;
}

const AccordionItemContext = createContext<AccordionItemContextProps>({
  isActive: false,
  toggleActive: () => {},
});

interface ItemProps {
  id: number;
  children: ReactNode;
  className?: string;
}

const AccordionItem: FC<ItemProps> = ({ id, children, className }) => {
  const { activeItems, toggleItem } = useContext(AccordionContext);
  const isActive = activeItems.includes(id);

  const toggleActive = () => {
    toggleItem(id);
  };

  const accordionItemCls = useMemo(() => {
    return className ? `${className} ${accordionItemBaseCls}` : accordionItemBaseCls;
  }, [className]);

  return (
    <AccordionItemContext.Provider value={{ isActive, toggleActive }}>
      <div className={accordionItemCls}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
export { AccordionItemContext };