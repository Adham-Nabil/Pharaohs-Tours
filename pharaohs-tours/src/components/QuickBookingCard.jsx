import { Phone, Mail, ArrowRight } from "lucide-react";

const QuickBookingCard = ({ onBook }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-semibold text-[#0B0B0B] mb-2">
        Quick Booking
      </h3>

      <p className="text-sm text-[#7A7A7A] mb-5 leading-relaxed">
        Select dates & options in the booking modal to calculate the total.
        Click “Proceed to payment” to continue to checkout.
      </p>

      {/* Primary CTA */}
      <button
        onClick={onBook}
        className="
          w-full mb-3
          cursor-pointer px-6 py-3 rounded-full
          bg-[#C9A24D] text-[#0B0B0B] font-semibold
          transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30
        "
      >
        Quick Book
      </button>

      {/* Secondary CTA */}
      <a
        href="#"
        className="
          w-full flex items-center justify-center gap-2
          cursor-pointer px-6 py-3 rounded-full
          border border-[#C9A24D]
          text-[#0B0B0B] font-semibold
          transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:bg-[#C9A24D]
          hover:shadow-lg hover:shadow-black/30
        "
      >
        <Phone size={18} />
        Call
      </a>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-100" />

      {/* Contact */}
      <div className="space-y-3 text-sm">
        {/* Phone */}
        <div
          className="
      flex items-center gap-2
      text-[#1F3A5F] cursor-pointer
      transition-colors duration-300 ease-out
      hover:text-[#C9A24D]
    "
        >
          <Phone
            size={16}
            className="transition-colors duration-300 ease-out"
          />
          <a href="#">+20 123 456 7890</a>
        </div>

        {/* Email */}
        <div
          className="
      flex items-center gap-2
      text-[#1F3A5F] cursor-pointer
      transition-colors duration-300 ease-out
      hover:text-[#C9A24D]
    "
        >
          <Mail size={16} className="transition-colors duration-300 ease-out" />
          <a href="mailto:info@pharaohstours.com">info@pharaohstours.com</a>
        </div>

        {/* Help link */}
        <a
          href="#"
          className="
      inline-flex items-center gap-1
      text-[#1F3A5F] font-medium
      transition-colors duration-300 ease-out
      hover:text-[#C9A24D]
      mt-2
    "
        >
          More help & support
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default QuickBookingCard;
