import React from 'react'
import Carrot from '../assets/carrot.png';
import bgImage from '../assets/bg.jpg';


const About = () => {
  return (
        <div id='about' style={{ backgroundImage: `url(${bgImage})` }} className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center">
            <section className="w-full max-w-6xl mx-auto px-6 py-20 text-center md:text-left relative">
                <div className="grid md:grid-cols-3 items-center gap-7">

                    {/* // About Us */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-end text-center md:text-right">
                        <h2 className="text-2xl font-serif text-green-900 mb-4">About Us</h2>
                        <p className="text-gray-700 mb-6 max-w-xs">
                            About Verduras, your go-to vegan restaurant. We are passionate about serving delicious, plant-based meals that nourish both body and soul. Our menu is crafted with fresh, locally-sourced ingredients to ensure every bite is bursting with flavor and goodness. Join us in our mission to promote a healthier, more sustainable lifestyle through vibrant and creative vegan cuisine.
                        </p>
                        <button className="bg-yellow-400 font-bold text-green-900 px-5 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                        Know More
                        </button>
                    </div>

                    {/* // Carrot Image */}
                    <div className="flex justify-center md:justify-center">
                        <img src={Carrot}
                            alt="Carrot" 
                            className="w-100 max-w-full lg-w:70"/>
                    </div>

                    {/* // Our History */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl font-serif text-green-900 mb-4">Our History</h2>
                        <p className="text-gray-700 mb-6 max-w-xs">
                            Our journey began with a simple idea: to create a space where delicious vegan food could be enjoyed by everyone. From humble beginnings, we have grown into a beloved community hub, known for our innovative dishes and warm hospitality. Our commitment to sustainability and ethical sourcing has always been at the heart of what we do, and we are proud to share our passion for plant-based living with our guests.
                        </p>
                        <button className="bg-yellow-400 font-bold text-green-900 px-5 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                        Know More
                        </button>
                    </div>

            </div>
  </section>
    </div>
  )
}

export default About
