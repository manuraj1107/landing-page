

import React from 'react';
import backgroundImage from '../assets/bg-layer.svg'; // Make sure to adjust the path if necessary

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      
      <h1 className="text-4xl font-bold text-black mb-4">Subscribe to our newsletter</h1>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Your Email"
            aria-label="Email"
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-lg text-black mt-4">A Decentralized Multiplayer Platform</p>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-black">Twitter</a>
        <a href="#" className="text-black">Instagram</a>
        <a href="#" className="text-black">LinkedIn</a>
      </div>
      <a href="mailto:contact@peertoplay.xyz" className="text-black mt-4">contact@peertoplay.xyz</a>
      <footer className="mt-8 text-black">
        <p>&copy; 2024 PeersToPlay</p>
        <p>Terms and conditions</p>
        <p>Built By Enteract</p>
      </footer>
      <button className="absolute bottom-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Begin</span>
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </button>
    </div>
  );
};

export default Footer;
