import React from 'react';
import Slider from "react-slick";
import client1 from '../../assets/Images/client1.jpeg';
import client2 from '../../assets/Images/client2.jpeg';
import client3 from '../../assets/Images/client3.jpeg';
import client4 from '../../assets/Images/client4.jpeg';
import client6 from '../../assets/Images/client6.jpeg';
import client7 from '../../assets/Images/client7.jpeg';
import client5 from '../../assets/Images/client8.jpeg';
import client8 from '../../assets/Images/client5.jpeg';
import client9 from '../../assets/Images/client9.jpeg';
import client10 from '../../assets/Images/client10.jpeg';
import client11 from '../../assets/Images/client11.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-14">
      <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-16 xl:max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-8">Our Clients</h2>
        <Slider {...settings}>
          <div className="flex flex-col items-center">
            <img src={client1} alt="Client 1" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client2} alt="Client 2" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client3} alt="Client 3" className="h-20" />
            
          </div>
          <div className="flex flex-col items-center">
            <img src={client4} alt="Client 4" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client5} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client6} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client7} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client8} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client9} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client10} alt="Client 5" className="h-20" />
           
          </div>
          <div className="flex flex-col items-center">
            <img src={client11} alt="Client 5" className="h-20" />
           
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
