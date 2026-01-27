import { Link } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";

const TourCard = ({
  id,
  title,
  destination,
  price,
  duration,
  rating,
  image,
}) => {
  return (
    <Link
      to={`/tours/${id}`}
      className="group block h-full rounded-2xl overflow-hidden
                 bg-[#FFFFFF] border border-black/10
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover
                     transition-transform duration-500 ease-out
                     group-hover:scale-105"
        />

        {/* Rating badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1
                        bg-[#0B0B0B]/80 text-[#FFFFFF]
                        text-sm px-3 py-1 rounded-full"
        >
          <Star className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]" />
          <span>{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-bold text-[#0B0B0B] mb-2">{title}</h3>

        {/* Destination */}
        <div className="flex items-center gap-2 text-sm text-[#7A7A7A] mb-1">
          <MapPin className="w-4 h-4 text-[#C9A24D]" />
          <span>{destination}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-[#7A7A7A] mb-4">
          <Clock className="w-4 h-4 text-[#C9A24D]" />
          <span>{duration}</span>
        </div>

        {/* Push price & CTA to bottom */}
        <div className="mt-auto flex items-center justify-between">
          {/* Price */}
          <div>
            <span className="text-xl font-bold text-[#1F3A5F]">${price}</span>
            <span className="text-sm text-[#7A7A7A]"> / person</span>
          </div>

          {/* CTA */}
          <button
            className="cursor-pointer px-4 py-2 rounded-lg
                       bg-[#1F3A5F] text-[#FFFFFF] text-sm font-semibold
                       transition-all duration-300 ease-out
                       hover:bg-[#C9A24D] hover:text-[#0B0B0B]"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
