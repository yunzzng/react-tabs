import { createContext, FC,useState, Dispatch, SetStateAction, ReactNode, useMemo } from "react";
import CarouselItemList from "./CarouselItemList";
import CarouselItem from "./CarouselItem";
import CarouselNavigator from "./CarouselNavigator";
import CarouselIndicator from "./CarouselIndicator";
import { carouselBaseCls } from "@consts/className";

interface CarouselProps {
    children?: ReactNode;
    className?: string; 
}

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


const Carousel: FC<CarouselProps> & CarouselCompoundProps = ({ children, className }) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const itemLength = 3; 

    const contextValue = {
        carouselIndex,
        setCarouselIndex,
        itemLength,
    };

    const carouselCls = useMemo(() => {
        return className ? `${className} ${carouselBaseCls}` : carouselBaseCls;
    }, [className]);

    return (
        <CarouselContext.Provider value={contextValue}>
            <div className={carouselCls}>
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
export { CarouselContext };


