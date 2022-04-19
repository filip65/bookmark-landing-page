import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle, Wrapper } from "./App.style";
import Hero from "./components/Hero/Hero";
import FeaturesSection from "./components/Features/FeaturesSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <Navbar />
        {/* <Hero /> */}
        <FeaturesSection />
      </Wrapper>
    </>
  );
}

export default App;
