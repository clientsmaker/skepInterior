import React from 'react'
import icon from '../assets/Images/navIcon.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=' flex justify-between p-3'>
        <img src={icon} width={60} height={60} className='p-2'
        alt="" />
   <div className='text-black text-center rounded-full bg-slate-200 p-3'>
   <RxHamburgerMenu className='w-8 h-8  shadow-lg' />
   </div>
    </div>
  )
}

export default Navbar