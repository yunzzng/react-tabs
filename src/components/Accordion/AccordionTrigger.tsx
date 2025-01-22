import { FC, ReactNode, useContext, useMemo } from 'react';
import { AccordionItemContext } from './AccordionItem';
import { accordionTriggerBaseCls } from '@consts/className';

interface AccordionTriggerProps {
  children?: ReactNode;
  className?: string;
}

const AccordionTrigger: FC<AccordionTriggerProps> = ({ children, className }) => {
  const { isActive, toggleActive } = useContext(AccordionItemContext);

  const accordionTriggerCls = useMemo(() => {
    return isActive ? `${accordionTriggerBaseCls || ''} active` : accordionTriggerBaseCls || '';
  }, [isActive, className]);

  return (
    <span className={accordionTriggerCls} onClick={toggleActive}>
      {children}
    </span>
  );
};

export default AccordionTrigger;