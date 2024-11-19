import { FC, PropsWithChildren, useContext } from "react";
import { CarouselContext } from "."; 
import { carouselItemCls } from "../../consts/className";

interface CarouselItemProps extends PropsWithChildren {
    index: number;
}

const CarouselItem : FC<CarouselItemProps> = ({ children, index })  => {
    const { carouselIndex } = useContext(CarouselContext);
    
    if (carouselIndex !== index) {
        return null;
    }

    return (
        <div className={carouselItemCls}>
            {children}
        </div>
    );
}

export default CarouselItem;




    