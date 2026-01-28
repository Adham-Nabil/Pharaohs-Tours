import { useNavigate } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Single navigation logic for desktop + mobile
  const handleNav = (sectionId = null) => {
    if (sectionId) {
      navigate(`/#${sectionId}`);
    } else {
      navigate("/");
    }

    setMenuOpen(false);
  };

  const navItemClass =
    "relative pb-1 text-md font-medium transition-colors cursor-pointer text-[#1A1A1A] hover:text-[#C9A24D] " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#C9A24D] " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <button onClick={() => handleNav()} className="flex items-center">
          <img src={logo} alt="Pharaohs Tours Logo" className="h-10 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <li>
            <button onClick={() => handleNav("home")} className={navItemClass}>
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("destinations")}
              className={navItemClass}
            >
              Destinations
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("popular-tours")}
              className={navItemClass}
            >
              Tours
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("testimonials")}
              className={navItemClass}
            >
              What Our Clients Say
            </button>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language label */}
          <div
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full
                       cursor-pointer text-sm font-medium
                       text-[#1A1A1A] bg-black/5
                       transition-all duration-300
                       hover:bg-[#C9A24D]/15 hover:text-[#C9A24D]"
          >
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 bg-white shadow-inner">
          <li>
            <button onClick={() => handleNav("home")} className={navItemClass}>
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("destinations")}
              className={navItemClass}
            >
              Destinations
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("popular-tours")}
              className={navItemClass}
            >
              Tours
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("testimonials")}
              className={navItemClass}
            >
              What Our Clients Say
            </button>
          </li>

          {/* Mobile Language */}
          <div
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full
                       text-sm font-medium w-fit
                       text-[#1A1A1A] bg-black/5"
          >
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
