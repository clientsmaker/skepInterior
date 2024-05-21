import React from 'react'
import icon from '../assets/Images/skep logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=' flex justify-between p-3 fixed'>
        {/* <img src={icon} width={150} height={100} className='p-2'
        alt="" /> */}
         <h3 className="ml-10 block font-extrabold text-black mt-6 text-xl font-serif">
      <h1 className="text-3xl font-semibold sm:text-5xl" style={{ fontFamily: 'Cinzel, serif', lineHeight: '1.2' }}>
  Sk<span className="text-red-700">e</span>p

</h1>

  <p className="text-sm" style={{ fontSize: '16px', marginTop: '-8px' }}>Interiors</p>
</h3>
          
   <div className='text-black text-center rounded-full bg-rgb(255, 236, 214) p-3'>
   {/* <RxHamburgerMenu className='w-8 h-8  shadow-lg' /> */}
   </div>
    </div>
  )
}

export default Navbar