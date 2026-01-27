import logo from "../assets/logo.png";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const linkClass =
    "flex items-center gap-2 transition-all duration-300 ease-out cursor-pointer hover:text-[#C9A24D] hover:translate-x-1";

  return (
    <footer className="bg-[#0B0B0B] text-[#B5B5B5]">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Pharaohs Tours"
              className="h-20 mb-4 object-contain"
            />

            <p className="text-sm mb-4">
              Real trips · Fair prices · Trusted experiences
            </p>

            <p className="text-sm leading-relaxed">
              We craft hassle-free Egypt trips across Hurghada, Sharm, Ain
              Sokhna and beyond — with personalized service and 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li className={linkClass}>Home</li>
              <li className={linkClass}>Destinations</li>
              <li className={linkClass}>Tours</li>
              <li className={linkClass}>What Our Clients Say</li>
              <li className={linkClass}>Contact</li>
            </ul>
          </div>

          {/* Popular Trips */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">
              Popular Trips
            </h4>
            <ul className="space-y-3 text-sm">
              <li className={linkClass}>
                Hurghada — <span className="text-[#7A7A7A]">4D / 3N</span>
              </li>
              <li className={linkClass}>
                Sharm El Sheikh —{" "}
                <span className="text-[#7A7A7A]">5D / 4N</span>
              </li>
              <li className={linkClass}>
                Ain Sokhna — <span className="text-[#7A7A7A]">3D / 2N</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">
              Contact & Info
            </h4>

            <ul className="space-y-4 text-sm">
              <li className={linkClass}>
                <Phone className="w-4 h-4 text-[#C9A24D]" />
                +20 123 456 7890
              </li>
              <li className={linkClass}>
                <Mail className="w-4 h-4 text-[#C9A24D]" />
                info@pharaohstours.com
              </li>
              <li className={linkClass}>
                <MapPin className="w-4 h-4 text-[#C9A24D]" />
                Dahab, Egypt
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              <span
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                               hover:bg-[#C9A24D] hover:text-[#0B0B0B]
                               transition-all duration-300 cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </span>

              <span
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                               hover:bg-[#C9A24D] hover:text-[#0B0B0B]
                               transition-all duration-300 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#7A7A7A]">
          <p>© 2025 Pharaohs Tours. All rights reserved.</p>

          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <span className="hover:text-[#C9A24D] transition cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-[#C9A24D] transition cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
