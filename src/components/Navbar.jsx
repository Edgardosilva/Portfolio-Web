import React from 'react';
import { useState } from 'react';
import CategoryNav from './CategoryNav.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className=" flex flex-col fixed z-50 w-full md:backdrop-blur-lg ">
      <img src="logo.svg" className="w-[40px] md:hidden hover:cursor-pointer z-50 m-4" onClick={handleClick} />
      <ul className={`backdrop-blur-lg animate-fade-right animate-duration-[300ms] w-full h-20 hidden md:flex sm:justify-center md:items-center md:justify-center md:bg-transparent`}>
        <li><CategoryNav text = 'Inicio' route='#inicio'/></li>
        <li><CategoryNav text = 'Sobre mi' route = '#sobremi'/></li>
        <li><CategoryNav text = 'Proyectos' route ='#proyectos'/></li>
      </ul>
      <ul className={`pt-14 text-center rounded-lg backdrop-blur-lg animate-fade-right animate-duration-[300ms] flex flex-col xl:mt-20 left-0 w-64 absolute h-screen z-20 ${isOpen? 'block' : 'hidden'} md:hidden`}>
        <li className='mb-5'><CategoryNav text = 'Inicio' route='#inicio'/></li>
        <li className='mb-5'><CategoryNav text = 'Sobre mi' route='#sobremi'/></li>
        <li className='mb-5'><CategoryNav text = 'Proyectos' route='#proyectos'/></li>
      </ul>
		</nav>
  );
};

export default Navbar;