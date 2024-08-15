import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Layout = () => {
  return (
    <div>
        <main className='app'>
      
            <Outlet />
        </main>
    </div>
  )
}

export default Layout