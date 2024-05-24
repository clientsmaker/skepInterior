import React from 'react'
import icon from '../assets/Images/skep logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=' flex justify-between p-3 absolute'>
        <img src={icon} width={150} height={100} className='p-2'
        alt="" />
         {/* <h3 className="ml-10 block font-extrabold text-white mt-6 text-xl ">
      <h1 className="text-3xl font-extrabold sm:text-5xl" style={{ fontFamily: 'Cinzel, serif', lineHeight: '1.2' }}>
  Sk<span className="text-red-700">e</span>p

</h1>

  <p className="text-sm font-medium text-white" style={{ fontSize: '20px', marginTop: '-8px' }}>I n t e r <span className='text-red-700'>i o </span>r s</p>
</h3> */}
          
   <div className='text-black text-center rounded-full bg-rgb(255, 236, 214) p-3'>
   {/* <RxHamburgerMenu className='w-8 h-8  shadow-lg' /> */}
   </div>
    </div>
  )
}

export default Navbar