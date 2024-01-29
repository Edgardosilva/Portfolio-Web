import React from 'react';

const CategoryNav = ({ text, route }) => {
    return (
 
        <a href={route} className=" hover:cursor-pointer group relative inline-block overflow-hidden rounded  bg-transparent  px-12 py-3 text-lg font-medium text-slate-300 hover:text-cyan-500 focus:outline-none">
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-600 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-600 transition-all duration-200 group-hover:h-full"></span>
            <p className='w-24 text-center'>{text}</p>
        </a>
        
      
    );
};

export default CategoryNav;