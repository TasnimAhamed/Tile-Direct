import Apply from "./sections/Apply";
import Benifits from "./sections/Benifits";
import Comparison from "./sections/Comparison";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Comparison />
      <Features />
      <Benifits />
      <Apply />
    </>
  );
};

export default HomePage;
