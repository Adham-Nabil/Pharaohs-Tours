import { tours } from "../../data/tours";
import TourCard from "../TourCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ToursSection = () => {
  const featuredTours = tours.slice(0, 6);

  return (
    <section id="popular-tours" className="py-12 sm:py-14 bg-[#F8F7F4]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-3 sm:mb-4">
            Popular Trips
          </h2>
          <p className="text-[#7A7A7A] text-sm sm:text-base max-w-xl mx-auto">
            Discover our top-rated trips and book your next adventure
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.2 },
          }}
          className="tours-swiper pb-10"
        >
          {featuredTours.map((tour) => (
            <SwiperSlide key={tour.id} className="h-auto">
              <TourCard
                id={tour.id}
                title={tour.title}
                destination={tour.destination}
                price={tour.price}
                duration={tour.duration}
                rating={tour.rating}
                image={tour.images[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ToursSection;
