import React from "react";

const Special = () => {

    const leftMenu = [
    { name: "Avocado Salad", price: "$12" },
    { name: "Vegan Burger", price: "$15" },
    { name: "Quinoa Bowl", price: "$10" },
    { name: "Tofu Stir Fry", price: "$14" },
    { name: "Mushroom Risotto", price: "$13" },
  ]; 

  const rightMenu = [
    { name: "Green Smoothie", price: "$8" },
    { name: "Veggie Wrap", price: "$11" },
    { name: "Lentil Soup", price: "$9" },
    { name: "Vegan Pancakes", price: "$12" },
    { name: "Chickpea Curry", price: "$14" },
  ];


  return (
    <section className="bg-[#0b2d0b] py-20 text-center text-yellow-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-serif text-yellow-200 mb-10">
          Today's Special
        </h2>

        {/* Menu Container */}
        <div
          className="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60')]
          bg-cover bg-center bg-no-repeat bg-blend-multiply bg-green-900/70
          rounded-lg p-20 grid md:grid-cols-2 gap-20"
        >
          {/* Left Side */}
          <div className="flex flex-col space-y-5">
            {leftMenu.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-yellow-100/50 pb-2"
                >
                    <span className="text-yellow-100 font-light">{item.name}</span>
                    <span className="text-yellow-100">{item.price}</span>
                </div>
              ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-5">
            {rightMenu.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-yellow-100/50 pb-2"
                >
                    <span className="text-yellow-100 font-light">{item.name}</span>
                    <span className="text-yellow-100">{item.price}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-yellow-400 font-bold text-green-900 px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
