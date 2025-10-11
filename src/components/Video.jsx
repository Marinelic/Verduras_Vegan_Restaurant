import React from "react";
import { Play } from "lucide-react"; 
import bgImage from '../assets/bg.jpg';

const RestaurantVideo = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} className="relative w-full py-16 flex justify-center items-center bg-no-repeat bg-cover bg-center">
      {/* Video Container */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-video overflow-hidden rounded-lg shadow-lg">
        {/* Background Image */}
        <video
            className="w-full h-full object-cover rounded-lg"
            controls
            poster="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
            >
            <source src="/videos/restaurant.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        {/* Green Overlay */}
        <div className="absolute inset-0"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-green-900 shadow-lg hover:bg-yellow-500 transition">
            <Play size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantVideo;
