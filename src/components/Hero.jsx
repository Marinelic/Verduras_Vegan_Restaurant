import React from 'react'
import Food from '../assets/food.png';

const Hero = () => {
  return (
    <div>
       <section className="scroll-m-20 bg-green-950 text-yellow-200 px-8 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className='container mx-auto lg:px-40 px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'> 
        {/* Left text */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl md:text-5xl leading-snug">
            The Best <br /> Combination <br /> Of Colors In One Plate
          </h2>
          <p className="text-gray-200 text-base lg:text-lg">
            Experience the vibrant flavors of our vegan dishes, crafted with fresh, colorful ingredients that delight both the eyes and the palate. Our menu is a celebration of plant-based cuisine, designed to nourish your body and soul with every bite.
          </p>
          <button className="bg-yellow-400 font-bold text-green-900 px-5 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
            Menu
          </button>
        </div>

        {/* Right image */}
            <div className="flex justify-center">
            <img
                src={Food}
                alt="Food"
                className="w-90 lg:w-[429px] rounded-4xl"
            />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
