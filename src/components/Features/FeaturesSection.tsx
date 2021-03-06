import { FeaturesContainer } from "./FeaturesSection.styles";
import Carousel from "./Carousel";

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <Carousel />
    </FeaturesContainer>
  );
};

export default FeaturesSection;
