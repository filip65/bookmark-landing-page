import { useState } from "react";
import {
  Option,
  Options,
  Slider,
  ImageWrapper,
  TextWrapper,
} from "./Carousel.style";
import data, { CarouselItem } from "./carouselData";

const Carousel = () => {
  const [active, setActive] = useState(data[0]);

  return (
    <div>
      <Options>
        {data.map((item: CarouselItem) => (
          <Option
            active={active.name === item.name}
            onClick={() => setActive(item)}
          >
            {item.name}
          </Option>
        ))}
      </Options>

      <Slider>
        <ImageWrapper>
          <img
            src={process.env.PUBLIC_URL + "/images/" + active.image}
            alt="feature"
          />
        </ImageWrapper>

        <TextWrapper>
          <h2>{}</h2>
        </TextWrapper>
      </Slider>
    </div>
  );
};

export default Carousel;
