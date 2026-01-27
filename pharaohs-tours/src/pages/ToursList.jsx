import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";
import Pagination from "../components/Pagination";
import { tours } from "../data/tours";
import {
  Search,
  Clock,
  Map,
  Star,
  DollarSign,
  SlidersHorizontal,
  SearchX,
} from "lucide-react";

const ITEMS_PER_PAGE = 6;

const ToursList = () => {
  const [searchParams] = useSearchParams();
  const destinationParam = searchParams.get("destination");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("All");
  const [tripType, setTripType] = useState("All");
  const [rating, setRating] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Applied filters state
  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    duration: "All",
    tripType: "All",
    rating: 0,
    minPrice: "",
    maxPrice: "",
  });

  // Helper to parse duration string to days
  const parseDuration = (durationStr) => {
    const match = durationStr.match(/(\d+)\s*Days?/i);
    return match ? parseInt(match[1]) : 0;
  };

  // Filtered tours using useMemo
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Destination filter from URL
      if (
        destinationParam &&
        !tour.destination.toLowerCase().includes(destinationParam.toLowerCase())
      ) {
        return false;
      }

      // Search filter
      if (
        appliedFilters.search &&
        !tour.title.toLowerCase().includes(appliedFilters.search.toLowerCase())
      ) {
        return false;
      }

      // Duration filter
      if (appliedFilters.duration !== "All") {
        const days = parseDuration(tour.duration);
        if (appliedFilters.duration === "1–3 days" && (days < 1 || days > 3)) {
          return false;
        }
        if (appliedFilters.duration === "4–7 days" && (days < 4 || days > 7)) {
          return false;
        }
        if (appliedFilters.duration === "8+ days" && days < 8) {
          return false;
        }
      }

      // Trip Type filter
      if (
        appliedFilters.tripType !== "All" &&
        tour.packageInfo.type !== appliedFilters.tripType
      ) {
        return false;
      }

      // Rating filter
      if (tour.rating < appliedFilters.rating) {
        return false;
      }

      // Price filters
      if (
        appliedFilters.minPrice &&
        tour.price < parseFloat(appliedFilters.minPrice)
      ) {
        return false;
      }
      if (
        appliedFilters.maxPrice &&
        tour.price > parseFloat(appliedFilters.maxPrice)
      ) {
        return false;
      }

      return true;
    });
  }, [appliedFilters, destinationParam]);

  // Reset currentPage when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [appliedFilters]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);

  // Get current page tours
  const paginatedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTours.slice(startIndex, endIndex);
  }, [filteredTours, currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Apply filters
  const handleApplyFilters = () => {
    setAppliedFilters({
      search,
      duration,
      tripType,
      rating,
      minPrice,
      maxPrice,
    });
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearch("");
    setDuration("All");
    setTripType("All");
    setRating(0);
    setMinPrice("");
    setMaxPrice("");
    setAppliedFilters({
      search: "",
      duration: "All",
      tripType: "All",
      rating: 0,
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {destinationParam
            ? `Tours in ${destinationParam}`
            : "Available Tours"}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <aside className="lg:w-80 lg:sticky lg:top-28 lg:self-start">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              {/* Header */}
              <h2 className="text-lg font-semibold text-[#0B0B0B] mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#C9A24D]" />
                Filters
              </h2>

              {/* Search */}
              <div className="mb-5">
                <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#C9A24D]" />
                  Search by Name
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search tours..."
                  className="
          w-full px-3 py-2 rounded-md
          border border-gray-200
          text-[#0B0B0B]
          focus:outline-none focus:ring-1
          focus:ring-[#C9A24D] focus:border-[#C9A24D]
        "
                />
              </div>

              {/* Duration */}
              <div className="mb-5">
                <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A24D]" />
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="
          w-full px-3 py-2 rounded-md
          border border-gray-200
          text-[#0B0B0B]
          focus:outline-none focus:ring-1
          focus:ring-[#C9A24D] focus:border-[#C9A24D]
        "
                >
                  <option value="All">All</option>
                  <option value="1–3 days">1–3 days</option>
                  <option value="4–7 days">4–7 days</option>
                  <option value="8+ days">8+ days</option>
                </select>
              </div>

              {/* Trip Type */}
              <div className="mb-5">
                <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
                  <Map className="w-4 h-4 text-[#C9A24D]" />
                  Trip Type
                </label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="
          w-full px-3 py-2 rounded-md
          border border-gray-200
          text-[#0B0B0B]
          focus:outline-none focus:ring-1
          focus:ring-[#C9A24D] focus:border-[#C9A24D]
        "
                >
                  <option value="All">All</option>
                  <option value="Full Package with Meals">
                    Full Package with Meals
                  </option>
                  <option value="Guided Package">Guided Package</option>
                  <option value="Experience Package">Experience Package</option>
                  <option value="Relaxation Package">Relaxation Package</option>
                </select>
              </div>

              {/* Rating */}
              <div className="mb-5">
                <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C9A24D]" />
                  Hotel Rating
                </label>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`
              p-1 rounded transition-colors
              ${
                rating >= star
                  ? "text-[#C9A24D]"
                  : "text-gray-300 hover:text-[#C9A24D]"
              }
            `}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </button>
                  ))}
                </div>

                {rating > 0 && (
                  <button
                    onClick={() => setRating(0)}
                    className="text-sm text-[#7A7A7A] hover:text-[#0B0B0B] mt-1"
                  >
                    Clear rating
                  </button>
                )}
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#C9A24D]" />
                  Price Range
                </label>

                <div className="flex gap-2">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min"
                    className="
            w-full px-3 py-2 rounded-md
            border border-gray-200
            text-[#0B0B0B]
            focus:outline-none focus:ring-1
            focus:ring-[#C9A24D] focus:border-[#C9A24D]
          "
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max"
                    className="
            w-full px-3 py-2 rounded-md
            border border-gray-200
            text-[#0B0B0B]
            focus:outline-none focus:ring-1
            focus:ring-[#C9A24D] focus:border-[#C9A24D]
          "
                  />
                </div>
              </div>

              {/* Apply Filters */}
              <button
                onClick={handleApplyFilters}
                className="
        w-full mb-2
        cursor-pointer px-4 py-2.5 rounded-full
        bg-[#C9A24D] text-[#0B0B0B] font-semibold
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20
        flex items-center justify-center gap-2
      "
              >
                <SlidersHorizontal className="w-4 h-4" />
                Apply Filters
              </button>

              {/* Reset Filters */}
              <button
                onClick={handleResetFilters}
                className="
        w-full
        cursor-pointer px-4 py-2.5 rounded-full
        border border-gray-200
        text-[#7A7A7A] font-medium
        transition-colors duration-300
        hover:text-[#0B0B0B] hover:border-[#C9A24D]
      "
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Tours Grid */}
          <div className="flex-1">
            {filteredTours.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedTours.map((tour) => (
                    <TourCard
                      key={tour.id}
                      id={tour.id}
                      title={tour.title}
                      destination={tour.destination}
                      price={tour.price}
                      duration={tour.duration}
                      rating={tour.rating}
                      image={tour.images[0]}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <SearchX className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No tours found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToursList;
