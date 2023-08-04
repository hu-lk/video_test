import React from 'react';
import './index.css';
import video1 from './assets/video/MCT.mp4';
import video2 from './assets/video/climate_change.mp4';

const Circle = () => {
  return (
<div class="flex h-screen">
        hii
           <div className='video  max-w-[322px] sm:max-w-[676px] lg:max-w-[500px] mx-auto '>
        <video  src={video1} autoPlay loop muted />
        <video  src={video2} autoPlay loop muted />
      </div>
    </div>
  );
};

export default Circle;
