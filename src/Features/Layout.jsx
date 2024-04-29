import React from 'react'
import {Outlet} from 'react-router-dom'
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