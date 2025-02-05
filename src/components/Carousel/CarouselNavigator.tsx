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
import { carouselNavigatorBaseCls } from "@consts/className";

interface CarouselNavigatorProps {
  className?: string;
  children?: (prev: () => void, next: () => void) => ReactNode;
}

const CarouselNavigator: FC<CarouselNavigatorProps> = ({
  className,
  children,
}) => {
  const carouselContext = useContext(CarouselContext) ?? {
    setCarouselIndex: () => {},
    itemLength: 0,
  };

  const { setCarouselIndex, itemLength } = carouselContext;

  // const handlePrevious = () => {
  //     // 현재 인덱스가 0이면 마지막 인덱스로 이동, 그렇지 않으면 이전 인덱스로 이동
  //     setCarouselIndex((prevIndex) => (prevIndex === 0 ? itemLength - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //     // 현재 인덱스가 마지막 인덱스면 첫 번째 인덱스로 이동, 그렇지 않으면 다음 인덱스로 이동
  //     setCarouselIndex((prevIndex) => (prevIndex === itemLength - 1 ? 0 : prevIndex + 1));
  // };

  const handleNavigation = (direction: "previous" | "next") => {
    setCarouselIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? itemLength - 1 : prevIndex - 1;
      } else {
        return prevIndex === itemLength - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const carouselNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${carouselNavigatorBaseCls}`
      : carouselNavigatorBaseCls;
  }, [className]);

  //   if (Array.isArray(children)) {
  //     return (
  //         <div className={carouselNavigatorCls}>
  //             {children.map((child, index) => {
  //                 if (isValidElement(child)) {
  //                     const direction = index === 0 ? "previous" : "next";
  //                     return cloneElement(child as ReactElement, {
  //                         onClick: () => handleNavigation(direction),
  //                         key: index,
  //                     });
  //                 }
  //                 return child;
  //             })}
  //         </div>
  //     );
  // }

  if (isValidElement(children)) {
    return (
      <div className={carouselNavigatorCls}>
        {cloneElement(children as ReactElement, {
          onClick: handleNavigation, 
        })}
      </div>
    );
  }

  return (
    <div className={carouselNavigatorCls}>
      {/* <button onClick={handlePrevious}>{"<"}</button>
            <button onClick={handleNext}>{">"}</button> */}

      {/** 사용자가 커스텀 가능하게 */}
      {children && typeof children === "function" ? (
        // 사용자가 커스텀한 children
        children(
          () => handleNavigation("previous"),
          () => handleNavigation("next")
        )
      ) : (
        // 기본 버튼
        <>
          <button onClick={() => handleNavigation("previous")}>{"<"}</button>
          <button onClick={() => handleNavigation("next")}>{">"}</button>
        </>
      )}
    </div>
  );
};

export default CarouselNavigator;
