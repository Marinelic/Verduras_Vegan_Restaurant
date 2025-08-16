import { PhoneCall } from 'lucide-react';
import { useState } from 'react';


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
      <header className='bg-[#0b2c06] text-white px-8 py-6 flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-widest'>
            VERDURAS
        </h1>

        <nav className='hidden md:flex space-x-8 text-sm'>
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
            <PhoneCall className='' />
            <a href="#" className='hidden md:inline-block text-sm hover:text-yellow-400'>
                Book Table
            </a>
          </div>  

        <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? 'Close' : 'Menu'}
            </button>
        </div>
      </header>
  )
}

export default Header
