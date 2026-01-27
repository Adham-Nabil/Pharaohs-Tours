import { Link } from "react-router-dom";

const DestinationsSection = () => {
  const destinations = [
    { name: "Cairo", image: "https://placehold.co/600x400/png" },
    { name: "Alexandria", image: "https://placehold.co/600x400/png" },
    { name: "Luxor", image: "https://placehold.co/600x400/png" },
    { name: "Aswan", image: "https://placehold.co/600x400/png" },
    { name: "Sharm El Sheikh", image: "https://placehold.co/600x400/png" },
    { name: "Hurghada", image: "https://placehold.co/600x400/png" },
  ];

  return (
    <section id="destinations" className="py-14 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0B0B] mb-4">
            Destinations
          </h2>
          <p className="text-[#7A7A7A]">Choose from our top destinations</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={`/tours?destination=${destination.name}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer
                        transition-all duration-300 ease-out
                        hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-72 object-cover
                          transition-transform duration-500 ease-out
                          group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B]/70 via-transparent to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="relative inline-block text-xl font-semibold text-[#FFFFFF]
                            after:content-[''] after:absolute after:left-0 after:-bottom-2
                            after:h-0.5 after:w-full after:bg-[#C9A24D]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300 after:ease-out
                            group-hover:after:scale-x-100"
                >
                  {destination.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
