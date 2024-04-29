import React, { useState, useEffect } from 'react';
import h1 from '../../assets/Images/h1.jpg';
import h2 from '../../assets/Images/h2.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section1 from '../../Components/Home/Section1';
import Navbar from '../../Components/Navbar';

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
      <Navbar />
      <div className='text-black w-full h-screen flex flex-col justify-center items-center'>
        <div className='text-black text-3xl font-bold mb-8'>
          <h1>Welcome to Skep Interiors <br/>
          We Offer <span className='text-violet-800'>{content[currentIndex]}</span>
          </h1>
        </div>
        <div className="lg:w-2/3 w-full m-10 rounded-xl overflow-hidden p-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img alt={`slide-${index}`} src={image} className="w-full h-auto object-cover rounded" />
              </div>
            ))}
          </Slider>
        </div>
        <h1 className='text-4xl font-bold p-4'> Our Products</h1>
      </div>
      <Section1 />
    </>
  );
};

export default Home;
