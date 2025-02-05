import { FC, useContext, useMemo, useEffect, Children, ReactNode } from "react";
import { CarouselContext } from ".";
import { carouselItemListBaseCls } from "@consts/className";

interface CarouselItemListProps  {
    className?: string; 
    children: ReactNode; 
}

const CarouselItemList: FC<CarouselItemListProps> = ({ children, className }) => {
    const carouselContext = useContext(CarouselContext) ?? { setItemLength: () => {} };
    const { setItemLength } = carouselContext;

    const carouselItemListCls = useMemo(() => {
        return className ? `${className} ${carouselItemListBaseCls}` : carouselItemListBaseCls;
    }, [className]);


    useEffect(() => {
        const totalItems = Children.count(children); 
        setItemLength(totalItems); 
    }, [children, setItemLength]);

    return (
        <div className={carouselItemListCls}>
            {children}
        </div>
    );
};

export default CarouselItemList;