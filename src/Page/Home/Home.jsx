import React, { useState, useEffect } from 'react';
import h1 from '../../assets/Images/h1.jpg';
import h2 from '../../assets/Images/h2.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section1 from '../../Components/Home/Section1';
import Navbar from '../../Components/Navbar';
import HomeLottie from '../../Components/Lottie/HomeLottie';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [h1, h2];
  const content = ["Good", "Design", "Reliable", "Product"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false // Remove arrows
  };

  return (
    <>
    <div className=''style={{ backgroundColor: 'rgb(255, 236, 214)' }}>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className='text-black text-3xl font-bold mb-8 p-4'>
          <h1 text-4xl font-bold text-gray-800 mb-4 mt-4>Welcome to Skep Interiors <br/>
          We Offer <span className='text-violet-800'>{content[currentIndex]}</span>
          </h1>
        </div>
        <div className="lg:w-2/3 w-full m-10 rounded-lg overflow-hidden p-4 object-contain ">
          <HomeLottie />
          {/* <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img alt={`slide-${index}`} src={image} className="w-full h-auto object-auto rounded-xl" />
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
      <div className='items-center justify-center'>
        <h1 className='text-4xl font-bold p-4 '> Our Products</h1>
        </div>
      <Section1 />
      </div>
    </>
  );
};

export default Home;
