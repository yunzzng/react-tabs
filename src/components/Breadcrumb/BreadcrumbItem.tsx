import { useEffect, useRef, useContext, ReactNode, useMemo } from "react";
import { BreadcrumbContext } from "./index";
import { breadcrumbItemBaseCls } from "@consts/className";

interface BreadcrumbItemProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const BreadcrumbItem = ({ href, children, className }: BreadcrumbItemProps) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const breadcrumbContext = useContext(BreadcrumbContext) ?? {
    addItemWidth: () => {},
  };

  const { addItemWidth } = breadcrumbContext;

  useEffect(() => {
    if (itemRef.current) {
      const width = itemRef.current.getBoundingClientRect().width;
      addItemWidth(width);
    }
  }, [addItemWidth]);

  const breadcrumbItemCls = useMemo(() => {
    return className
      ? `${className} ${breadcrumbItemBaseCls}`
      : breadcrumbItemBaseCls;
  }, [className]);

  return (
    <a ref={itemRef} href={href} className={breadcrumbItemCls}>
      {children}
    </a>
  );
};

export default BreadcrumbItem;
