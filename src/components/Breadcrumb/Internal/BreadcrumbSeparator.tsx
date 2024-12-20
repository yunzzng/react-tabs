import { forwardRef } from "react";

interface BreadcrumbSeparatorProps {
  separator?: string; 
  className?: string;
}
const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ separator = ">" }, ref) => {
    return (
      <span ref={ref}>
        {separator}
      </span>
    );
  }
);

export default BreadcrumbSeparator;
