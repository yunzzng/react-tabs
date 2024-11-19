import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorCls } from '../../consts/className';

const CarouselIndicator = () => {
  const { carouselIndex, setCarouselIndex, itemLength } = useContext(CarouselContext);

  return (
    <div className={carouselIndicatorCls}>
      {/* itemLength만큼의 버튼을 생성 */}
      {Array.from({ length: itemLength }).map((_, index) => {
        const isActive = useMemo(() => carouselIndex === index, [carouselIndex, index]);
        
        return (
          <button key={index} data-active={isActive} onClick={() => setCarouselIndex(index)} />
        );
      })}
    </div>
  );
};

export default CarouselIndicator;

