import { HeroWrapper, HeroImage, HeroText, Title } from "./Hero.styles";
import { Button } from "../../../App.style";
import heroImage from "../../../images/illustration-features-tab-1.svg";

const Hero = () => {
  return (
    <div>
      <HeroWrapper>
        <HeroImage>
          <img src={heroImage} alt="hero" />
        </HeroImage>

        <HeroText>
          <Title>
            A Simple Bookmark <br /> Manager
          </Title>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttons">
            <Button primary>Get it on Chrome</Button>
            <Button>Get it on Firefox</Button>
          </div>
        </HeroText>
      </HeroWrapper>
    </div>
  );
};

export default Hero;
