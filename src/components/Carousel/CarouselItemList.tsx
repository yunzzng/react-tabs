import { FC, PropsWithChildren } from "react";

interface CarouselItemListProps extends PropsWithChildren {}

const CarouselItemList: FC<CarouselItemListProps> = (props) => {
    const { children } = props;
    return <div>{children}</div>;
}


export default CarouselItemList;