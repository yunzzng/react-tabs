import { FC, ReactNode, useContext, useMemo } from 'react';
import { AccordionItemContext } from './AccordionItem';
import { accordionHeaderBaseCls } from '@consts/className';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const AccordionHeader: FC<HeaderProps> = ({ children, className }) => {
  const { isActive, toggleActive } = useContext(AccordionItemContext);

  const accordionHeaderCls = useMemo(() => {
    const baseClass = className
      ? `${className} ${accordionHeaderBaseCls}`
      : accordionHeaderBaseCls;
    return isActive ? `${baseClass} open` : baseClass;
  }, [className, isActive]);

  return (
    <div onClick={toggleActive} className={accordionHeaderCls}>
      {children}
      <span>{isActive ? '-' : '+'}</span>
    </div>
  );
};

export default AccordionHeader;