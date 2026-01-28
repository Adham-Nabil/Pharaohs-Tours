import { useState, useRef } from "react";
import BookingModal from "../components/BookingModal";
import { useParams } from "react-router-dom";
import { tours } from "../data/tours";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickBookingCard from "../components/QuickBookingCard";
import { MapPin, Star, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TourDetails = () => {
  const gallerySwiperRef = useRef(null);
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!tour) {
    return (
      <div>
        <Header />
        <main className="container mx-auto p-4">
          <p className="text-center text-xl">Tour not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {/* SECTION 1 — HERO / COVER */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${tour.images[0]})` }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/70 to-[#0B0B0B]/40" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[90vh] items-center">
          <div className="container mx-auto px-6 pt-24">
            {/* pt-32 protects floating header */}
            <div className="max-w-3xl">
              {/* Destination */}
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-5">
                {tour.destination}
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#FFFFFF] mb-6">
                {tour.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-12 text-[#B5B5B5]">
                <span className="flex items-center gap-1">
                  <span className="text-[#C9A24D]">★</span>
                  {tour.rating}
                </span>
                <span className="w-1 h-1 bg-[#7A7A7A] rounded-full" />
                <span>{tour.duration}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="
              cursor-pointer px-8 py-3 rounded-full
              bg-[#C9A24D] text-[#0B0B0B] font-semibold
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30
            "
                >
                  Book Now
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
              cursor-pointer px-8 py-3 rounded-full
              border border-[#C9A24D] text-[#FFFFFF] font-semibold
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:bg-[#C9A24D] hover:text-[#0B0B0B]
              hover:shadow-lg hover:shadow-black/30
            "
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MAIN CONTENT (TWO COLUMNS) */}
      <main className="container mx-auto p-4 max-w-6xl text-[#0B0B0B]">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* LEFT COLUMN (Scrollable main content) */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            {/* 1) Photo Gallery */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5">
                {/* Header */}
                <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>

                {/* Main Swiper */}
                <div className="relative rounded-xl overflow-hidden">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => (gallerySwiperRef.current = swiper)}
                    onSlideChange={(swiper) =>
                      setSelectedImageIndex(swiper.activeIndex)
                    }
                    className="
          w-full
          aspect-4/3
          sm:aspect-video
          lg:h-105
          gallery-swiper
        "
                  >
                    {tour.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${tour.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Thumbnails */}
                <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                  {tour.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedImageIndex(index);
                        gallerySwiperRef.current?.slideTo(index);
                      }}
                      className="shrink-0"
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`
              w-20 h-16 sm:w-24 sm:h-20
              object-cover rounded-lg
              transition-all
              ${
                index === selectedImageIndex
                  ? "ring-2 ring-[#C9A24D]"
                  : "opacity-70 hover:opacity-100"
              }
            `}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2) About the Tour */}
            <div className="mb-16 bg-white rounded-2xl shadow-md p-5">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-4">
                About Ecotel
              </h2>

              {/* Description */}
              <p className="text-[#B5B5B5] leading-relaxed mb-10">
                {tour.about}
              </p>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Hotel Information */}
                <div>
                  <h3 className="text-base font-semibold text-[#0B0B0B] mb-4">
                    Hotel Information
                  </h3>

                  <ul className="space-y-3 text-[#7A7A7A]">
                    <li className="flex items-center gap-2">
                      <Check size={18} className="text-[#C9A24D]" />
                      {tour.hotelInfo.name}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={18} className="text-[#C9A24D]" />
                      {tour.hotelInfo.location}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={18} className="text-[#C9A24D]" />
                      Pool and Beach
                    </li>
                  </ul>
                </div>

                {/* Package Information */}
                <div>
                  <h3 className="text-base font-semibold text-[#0B0B0B] mb-4">
                    Package Information
                  </h3>

                  <ul className="space-y-3 text-[#7A7A7A]">
                    <li className="flex items-center gap-2">
                      <Star size={18} className="text-[#C9A24D]" />
                      {tour.packageInfo.type}
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={18} className="text-[#C9A24D]" />
                      free under 6
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4) Packages & Seasonal Rates */}
            <div id="packages" className="mb-16">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-2">
                Packages & Seasonal Rates
              </h2>

              <p className="text-[#7A7A7A] mb-8">
                Hotel prices are subject to confirmation at booking time due to
                frequent updates by hotels. Upgrade options and child policy
                shown below.
              </p>

              {/* Packages List */}
              <div className="space-y-10 mb-12">
                {tour.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-md"
                  >
                    {/* Location + Date */}
                    <div className="mb-1">
                      <p className="flex items-center gap-2 text-[#7A7A7A]">
                        <MapPin size={16} className="text-[#C9A24D]" />
                        {pkg.location}
                      </p>
                      <p className="font-semibold text-[#0B0B0B]">
                        {pkg.dateRange}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 mb-1">
                      <div className="flex justify-between">
                        <span className="text-[#7A7A7A]">Board</span>
                        <span className="text-[#0B0B0B] font-medium">
                          {pkg.board}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#7A7A7A]">Room</span>
                        <span className="text-[#0B0B0B]">{pkg.roomType}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#7A7A7A]">Transportation</span>
                        <span className="text-[#0B0B0B]">
                          {pkg.transportation}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#7A7A7A]">Price</span>
                      <span className="text-lg font-semibold text-[#C9A24D]">
                        ${pkg.price} {pkg.currency}
                      </span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="
      cursor-pointer px-7 py-2.5 rounded-full
      border border-[#C9A24D]
      text-[#0B0B0B] font-semibold
      transition-all duration-300 ease-out
      hover:bg-[#C9A24D] hover:-translate-y-0.5
      hover:shadow-lg hover:shadow-black/20
    "
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>

              {/* Upgrade Options */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4">
                  Upgrade Options
                </h3>

                <ul className="space-y-2 text-[#7A7A7A]">
                  {tour.upgradeOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                      {option}
                    </li>
                  ))}
                </ul>
                {/* Child Policy */}
                <h3 className="text-lg font-semibold text-[#0B0B0B] my-4">
                  Child Policy
                </h3>

                <ul className="space-y-2 text-[#7A7A7A]">
                  {tour.childPolicy.map((policy, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3) Highlights */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-6">
                Highlights
              </h2>

              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {tour.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#7A7A7A]"
                  >
                    {/* Accent dot */}
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#C9A24D] shrink-0" />

                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="sticky top-24">
              <QuickBookingCard
                tour={tour}
                onBook={() => setIsBookingOpen(true)}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tour={tour}
      />
    </div>
  );
};

export default TourDetails;
