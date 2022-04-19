import {
  CarouselWrapper,
  Content,
  ContentText,
  ContentImage,
} from "./Carousel.style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data, { CarouselItem } from "./carouselData";
import CarouselButtonGroup from "./CarouselButtonGroup";
import { Button } from "../../App.style";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={false}
        autoPlaySpeed={20000000}
        renderButtonGroupOutside={true}
        customButtonGroup={<CarouselButtonGroup />}
      >
        {data.map((item: CarouselItem) => {
          return (
            <Content>
              <ContentImage>
                <img src={item.image} alt="" />
              </ContentImage>

              <ContentText>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Button primary>More Info</Button>
              </ContentText>
            </Content>
          );
        })}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CustomCarousel;
