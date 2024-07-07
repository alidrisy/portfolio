import React from "react";
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} className='max-md:w-[150px] ' alt='logo' />
          </a>
          <button className='btn btn-sm'>Hire me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
