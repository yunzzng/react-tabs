import {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { CarouselContext } from ".";
import { carouselIndicatorBaseCls } from "@consts/className";

interface CarouselIndicatorProps {
  className?: string;
  children?: (indexes: number[], to: (index: number) => void) => ReactNode;
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  className,
  children,
}) => {
  const { carouselIndex, setCarouselIndex, itemLength } =
    useContext(CarouselContext);

  const carouselIndicatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselIndicatorBaseCls}`
      : carouselIndicatorBaseCls;
  }, [className]);

  const indexes = Array.from({ length: itemLength }, (_, index) => index);
  const to = (index: number) => setCarouselIndex(index);

  if (isValidElement(children)) {
    return (
      <div className={carouselIndicatorCls}>
        {indexes.map((index) =>
          cloneElement(children as ReactElement, {
            key: index,
            "data-active": carouselIndex === index,
            onClick: () => to(index),
          })
        )}
      </div>
    );
  }

  return (
    <div className={carouselIndicatorCls}>
      {children && typeof children === "function"
        ? children(indexes, to)
        : indexes.map((index) => {
            const isActive = carouselIndex === index;
            return (
              <button
                key={index}
                data-active={isActive}
                onClick={() => to(index)}
              >
                {index + 1}
              </button>
            );
          })}
    </div>
  );
};

export default CarouselIndicator;
