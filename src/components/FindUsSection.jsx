import React from "react";
import bgImage from "../assets/bg.jpg";
import restaurantExterior from "../assets/restaurantExterior.jpg";

const FindUsSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-[#f5f5f0] py-20 text-[#0b2d0b] bg-no-repeat bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-25 items-center">
        
        {/* Left side - image */}
        <div className="relative order-2 md:order-1 md:mr-12">
          <img
            src={restaurantExterior}
            alt="Vegan restaurant exterior"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
          />

          {/* Optional subtle overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-lg pointer-events-none"></div>
        </div>

        {/* Right side - text */}
        <div className="order-1 md:order-2 md:ml-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Find Us</h2>
          <p className="text-lg mb-2">
            Green Street, 2817 Madison, 53711
          </p>

          <div className="my-6">
            <h3 className="font-semibold text-xl mb-2">Opening Hours</h3>
            <p className="mb-1">Mon - Fri: 10:00 am - 01:00 am</p>
            <p>Sat - Sun: 09:00 am - 02:00 am</p>
          </div>

          <button className="bg-yellow-400 font-bold text-green-900 px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
