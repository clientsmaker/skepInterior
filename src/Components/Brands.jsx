import React from 'react';
import brand1 from '../assets/Images/proj1.jpg';
import brand2 from '../assets/Images/proj1.jpg';
import brand3 from '../assets/Images/proj1.jpg';
import brand4 from '../assets/Images/proj1.jpg';
import brand5 from '../assets/Images/proj1.jpg';

const Brands = () => {
  return (
    <section className="brands-area py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <div className="single-brand p-4">
            <a href="#">
              <img className="mx-auto h-20" src={brand1} alt="Brand 1" />
            </a>
          </div>
          <div className="single-brand p-4">
            <a href="#">
              <img className="mx-auto h-20" src={brand2} alt="Brand 2" />
            </a>
          </div>
          <div className="single-brand p-4">
            <a href="#">
              <img className="mx-auto h-20" src={brand3} alt="Brand 3" />
            </a>
          </div>
          <div className="single-brand p-4">
            <a href="#">
              <img className="mx-auto h-20" src={brand4} alt="Brand 4" />
            </a>
          </div>
          <div className="single-brand p-4">
            <a href="#">
              <img className="mx-auto h-20" src={brand5} alt="Brand 5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
