import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../Components/Navbar';
import Clients from '../../Components/Home/Clients';
import Testimonials from '../../Components/Home/Testimonials';
import hom from '../../assets/Images/homecard5.webp'; // Default image
import hom1 from '../../assets/Images/proj1.jpg'; // Image for 3D Design
import hom2 from '../../assets/Images/homcard7.jpg'; // Image for Interior Design
import hom3 from '../../assets/Images/homcard7.jpg'; // Image for Product Design
import ab1 from '../../assets/Images/ab1.jpg'; // Image for Product Design
import Service from '../../Components/Home/Service';
import About from '../../Components/Home/About';
import Contact from '../../Components/Home/Contact';
import Service2 from '../../Components/Home/Service2';
import RecentWork from '../../Components/RecentWork';
import Brands from '../../Components/Brands';
import Features from '../../Components/Features';
import WhatsappButton from '../../Components/WhatsappButton';
import Footer from '../../Components/Footer';
import Services from '../../Components/Services';
import Gallery from '../../Components/Home/Gallery';
import DesignComponent from '../../Components/Home/DesignComponent';
import OurTeam from '../../Components/Home/OurTeam';
import VideoComponent from '../../Components/Home/VideoComponent';
import ClientLogos from '../../Components/Home/ClientLogos';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const image = [hom]; // Different images for each service
  // Different images for each service
  const [numServicesToShow, setNumServicesToShow] = useState(4);

  // routing
  const galleryRef = useRef(null);
  const clientLogosRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToClientLogos = () => {
    clientLogosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { name: '3D Design', image: hom },
    { name: 'Interior Design', image: hom1 },
    { name: 'Product Design', image: hom2 },
    { name: 'Events', image: ab1 },
    { name: 'ser1', image: hom3 },
  ];

  useEffect(() => {
    const updateNumServicesToShow = () => {
      if (window.innerWidth < 640) {
        setNumServicesToShow(1);
      } else if (window.innerWidth < 1024) {
        setNumServicesToShow(2);
      } else {
        setNumServicesToShow(4);
      }
    };

    updateNumServicesToShow();
    window.addEventListener('resize', updateNumServicesToShow);
    return () => window.removeEventListener('resize', updateNumServicesToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < numServicesToShow; i++) {
      visibleServices.push(services[(currentIndex + i) % services.length]);
    }
    return visibleServices;
  };


  // const isMediumOrLargeScreen = window.innerWidth >= 640;
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   fade: true,
  //   pauseOnHover: false,
  // };

 

  return (
    <>
      <section className="relative"style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
       

       <Navbar scrollToGallery={scrollToGallery} scrollToClientLogos={scrollToClientLogos} scrollToContact={scrollToContact} />

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right p-8 rounded-md">
            <p className="text-gray-500 text-xs">
              S K E P <span>I N T E R I O R S</span>
            </p>
            <br />
            <br />
            <h1 className="text-3xl font-normal sm:text-5xl text-white">
              Interior design
              <br />
              that matters.
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-full border-2 p-3 text-xs font-extralight text-white sm:w-auto"
              >
                S C H E D U L E A C A L L
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white w-full sm:w-2/3 lg:w-1/3">
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-thin px-4 sm:px-5">
        <p className="mb-2">A U S T I N, D U B A I</p>
        <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">MetLife Corporate Space</h1>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
  </div>
</div>


        <div className="w-1/3 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="text-white text-lg font-semibold">Featured Projects</div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row w-full relative">
        {getVisibleServices().map((service, index) => (
          <div
            key={index}
            className={`flex-1 h-48 bg-cover bg-center text-white text-center flex items-center justify-center ${
              index === 0 ? 'rounded-bl-3xl' : ''
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className=" bg-opacity-50 p-4 rounded-bl-lg">
              <p className="text-lg">{service.name}</p>
            </div>
            </div>
          ))}
        <div className="bg-red-300 rounded-br-3xl w-1/12">
          <button
            onClick={handleNext}
            className="absolute bottom-20 right-10  bg-opacity-50 p-2 "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>



      <WhatsappButton />
      <Services />
      <About />
      <section className="relative h-96 m-2 md:m-14">
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center h-full"
    style={{
      backgroundImage: `url(${hom2})`,
      filter: 'brightness(0.8)',
    }}
  >
    <div className="absolute inset-0 " />
  </div>
  <div className="relative h-full flex flex-col items-center justify-center text-white">
    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">See what we can do together.</h1>
    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      View All Projects
    </button>
  </div>
  <div className="relative flex flex-wrap justify-around bg-slate-200 p-5 lg:mx-8">
    <span className="text-gray-800 my-1 md:my-0 md:mx-2">Space Planning</span>
    <span className="text-gray-800 my-1 md:my-0 md:mx-2">Custom Furniture</span>
    <span className="text-gray-800 my-1 md:my-0 md:mx-2">Furniture Layouts</span>
  </div>
</section>

<section ref={galleryRef}> 
        <Gallery />
      </section>

  <section ref={clientLogosRef}> 
        <ClientLogos />
      </section>

      {/* <RecentWork /> */}
      {/* <Features /> */}
      {/* <Clients /> */}
      
      <Testimonials />
     
     <OurTeam />
     
     <VideoComponent /> 
     
      <DesignComponent />
     
      <section ref={contactRef}>
      <Footer />
      </section>
    </>
  );
};

export default Home;
