import React from 'react';
import SocialMedia from './Socialmedia';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 w-full mt-10 mb-0 ">
      <div className="container mx-auto flex flex-col  md:flex-row justify-between items-center">
        {/* Left Section: Description */}
        
       

        <div className="text-center md:text-left mb-6 md:mb-0 sm:py-4 ">
          <p className="text-xl font-semibold">&copy; 2024 Kowsalya Murukesh</p>
          <p className="text-sm text-gray-400">
            A showcase of my projects and work. All rights reserved.
          </p>
        </div>
        <SocialMedia></SocialMedia>
        </div>
        </footer>
        )
}

export default Footer