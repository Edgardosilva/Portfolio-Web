import React from 'react';

const Slider = ({ img1 }) => {
  return (
    <div className='lg:shadow-xl rounded-xl md:h-full p-5 md:p-0'>
      <img src={img1} alt="img1Slider" className='rounded-xl lg:rounded-none md:h-full md:w-full' />
    </div>
  );
};

export default Slider;