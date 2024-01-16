import React from 'react';

const Slider = ({ img1, img2, img3 }) => {
  return (
    <div className='rounded-xl w-full h-42 relative flex overflow-scroll snap-mandatory mt-3'>
      <img src={img1} alt="img1Slider" className='w-full left-0 sticky object-cover snap-center' />
      <img src={img2} alt="img2Slider" className='w-full left-0 sticky object-cover snap-center'/>
      <img src={img3} alt="img3Slider" className='w-full left-0 sticky object-cover snap-center'/>  
    </div>
  );
};

export default Slider;