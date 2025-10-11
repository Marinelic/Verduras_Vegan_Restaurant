import { PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';


 const navList = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#menu', label: 'Menu' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#contact', label: 'Contact' },
    ];


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className='bg-green-950 text-white px-8 py-6 flex items-center justify-between '>
        <h1 className='text-2xl font-bold tracking-widest uppercase text-white-400'>
            VERDURAS
        </h1>

        <nav className='hidden md:flex space-x-8 text-base'>
            {navList.map((link) => (
                <a 
                    href={link.href}
                    key={link.href}
                    className='hover:text-yellow-400'>
                        {link.label}
                </a>
            ))}
        </nav>

          <div className='hidden md:flex items-center space-x-4'>
            <PhoneCall className='text-amber-400' />
            <a href="#" className='hidden md:inline-block text-base hover:text-yellow-400'>
                Book Table
            </a>
          </div>  

        <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X className='text-yellow-400' /> : <Menu className='text-yellow-400' />}
            </button>
        </div>

            {
                isMenuOpen && (
                    <div className='absolute top-16 left-0 text-center w-full bg-yellow-200 text-green-800 md:hidden'>
                        {navList.map((link) => (
                            <a 
                                href={link.href}
                                key={link.href}
                                className='block py-2 px-4 font-medium hover:text-green-950 transition'
                                onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                            </a>
                        ))}
                    </div>
            )}
      </header>
  );
};

export default Header
