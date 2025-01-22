import { FC, useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorBaseCls } from "@consts/className";

interface CarouselNavigatorProps {
    className?: string; 
  }

const CarouselNavigator: FC<CarouselNavigatorProps> = ({ className }) =>  {
    const { setCarouselIndex, itemLength } = useContext(CarouselContext);

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
        return className ? `${className} ${carouselNavigatorBaseCls}` : carouselNavigatorBaseCls;
      }, [className]);

    return (
        <div className={carouselNavigatorCls}>
            {/* <button onClick={handlePrevious}>{"<"}</button>
            <button onClick={handleNext}>{">"}</button> */}
            <button onClick={() => handleNavigation("previous")}>{"<"}</button>
            <button onClick={() => handleNavigation("next")}>{">"}</button>
        </div>
    );
};

export default CarouselNavigator;