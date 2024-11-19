import { FC, PropsWithChildren } from "react";
import { carouselItemListCls } from "../../consts/className";

interface CarouselItemListProps extends PropsWithChildren {}

const CarouselItemList: FC<CarouselItemListProps> = (props) => {
    const { children } = props;
    return (
        <div className={carouselItemListCls}>
            {children}
        </div>
    )
}


export default CarouselItemList;