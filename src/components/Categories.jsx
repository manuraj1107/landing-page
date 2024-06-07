import React from 'react';
import centralImage from '../assets/Shpere-Effect.svg'; // Update with the correct path to your image
import bgImage from '../assets/stone-back.svg';
const Categories = () => {
  return (
    <div className="relative h-screen flex items-center  justify-between  bg-black ">
      <div className="w-[46rem]  flex justify-between inset-0 h-[46rem] items-center border-2 border-black" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
        <div className=" flex justify-center mx-auto items-center  rounded-full overflow-hidden " >
          <img src={centralImage}  alt="Central" className="object-cover left-0 w-[30rem] h-[30rem]" />
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex flex-col justify-center items-center p-4 text-white">
        <div className="w-16 h-16 mb-4">
          <img  alt="Icon" className="object-cover w-full h-full" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">USERS GENERATED CONTENTS</h2>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-full">
          Back
        </button>
      </div>
    </div>
  );
};

export default Categories;
