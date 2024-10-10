import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const navItems = [
    { to: 'home', icon: BiHomeAlt, label: 'Home' },
    { to: 'about', icon: BiUser, label: 'About' },
    { to: 'services', icon: BsClipboardData, label: 'Services' },
    { to: 'work', icon: BsBriefcase, label: 'Work' },
    { to: 'contact', icon: BsChatSquareText, label: 'Contact' }
  ];

  return (
    <nav className='fixed bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50'>
      <div className='bg-black/20 backdrop-blur-lg rounded-full px-3 py-1 sm:px-5 sm:py-2'>
        <ul className='flex items-center justify-between gap-1 sm:gap-2 text-lg sm:text-xl lg:text-2xl text-white/50'>
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                activeClass='active'
                smooth={true}
                spy={true}
                offset={to === 'home' ? -200 : 0}
                className='cursor-pointer w-12 h-12 sm:w-14 sm:h-14 flex flex-col justify-center items-center transition-colors duration-300 hover:text-white focus:text-white'
                aria-label={label}
              >
                <Icon aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;