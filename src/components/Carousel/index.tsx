import { createContext, FC, PropsWithChildren, useState, Dispatch, SetStateAction } from "react";
import CarouselItemList from "./CarouselItemList";
import CarouselItem from "./CarouselItem";
import CarouselNavigator from "./CarouselNavigator";
import CarouselIndicator from "./CarouselIndicator";

interface CarouselCompoundProps {
    ItemList: typeof CarouselItemList;
    Item: typeof CarouselItem;
    Navigator: typeof CarouselNavigator;
    Indicator: typeof CarouselIndicator;
}

interface CarouselContextProps {
    carouselIndex: number;
    setCarouselIndex: Dispatch<SetStateAction<number>>;
    itemLength: number;
}

const CarouselContext = createContext<CarouselContextProps>({
    carouselIndex: 0,
    setCarouselIndex: () => {},
    itemLength: 0,
});


const Carousel: FC<PropsWithChildren> & CarouselCompoundProps = ({ children }) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const itemLength = 3; 

    const contextValue = {
        carouselIndex,
        setCarouselIndex,
        itemLength,
    };

    return (
        <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>
    );
}

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
export { CarouselContext };


