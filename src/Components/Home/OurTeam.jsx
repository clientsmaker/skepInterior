import React from 'react';
import image from '../../assets/Images/ourteam.jpg'; // Adjust the path if needed
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const OurTeam = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className='text-start font-mono text-sm'>O U R <span> T E A M</span></h1>
        <div className="flex justify-between items-center mb-4">
          <p className="text-4xl text-black font-semibold mb-8">Behind the design.</p>
          <button className="bg-black text-white text-xs font-thin p-3 px-5 rounded-full">LEARN ABOUT SKEP</button>
        </div>
        <div className="relative">
          <h1 className='text-4xl font-semibold p-3'>Our Team</h1>
          <div className="w-10/12 md:w-8/12 mx-auto">
            <img
              src={image}
              alt="Our Team"
              className="object-cover object-center w-full max-h-96"
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default OurTeam;

