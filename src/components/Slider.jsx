import React from 'react';

const Slider = ({ img1, img2, img3 }) => {
  return (
    <div className='rounded-xl relative flex lg:flex-col overflow-scroll snap-mandatory mt-3 lg:mt-0 lg:overflow-visible lg:shadow-xl'>
      <img src={img1} alt="img1Slider" className=' bg- w-full left-0 sticky object-cover snap-center rounded-xl border border-slate-700' />
      <img src={img2} alt="img2Slider" className='w-full left-0 sticky object-cover snap-center lg:hidden'/>
      <img src={img3} alt="img3Slider" className='w-full left-0 sticky object-cover snap-center lg:hidden'/>  
    </div>
  );
};

export default Slider;