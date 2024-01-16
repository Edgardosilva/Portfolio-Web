import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="p-4 flex flex-col fixed z-50 w-full bg-black bg-opacity-80 backdrop-blur-lg sm:h-18 sm:pt-7">
      <img src="logo.svg" className="w-[40px] sm:hidden" onClick={handleClick} />
      <ul className={`bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] w-full h-10 hidden sm:flex sm:justify-center sm:items-center sm:bg-transparent`}>
        <li className="text-white text-lg p-3 mb-3 ml-4 lg:text-[20px]"><a href="#">Home</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4 lg:text-[20px]"><a href="#">Proyectos</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4 lg:text-[20px]"><a href="#">Skills</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4 lg:text-[20px]"><a href="#">Contacto</a></li>
      </ul>
      <ul className={`bg-black bg-opacity-80 bg-blur-lg animate-fade-right animate-duration-[300ms] flex flex-col mt-14 left-0 w-40 absolute h-screen z-50 ${isOpen? 'block' : 'hidden'} sm:hidden`}>
        <li className="text-white text-lg p-3 mb-3 ml-4"><a href="#">Home</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4"><a href="#">Proyectos</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4"><a href="#">Skills</a></li>
        <li className="text-white text-lg p-3 mb-3 ml-4"><a href="#">Contacto</a></li>
      </ul>
		</nav>
  );
};

export default Navbar;