import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />

  <div className="flex-grow w-full bg-ternary pb-24">
    <Outlet />
  </div>
  <div className="flex-shrink-0 sm:bg-ternary ">
    <Footer />
  </div>
</div>

  )
}

export default Layout