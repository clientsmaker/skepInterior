// import React, { useState } from 'react';
// import icon from '../assets/Images/skep logo.png';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ scrollToSection }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleProjectsClick = () => {
//     navigate('/projects');
//   };

//   const toggleMenu = () => {
//     setIsOpen(prevState => !prevState);
//   };

//   // Dummy data
//   const projectCount = 250;
//   const clientCount = 150;

//   return (
//     <div className='relative flex justify-between p-3 px-3 bg-white lg:w-1/3 ml-20'>
//       <img src={icon} width={80} height={10} alt="Skep Logo" />

//       <button
//         className='text-black text-center rounded-full lg:p-3 px-4 cursor-pointer bg-transparent border-none'
//         onClick={toggleMenu}
//         aria-label={isOpen ? "Close menu" : "Open menu"}
//       >
//         <RxHamburgerMenu className='w-8 h-8 text-orange-500' />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg p-4 flex flex-col space-y-4 z-50">
//           <div className="relative flex flex-col text-black space-y-4">
//           <button onClick={() => scrollToSection('gallery')} className="relative flex items-center hover:text-orange-500">
//           Projects
//               <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full ">
//                 {projectCount}
//               </span>
//             </button>
          
//             <Link to="#strength" className="relative flex items-center hover:text-orange-500">
//               Clients
//               <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full p-3">
//                 {clientCount}
//               </span>
//             </Link>
//             <Link to="#contact" className="hover:text-orange-500">Contact Us</Link>
//           </div>
//           <div className="relative flex flex-col text-black space-y-4">
//             <Link to="#about" className="hover:text-orange-500">About</Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useRef } from 'react';
import icon from '../assets/Images/skep logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToGallery, scrollToClientLogos, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectCount = 250
  const clientCount = 150;

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className='relative flex justify-between p-3 px-3 bg-white lg:w-1/3 ml-20'>
      <img src={icon} width={80} height={10} alt="Skep Logo" />

      <button
        className='text-black text-center rounded-full lg:p-3 px-4 cursor-pointer bg-transparent border-none'
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <RxHamburgerMenu className='w-8 h-8 text-orange-500' />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg p-4 flex flex-col space-y-4 z-50">
          <div className="relative flex flex-col text-black space-y-4">
            <button onClick={scrollToGallery} className="relative flex items-center hover:text-orange-500">
              Projects
              <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full ">
               {projectCount } 
               </span>
            </button>
            <button onClick={scrollToClientLogos} className="relative flex items-center hover:text-orange-500">
            Strength
            <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full p-3">
                 {clientCount}
               </span>
          </button>
          <button onClick={scrollToContact} className="relative flex items-center hover:text-orange-500">
            Contact Us
          </button>
         
        </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
