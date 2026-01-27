const HeroSection = () => {
  const handleExploreTrips = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0B0B]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6">
          Discover Egypt’s Hidden Gems
        </h1>

        <p className="text-base md:text-lg text-[#B5B5B5] mb-10">
          Trips to Hurghada, Sharm El-Sheikh & Ain Sokhna — book now, enjoy
          later.
        </p>

        <div className="flex items-center justify-center gap-6">
          {/* Primary CTA */}
          <button
            onClick={handleExploreTrips}
            className="cursor-pointer px-8 py-3 rounded-full bg-[#C9A24D] text-[#0B0B0B] font-semibold
                      transition-all duration-300 ease-out
                      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
          >
            Book Now
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleExploreTrips}
            className="cursor-pointer px-8 py-3 rounded-full border border-[#C9A24D] text-[#FFFFFF] font-semibold
                      transition-all duration-300 ease-out
                      hover:-translate-y-0.5 hover:bg-[#C9A24D] hover:text-[#0B0B0B]
                      hover:shadow-lg hover:shadow-black/30"
          >
            Explore Trips
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
