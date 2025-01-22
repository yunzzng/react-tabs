import { FC, PropsWithChildren, useContext, useMemo } from "react";
import { CarouselContext } from "."; 
import { carouselItemBaseCls } from "@consts/className";

interface CarouselItemProps extends PropsWithChildren {
    index: number;
    className?: string; 
}

const CarouselItem: FC<CarouselItemProps> = ({ children, index, className }) => {
    const { carouselIndex } = useContext(CarouselContext);

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