import React from 'react'
import Carrot from '../assets/carrot.png';


const About = () => {
  return (
        <div  className="bg-[#f5f5f0] flex items-center justify-center min-h-screen">
            <section className="w-full max-w-6xl mx-auto px-6 py-20 text-center md:text-left relative">
                <div className="grid md:grid-cols-3 items-center gap-8">

                    {/* // About Us */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-end text-center md:text-right">
                        <h2 className="text-2xl font-serif text-green-900 mb-4">About Us</h2>
                        <p className="text-gray-700 mb-6 max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quis pharetra adipiscing ultrices vulputate posuere tristique.
                        In sed odio nec aliquet eu proin mauris et.
                        </p>
                        <button className="bg-yellow-400 text-green-900 px-5 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                        Know More
                        </button>
                    </div>

                    {/* // Carrot Image */}
                    <div className="flex justify-center md:justify-center">
                        <img src={Carrot}
                            alt="Carrot" 
                            className="w-24 md:w-70"/>
                    </div>

                    {/* // Our History */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl font-serif text-green-900 mb-4">Our History</h2>
                        <p className="text-gray-700 mb-6 max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quis pharetra adipiscing ultrices vulputate posuere tristique.
                        In sed odio nec aliquet eu proin mauris et.
                        </p>
                        <button className="bg-yellow-400 text-green-900 px-5 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                        Know More
                        </button>
                    </div>

            </div>
  </section>
    </div>
  )
}

export default About
