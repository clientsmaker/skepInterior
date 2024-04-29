import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section1 from '../../Components/Home/Section1';
import Navbar from '../../Components/Navbar';
import HomeLottie from '../../Components/Lottie/HomeLottie';
import Clients from '../../Components/Home/Clients';
import Testimonials from '../../Components/Home/Testimonials';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = ["Good", "Design", "Reliable", "Product"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(255, 236, 214)" }}>
      <Navbar />
      <div className="container mx-auto p-4 md:py-8 flex flex-col sm:flex-row items-center justify-between">
        <motion.h1
          className='text-black text-3xl font-bold mb-8 p-4 flex items-center' // Adjusted class
          initial={{ opacity: 0, x: -100 }} // Initial animation settings
          animate={{ opacity: 1, x: 0 }} // Animation when component is mounted
          transition={{ duration: 1 }} // Transition duration
        >
          <span className='duration-300 ... animate-bounce  ... px-5'>Welcome to Skep</span>&nbsp; {/* Combined into one line */}
          {/* We Offer <span className='text-white'>{content[currentIndex]}</span> */}
        </motion.h1>
        <motion.div
          className="lg:w-2/3 w-full m-10 rounded-lg overflow-hidden p-4 object-contain flex justify-end" // Adjusted class
          initial={{ opacity: 0, x: 100 }} // Initial animation settings
          animate={{ opacity: 1, x: 0 }} // Animation when component is mounted
          transition={{ duration: 1, delay: 0.5 }} // Transition duration with a delay
        >
          <HomeLottie />
        </motion.div>
      </div>
      <motion.div
        className='container mx-auto'
        initial={{ opacity: 0, x: -100 }} // Initial animation settings
        animate={{ opacity: 1, x: 0 }} // Animation when component is mounted
        transition={{ duration: 1, delay: 1 }} // Transition duration with a delay
      >
        {/* <h1 className='text-4xl font-bold p-4 '> Our Products</h1> */}
      </motion.div>
      <Section1 />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default Home;
