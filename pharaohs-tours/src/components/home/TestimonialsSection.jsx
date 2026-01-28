import { Star, BadgeCheck, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sara K.",
      avatar: "https://i.pravatar.cc/100?img=32",
      trip: "Giza • Sharm Deluxe",
      location: "Sharm El Sheikh",
      duration: "5D / 4N",
      rating: 5,
      quote:
        "Great value and perfectly organized itinerary. Hotel choice and transfers were spot on. Will book again!",
      date: "May 2025",
      verified: true,
    },
    {
      name: "Ahmed M.",
      avatar: "https://i.pravatar.cc/100?img=12",
      trip: "Cairo & Luxor Explorer",
      location: "Cairo",
      duration: "4D / 3N",
      rating: 5,
      quote:
        "Professional guides and smooth planning. Everything felt premium without being overpriced.",
      date: "April 2025",
      verified: true,
    },
    {
      name: "Lina R.",
      avatar: "https://i.pravatar.cc/100?img=45",
      trip: "Red Sea Escape",
      location: "Hurghada",
      duration: "3D / 2N",
      rating: 4,
      quote:
        "Beautiful experience overall. The snorkeling trip was unforgettable.",
      date: "March 2025",
      verified: true,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-14 px-4 sm:px-6 lg:px-32 bg-[#FFFFFF]"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B0B0B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#7A7A7A] text-sm sm:text-base">
            Real travelers. Real stories. Verified reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left: Rating Summary (desktop only) */}
          <div className="hidden lg:block bg-[#FFFFFF] rounded-2xl border border-black/10 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-bold text-[#1F3A5F]">4.9</span>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C9A24D] text-[#C9A24D]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#7A7A7A]">Based on 1,240 reviews</p>
              </div>
            </div>

            {["Service", "Value", "Organization"].map((label) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-sm text-[#7A7A7A] mb-1">
                  <span>{label}</span>
                  <span>4.8</span>
                </div>
                <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-[#1F3A5F]" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Testimonials Carousel */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={20}
              slidesPerView={1}
              className="testimonials-swiper pb-12"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#FFFFFF] rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-[#0B0B0B]">
                            {t.name}
                          </p>
                          <p className="text-sm text-[#7A7A7A]">{t.trip}</p>
                        </div>
                      </div>

                      {t.verified && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F3A5F] bg-[#1F3A5F]/10 px-3 py-1 rounded-full w-fit">
                          <BadgeCheck className="w-4 h-4" />
                          Verified Traveler
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[#1F2937] mb-6 leading-relaxed text-sm sm:text-base">
                      “{t.quote}”
                    </p>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-[#7A7A7A]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C9A24D]" />
                        {t.location} • {t.duration}
                      </div>
                      <span>{t.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
