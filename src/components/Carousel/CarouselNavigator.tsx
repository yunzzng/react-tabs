import { useContext } from "react";
import { CarouselContext } from ".";

const CarouselNavigator = () => {
    const { setCarouselIndex, itemLength } = useContext(CarouselContext);

    const handlePrevious = () => {
        // 현재 인덱스가 0이면 마지막 인덱스로 이동, 그렇지 않으면 이전 인덱스로 이동
        setCarouselIndex((prevIndex) => (prevIndex === 0 ? itemLength - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        // 현재 인덱스가 마지막 인덱스면 첫 번째 인덱스로 이동, 그렇지 않으면 다음 인덱스로 이동
        setCarouselIndex((prevIndex) => (prevIndex === itemLength - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <button onClick={handlePrevious}>{"<"}</button>
            <button onClick={handleNext}>{">"}</button>
        </div>
    );
};

export default CarouselNavigator;