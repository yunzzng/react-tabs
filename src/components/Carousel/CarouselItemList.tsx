import { FC, PropsWithChildren, useMemo } from "react";
import { carouselItemListBaseCls } from "@consts/className";

interface CarouselItemListProps extends PropsWithChildren {
    className?: string; 
}

const CarouselItemList: FC<CarouselItemListProps> = (props, className) => {
    const { children } = props;

    const carouselItemListCls = useMemo(() => {
        return className ? `${className} ${carouselItemListBaseCls}` : carouselItemListBaseCls;
      }, [className]);


    return (
        <div className={carouselItemListCls}>
            {children}
        </div>
    )
}


export default CarouselItemList;