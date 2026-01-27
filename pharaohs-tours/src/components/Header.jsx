import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import logo from "../assets/logo.png";
const Header = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPopularTours = () => {
    document
      .getElementById("popular-tours")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document
      .getElementById("testimonials")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const navItemClass =
    "relative pb-1 text-md font-medium transition-colors cursor-pointer text-[#1A1A1A] hover:text-[#C9A24D] " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#C9A24D] " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto relative flex items-center px-6 py-4">
        {/* Logo (left) */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Pharaohs Tours Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation (perfectly centered) */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          <li>
            {location.pathname === "/" ? (
              <button onClick={scrollToTop} className={navItemClass}>
                Home
              </button>
            ) : (
              <Link to="/" className={navItemClass}>
                Home
              </Link>
            )}
          </li>

          <li>
            {location.pathname === "/" ? (
              <button onClick={scrollToDestinations} className={navItemClass}>
                Destinations
              </button>
            ) : (
              <Link to="/#destinations" className={navItemClass}>
                Destinations
              </Link>
            )}
          </li>

          <li>
            {location.pathname === "/" ? (
              <button onClick={scrollToPopularTours} className={navItemClass}>
                Tours
              </button>
            ) : (
              <Link to="/#popular-tours" className={navItemClass}>
                Tours
              </Link>
            )}
          </li>

          <li>
            {location.pathname === "/" ? (
              <button onClick={scrollToTestimonials} className={navItemClass}>
                What Our Clients Say
              </button>
            ) : (
              <Link to="/#testimonials" className={navItemClass}>
                What Our Clients Say
              </Link>
            )}
          </li>
        </ul>

        {/* Language label (right) */}
        <div className="ml-auto">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       cursor-pointer text-sm font-medium
                       text-[#1A1A1A] bg-black/5
                       transition-all duration-300 ease-out
                       hover:bg-[#C9A24D]/15 hover:text-[#C9A24D]
                       hover:-translate-y-px"
          >
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
