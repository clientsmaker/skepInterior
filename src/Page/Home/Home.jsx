import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Section1 from '../../Components/Home/Section1';
import Navbar from '../../Components/Navbar';
import Clients from '../../Components/Home/Clients';
import Testimonials from '../../Components/Home/Testimonials';
import hom from '../../assets/Images/homecard5.webp';
import hom1 from '../../assets/Images/proj1.jpg';
import hom2 from '../../assets/Images/homcard7.jpg';
import Service from '../../Components/Home/Service';
import About from '../../Components/Home/About';
import Contact from '../../Components/Home/Contact';
import Service2 from '../../Components/Home/Service2';
import SectionCard3 from '../../Components/Home/SectionCard3';
import RecentWork from '../../Components/RecentWork';
import Brands from '../../Components/Brands';
import Features from '../../Components/Features';
import WhatsappButton from '../../Components/WhatsappButton';
import Footer from '../../Components/Footer';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [hom, hom1, hom2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <>
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover hidde" />
          </div>
        ))}
      </Slider> */}

      
     
<section className="relative">
<AnimatePresence >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </AnimatePresence>

<Navbar  />
  <div
    className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Transforming Spaces Into

        <strong className="block font-extrabold text-rose-700">  Dream Place </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      At Skep Interiors, we specialize in creating bespoke interiors that reflect your unique style and personality. Let's turn your vision into a stunning reality.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        {/* <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a> */}
      </div>
    </div>
  </div>
</section>
<WhatsappButton />
<About />
<Service />
{/* <Service2 /> */}
{/* <SectionCard3 /> */}
   <RecentWork />
   {/* <Brands /> */}
   <Features />
      <Clients  />
      <Testimonials />
     <Footer />
    </>
  );
};

export default Home;
