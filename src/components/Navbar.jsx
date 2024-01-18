import React from 'react';
import { useState } from 'react';
import CategoryNav from './CategoryNav.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="p-4 flex flex-col fixed z-50 w-full bg-black bg-opacity-80 backdrop-blur-lg sm:h-18 sm:pt-7">
      <img src="logo.svg" className="w-[40px] md:hidden" onClick={handleClick} />
      <ul className={`bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] w-full h-10 hidden md:flex sm:justify-center md:items-center md:bg-transparent`}>
        <li><CategoryNav text = 'Home'/></li>
        <li><CategoryNav text = 'Sobre mi'/></li>
        <li><CategoryNav text = 'Proyetos'/></li>
        <li><CategoryNav text = 'Contacto'/></li>
      </ul>
      <ul className={` bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] flex flex-col mt-20 left-0 w-42 absolute h-screen z-50 ${isOpen? 'block' : 'hidden'} md:hidden`}>
        <li className='mb-5'><CategoryNav text = 'Home'/></li>
        <li className='mb-5'><CategoryNav text = 'Sobre mi'/></li>
        <li className='mb-5'><CategoryNav text = 'Proyetos'/></li>
        <li className='mb-5'><CategoryNav text = 'Contacto'/></li>
      </ul>
		</nav>
  );
};

export default Navbar;