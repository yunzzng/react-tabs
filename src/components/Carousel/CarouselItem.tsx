import { FC, PropsWithChildren, useContext } from "react";
import { CarouselContext } from "."; 

interface CarouselItemProps extends PropsWithChildren {
    index: number;
}

const CarouselItem : FC<CarouselItemProps> = ({ children, index })  => {
    const { carouselIndex } = useContext(CarouselContext);
    
    if (carouselIndex !== index) {
        return null;
    }

    return (
        <div>{children}</div>
    );
}

export default CarouselItem;




    