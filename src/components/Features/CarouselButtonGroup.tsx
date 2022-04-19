import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import { Option, Options } from "./Carousel.style";
import data, { CarouselItem } from "./carouselData";

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const CarouselButtonGroup = ({
  goToSlide,
  ...rest
}: CarouselButtonGroupProps) => {
  const currentSlide = rest.carouselState?.currentSlide;

  return (
    <Options className="carousel-button-group">
      {data.map((item: CarouselItem, index: number) => {
        return (
          <Option
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide?.(index)}
          >
            {item.name}
          </Option>
        );
      })}
    </Options>
  );
};

export default CarouselButtonGroup;
