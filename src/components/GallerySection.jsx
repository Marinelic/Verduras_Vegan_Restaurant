import React, { useEffect, useRef } from "react";

import plate1 from "../assets/plate1.jpg";
import plate2 from "../assets/plate2.jpg";
import plate3 from "../assets/plate3.jpg";
import plate4 from "../assets/plate4.jpg";
import plate5 from "../assets/plate5.jpg";
import plate6 from "../assets/plate6.jpg";
import plate7 from "../assets/plate7.jpg";
import plate8 from "../assets/plate8.jpg";
import plate9 from "../assets/plate9.jpg";

const GallerySection = () => {
  const images = [
    plate1, plate6, plate2, plate7, plate3, plate8, plate4, plate9, plate5];

  const scrollRef = useRef(null);
  const scrollSpeed = 0.5; 

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      // When we've scrolled past half (duplicate images), reset scrollLeft
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="gallery" className="bg-[#0b2d0b] py-20 text-yellow-100 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Left side - text */}
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-3xl md:text-4xl font-serif text-yellow-300 mb-6">
              Gallery
            </h2>
            <p className="text-gray-200 mb-6 max-w-md">
              Explore our vibrant gallery showcasing a variety of colorful vegan
              dishes, each crafted to delight your senses.
            </p>
            <button className="bg-yellow-400 font-bold text-green-900 px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
              View More
            </button>
          </div>

          {/* Right side - auto-scrolling gallery */}
          <div
            ref={scrollRef}
            className="flex-1 w-full overflow-hidden relative"
          >
            <div className="flex space-x-6">
              {/* Duplicate images for seamless scroll */}
              {images.concat(images).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery item ${i + 1}`}
                  className="w-60 h-80 object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
