import React from 'react';
import bgVideo from '../assets/bgVideo.mp4';

const Hero = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden text-yellow-200 px-6 sm:px-10 md:px-20 pt-28 sm:pt-32 md:pt-20">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover object-[50%_80%]"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Optional dark overlay to make text readable */}
      <div className="absolute inset-0 bg-green-950/60"></div>

      {/* Content on top of video */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col gap-6
                      text-center md:text-center md:justify-center md:items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          The Best <br />
          Combination <br />
          Of Colors In One Plate
        </h1>

        <p className="text-gray-200 text-lg max-w-xl">
          Experience the vibrant flavors of our vegan dishes, crafted with fresh, colorful ingredients that delight both the eyes and the palate.
        </p>
        
        <a href="#contact" className="bg-yellow-400 font-bold text-green-900 text-sm sm:text-base px-5 py-4 sm:px-6 sm:py-3 lg:px-8 lg:py-3 rounded-md shadow-md hover:bg-yellow-500 transition inline-block">
          Book A Table
        </a>
      </div>

    </section>
  );
};

export default Hero;
