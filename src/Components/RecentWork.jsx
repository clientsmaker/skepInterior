import React from 'react';
import image1 from '../assets/Images/proj1.jpg';
import image2 from '../assets/Images/proj2.jpg';
import image3 from '../assets/Images/proj3.jpg';
import image4 from '../assets/Images/proj4.jpg';
import image5 from '../assets/Images/proj6.jpg';

const RecentWork = () => {
  return (
    <section className="gallery-area py-12">
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full text-center pb-10">
          <h1 className="text-3xl font-bold pb-5">Our Recent Works may impress you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '300px' }}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
              <img className="w-full h-full object-cover" src={image1} alt="Work 1" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl mb-4">Lavender ambient interior</h3>
                <a href="project-details.html" className="bg-indigo-600 text-white py-2 px-4 rounded uppercase mt-5">More Details</a>
              </div>
            {/* </a> */}
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '300px' }}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
              <img className="w-full h-full object-cover" src={image2} alt="Work 2" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl mb-4">Ambient interior</h3>
                <a href="project-details.html" className="bg-indigo-600 text-white py-2 px-4 rounded uppercase mt-5">More Details</a>
              </div>
            {/* </a> */}
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '300px' }}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
              <img className="w-full h-full object-cover" src={image3} alt="Work 3" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl mb-4">Ambient interior</h3>
                <a href="project-details.html" className="bg-indigo-600 text-white py-2 px-4 rounded uppercase mt-5">More Details</a>
              </div>
            {/* </a> */}
          </div>
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '300px' }}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
              <img className="w-full h-full object-cover" src={image4} alt="Work 4" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl mb-4">Lavender ambient interior</h3>
                <a href="project-details.html" className="bg-indigo-600 text-white py-2 px-4 rounded uppercase mt-5">More Details</a>
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
export default RecentWork;
