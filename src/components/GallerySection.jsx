import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import plate1 from "../assets/plate1.jpg";
import plate2 from "../assets/plate2.jpg";
import plate3 from "../assets/plate3.jpg";
import plate4 from "../assets/plate4.jpg";
import plate5 from "../assets/plate5.jpg";

const GallerySection = () => {
  const images = [plate1, plate2, plate3, plate4, plate5];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    // Scroll by container width for large screens, or 250px for small screens
    const scrollAmount =
      window.innerWidth > 768 ? container.clientWidth : 250;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0b2d0b] py-20 text-yellow-100 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left side - text */}
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-3xl md:text-4xl font-serif text-yellow-300 mb-6">
              Gallery
            </h2>
            <p className="text-gray-200 mb-6 max-w-md">
              Explore our vibrant gallery showcasing a variety of colorful vegan
              dishes, each crafted to delight your senses and inspire your
              culinary journey.
            </p>
            <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
              View More
            </button>
          </div>

          {/* Right side - gallery with arrows */}
          <div className="relative flex-1 w-full">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0b2d0b]/70 text-yellow-300 p-2 rounded-full hover:bg-yellow-400 hover:text-green-900 transition"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Scrollable images */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-6 scroll-smooth"
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery item ${i + 1}`}
                  className="w-60 h-80 object-cover rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0b2d0b]/70 text-yellow-300 p-2 rounded-full hover:bg-yellow-400 hover:text-green-900 transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
