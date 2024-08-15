import React from 'react';
import img1 from '../../assets/Images/proj1.jpg'
import hom2 from '../../assets/Images/proj3.jpg'
import hom3 from '../../assets/Images/proj2.jpg';
import hom4 from '../../assets/Images/office1.jpg';
import hom5 from '../../assets/Images/office2.jpg';
import hom6 from '../../assets/Images/office3.jpg';
import hom7 from '../../assets/Images/office4.jpg';
import hom8 from '../../assets/Images/office5.png';
import hom9 from '../../assets/Images/proj6.jpg';


const Gallery = () => {
  return (
    <>
    <div className='m-8 '>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 lg:gap-0 mt-10">
       
          <div className="relative overflow-hidden  shadow-lg mt-10">
            <img src={img1}  className="w-full h-full object-cover" />
           
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mb-10">
            <img src={hom3}  className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mt-10">
            <img src={hom2} alt='' className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-0 lg:mt-10 gap-2">
       
          <div className="relative overflow-hidden  shadow-lg lg:mb-10">
            <img src={hom4}  className="w-full h-full object-cover" />
           
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mt-10">
            <img src={hom5}  className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mb-10">
            <img src={hom6} alt='' className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 lg:mt-10">
       
          <div className="relative overflow-hidden  shadow-lg lg:mt-10">
            <img src={hom7}  className="w-full h-full object-cover aspect-w-4 aspect-h-3" />
           
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mb-10">
            <img src={hom8}  className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
          <div className="relative overflow-hidden  shadow-lg lg:mt-10">
            <img src={hom9} alt='' className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-sm">Miami, Florida</p>
            
              <h3 className="text-white text-xl font-semibold">Allstate Employee Lounge</h3>
            </div>
            <div className="text-center">
              <p className="text-white text-sm">1.22.22</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </div>
    </>
  );
};

export default Gallery;
