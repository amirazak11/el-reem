import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarPage from '../Navbarside/NavbarPage'
import SubScrib from '../subScrib/subScrib'
import Sidebar from '../Navbarside/Sidebar'
export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';  
  console.log
  return (
    <>
      <NavbarPage isHomePage={isHomePage} /> 
      {/* <Sidebar/> */}
        <Outlet></Outlet>
        {/* <SubScrib/> */}
  <Footer/>
    </>
  )
}
