import Navbar from "./components/Header/Navbar/Navbar";
import { GlobalStyle, Wrapper } from "./App.style";
import Hero from "./components/Header/Hero/Hero";
import FeaturesSection from "./components/Header/FeaturesSection/FeaturesSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <Navbar />
        <Hero />
        <FeaturesSection />
      </Wrapper>
    </>
  );
}

export default App;
