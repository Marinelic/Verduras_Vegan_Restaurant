import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import bgImage from "../assets/bg.jpg";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${bgImage})` }} className="bg-[#0b2d0b] text-[#f5f5f0] py-12 mt-10 bg-no-repeat bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Brand */}
        <div className="mr-10">
          <h3 className="text-2xl font-serif text-yellow-500 mb-3">VERDURAS</h3>
          <p className="text-lg leading-relaxed text-green-900">
            Experience nature on your plate. Verduras brings you vibrant vegan
            cuisine inspired by freshness, flavor, and sustainability.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-yellow-500 mb-3">Quick Links</h4>
          <ul className="space-y-3 text-lg text-green-900">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="mx-10">
          <h4 className="text-xl font-semibold text-yellow-500 mb-3">Contact Us</h4>
          <p className="text-lg text-green-900 mb-2">1559 N Milwaukee Ave, Chicago, IL 60622</p>
          <p className="text-lg text-green-900 mb-1">Email: info@verdurascafe.com</p>
          <p className="text-lg text-green-900 mb-4">Phone: (312) 555-0134</p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full bg-green-900 hover:bg-yellow-400 hover:text-green-900 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-green-900 hover:bg-yellow-400 hover:text-green-900 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-green-900 hover:bg-yellow-400 hover:text-green-900 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-3xl mx-auto text-center text-slg text-green-900 mt-10 border-t border-green-800 pt-6">
        © {new Date().getFullYear()} Verduras. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
