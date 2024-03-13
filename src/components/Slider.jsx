import React from 'react';

const Slider = ({ img1 }) => {
  return (
    <div className='relative lg:shadow-xl h-full rounded-xl'>
      <img src={img1} alt="img1Slider" className='h-full rounded-xl' />
    </div>
  );
};

export default Slider;