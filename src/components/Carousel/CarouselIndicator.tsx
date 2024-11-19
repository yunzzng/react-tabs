import { useContext } from "react";
import { CarouselContext } from ".";

const CarouselIndicator = () => {
  const { carouselIndex, setCarouselIndex, itemLength } = useContext(CarouselContext);

  return (
    <div>
      {/* itemLength만큼의 버튼을 생성 */}
      {Array.from({ length: itemLength }).map((_, index) => (
          <button 
              key={index} 
              onClick={() => setCarouselIndex(index)} 
              style={{
                  backgroundColor: carouselIndex === index ? "blue" : "white",
                  margin: "2px",  
              }}
          />
      ))}
    </div>
  );
};

export default CarouselIndicator;