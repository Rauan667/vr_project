import Navbar from "./Navbar";
import HeroSection from "./Hero";
import AboutSection from "./About";
import Features from "./Features";
import TechnologiesSection from "./TechnologiesSection";
import StepsSection from "./StepsSection";
import JoinHydra from "./JoinHydra";
import Footer from "./Footer";

function App() {
  return (
    <div className="px-[26px] bg-[#343045]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Features />
      <TechnologiesSection />
      <StepsSection />
      <JoinHydra />
      <Footer />
    </div>
  );
}

export default App;
