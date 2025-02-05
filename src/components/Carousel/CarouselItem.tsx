import { FC, ReactNode, useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselItemBaseCls } from "@consts/className";

interface CarouselItemProps {
    index: number;
    className?: string; 
    children: ReactNode; 
}

const CarouselItem: FC<CarouselItemProps> = ({ children, index, className }) => {
    const carouselContext = useContext(CarouselContext) ?? { carouselIndex: 0 };
    const { carouselIndex } = carouselContext;

    const carouselItemCls = useMemo(() => {
        return className ? `${className} ${carouselItemBaseCls}` : carouselItemBaseCls;
    }, [className]);

    if (carouselIndex !== index) {
        return null;
    }

    return (
        <div className={carouselItemCls}>
            {children}
        </div>
    );
};

export default CarouselItem;