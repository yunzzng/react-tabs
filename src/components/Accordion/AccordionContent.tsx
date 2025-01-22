import { FC, ReactNode, useContext, useMemo } from 'react';
import { AccordionItemContext } from './AccordionItem';
import { accordionContentBaseCls } from '@consts/className';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = ({ children, className }) => {
  const { isActive } = useContext(AccordionItemContext);

  const accordionContentCls = useMemo(() => {
    return className
      ? `${className} ${accordionContentBaseCls}`
      : accordionContentBaseCls;
  }, [className]);

  if (!isActive) return null;

  return <div className={accordionContentCls}>{children}</div>;
};

export default AccordionContent;