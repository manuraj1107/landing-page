import React from 'react';
import backgroundImage from '../assets/stone.svg'; // Make sure to adjust the path if necessary
import bgImage from '../assets/stone-back.svg'; // Make sure to adjust the path if necessary
import user from '../assets/USER-GENERATED.svg';
import sphere from '../assets/Shpere-Effect.svg';
import space from '../assets/space-bg.svg';
import vector from '../assets/Vector.svg';

const Features = () => {
  return (
    <div className="relative h-[100vh] flex items-center justify-center min-h-screen bg-black overflow-hidden" style={{ backgroundImage: `url(${space})`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${vector})`, backgroundSize: 'cover' }}>
        <div className="relative w-full h-full">
          <div className="absolute top-[83px] left-[18rem] w-[90px] h-[90px] bg-gray-800 rounded-full">
          <img src={backgroundImage}  alt="Central" className="object-cover w-full h-full" />
          </div>
          <div className="absolute top-[45px] right-1/4 w-[75px] h-[75px] bg-gray-800 rounded-full">
          <img src={backgroundImage}  alt="Central" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-[8rem] left-1/4 w-[60px] h-[60px] bg-gray-800 rounded-full">
          <img src={backgroundImage}  alt="Central" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-[4rem] right-[28rem] w-[80px] h-[80px] bg-gray-800 rounded-full">
          <img src={backgroundImage}  alt="Central" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center" >

        <div className='w-[38rem] h-[38rem] flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
        <div className="flex items-center justify-center self-center w-[25rem] h-[25rem] bg-gray-800 rounded-full" style={{ backgroundImage: `url(${sphere})`, backgroundSize: 'cover' }}>
          <img src={user} className="text-2xl font-bold text-white" alt='USER GENERATED CONTENT' />
        </div>
        </div>
        <div className="mt-4 text-white">
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default Features;
