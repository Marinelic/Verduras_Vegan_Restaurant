import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-green-950 text-white px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-widest uppercase">
        VERDURAS
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-8 text-base">
        {navList.map((link) => (
          <a
            href={link.href}
            key={link.href}
            className="hover:text-yellow-400"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Desktop call/book */}
      <div className="hidden md:flex items-center space-x-4">
        <PhoneCall className="text-amber-400" />
        <a
          href="#contact"
          className="hidden md:inline-block text-base hover:text-yellow-400"
        >
          Book Table
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-yellow-400" />
          ) : (
            <Menu className="text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-yellow-200/55 text-green-900 z-50 shadow-md md:hidden rounded-b-lg">
          <div className="flex flex-col items-center">
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="block py-1 text-lg font-bold hover:text-green-950 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
