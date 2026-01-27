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
    <section id="popular-tours" className="py-14 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0B0B] mb-4">
            Popular Trips
          </h2>
          <p className="text-[#7A7A7A]">
            Discover our top-rated trips and book your next adventure
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.2 },
          }}
          className="tours-swiper"
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
