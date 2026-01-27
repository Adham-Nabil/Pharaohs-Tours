import BookingForm from "./BookingForm";
import { StarIcon } from "lucide-react";

const BookingModal = ({ isOpen, onClose, tour }) => {
  if (!isOpen || !tour) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-2xl
          max-w-4xl w-full mx-4
          max-h-[90vh] overflow-y-auto
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#0B0B0B]">
            Book — {tour.title}
          </h2>

          <button
            onClick={onClose}
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              text-[#7A7A7A] text-xl
              transition-colors
              hover:bg-gray-100 hover:text-[#0B0B0B]
              cursor-pointer
            "
          >
            &times;
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Trip Details */}
          <div className="rounded-xl border border-gray-100 bg-[#F9F9F9] p-5">
            <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#C9A24D] rounded-full" />
              Trip Details
            </h3>

            <div className="flex items-start gap-4">
              <img
                src={tour.images[0]}
                alt={tour.title}
                className="w-20 h-20 object-cover rounded-xl"
              />

              <div className="flex-1">
                <p className="font-semibold text-[#0B0B0B] mb-1">
                  {tour.title}
                </p>

                <p className="text-sm text-[#7A7A7A] mb-3">
                  {tour.about.substring(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-[#7A7A7A]">
                  <span>
                    <strong className="text-[#0B0B0B]">Destination:</strong>{" "}
                    {tour.destination}
                  </span>
                  <span className="flex items-center gap-1">
                    <strong className="text-[#0B0B0B]">Rating:</strong>{" "}
                    <StarIcon size={16} className="text-[#C9A24D]" />{" "}
                    {tour.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="rounded-xl border border-gray-100 bg-[#F9F9F9] p-5">
            <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#C9A24D] rounded-full" />
              Package Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-[#7A7A7A] mb-1">Package</p>
                <p className="font-medium text-[#0B0B0B]">
                  {tour.packages[0]?.location || "N/A"}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-[#7A7A7A] mb-1">Base Price</p>
                <p className="font-semibold text-[#C9A24D]">
                  ${tour.packages[0]?.price || 0}{" "}
                  {tour.packages[0]?.currency || "USD"}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-[#7A7A7A] mb-1">Board</p>
                <p className="font-medium text-[#0B0B0B]">
                  {tour.packages[0]?.board || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="rounded-xl border border-gray-100 bg-[#F9F9F9] p-5">
            <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#C9A24D] rounded-full" />
              Booking Information
            </h3>

            <BookingForm tour={tour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
