import { FC, useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorBaseCls } from '@consts/className';

interface CarouselIndicatorProps {
  className?: string; 
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({ className }) => {
  const { carouselIndex, setCarouselIndex, itemLength } = useContext(CarouselContext);

  const carouselIndicatorCls = useMemo(() => {
    return className ? `${className} ${carouselIndicatorBaseCls}` : carouselIndicatorBaseCls;
  }, [className]);

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

