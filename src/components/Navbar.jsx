import React from 'react';
import { useState } from 'react';
import CategoryNav from './CategoryNav.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="p-4 flex flex-col fixed z-50 w-full backdrop-blur-lg sm:h-18 sm:pt-7">
      <img src="logo.svg" className="w-[40px] md:hidden hover:cursor-pointer" onClick={handleClick} />
      <ul className={`bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] w-full h-10 hidden md:flex sm:justify-center md:items-center md:justify-center md:bg-transparent`}>
        <li><CategoryNav text = 'Inicio' route='#inicio'/></li>
        <li><CategoryNav text = 'Sobre mi' route = '#sobremi'/></li>
        <li><CategoryNav text = 'Proyectos' route ='#proyectos'/></li>
      </ul>
      <ul className={` bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] flex flex-col mt-16 md:mt-20 left-0 w-42 absolute h-screen z-50 ${isOpen? 'block' : 'hidden'} md:hidden`}>
        <li className='mb-5'><CategoryNav text = 'Inicio' route='#inicio'/></li>
        <li className='mb-5'><CategoryNav text = 'Sobre mi' route='#sobremi'/></li>
        <li className='mb-5'><CategoryNav text = 'Proyectos' route='#proyectos'/></li>
      </ul>
		</nav>
  );
};

export default Navbar;