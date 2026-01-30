import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import DestinationsSection from "../components/home/DestinationsSection";
import ToursSection from "../components/home/ToursSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home = () => {
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
