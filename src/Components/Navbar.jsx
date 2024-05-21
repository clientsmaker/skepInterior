import React from 'react'
import icon from '../assets/Images/navIcon.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=' flex justify-between p-3 fixed'>
        {/* <img src={icon} width={60} height={60} className='p-2'
        alt="" /> */}
        <h1 className="text-3xl font-semibold sm:text-5xl "style={{color: '#cc9933' }}>
          <h1 style={{ fontFamily: 'Cinzel, serif' }}>Skep </h1>
            {/* <strong className="block font-extrabold text-rose-700"> Forever Home. </strong> */}
          </h1>
   <div className='text-black text-center rounded-full bg-rgb(255, 236, 214) p-3'>
   {/* <RxHamburgerMenu className='w-8 h-8  shadow-lg' /> */}
   </div>
    </div>
  )
}

export default Navbar