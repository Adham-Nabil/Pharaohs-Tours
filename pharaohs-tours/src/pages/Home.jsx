import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import DestinationsSection from "../components/home/DestinationsSection";
import ToursSection from "../components/home/ToursSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      if (location.state.scrollTo === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ToursSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
