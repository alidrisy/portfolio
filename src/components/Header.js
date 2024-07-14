import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} className='max-md:w-[150px] ' alt='logo' />
          </a>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='btn btn-sm flex justify-center items-center'
          >
            Hire me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
