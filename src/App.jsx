import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, createHashRouter, Route, RouterProvider, Routes, useLocation } from "react-router-dom";
import MainLayout from "./Component/MainLayout/MainLayout";
import HomePage from './Component/Home/HomePage/HomePage';
import AboutUs from './Component/AboutUs/AboutUs';
import Parteners from './Component/Parteners/Parteners';
import Outlet from './Component/Outlet/Outlet';
import OutletDetails from './Component/Outlet/OutletDetails';
import Contactus from './Component/ContactUs/Contactus';
import Gallary from './Component/gallary/Gallary';
import Privacy from './Component/Privacy/Privacy';
import Terms from './Component/Terms/Terms';
import { ToastContainer } from 'react-toastify';
import ColorBoxProvider from './Context/ColorboxContext';
import SearchDetails from './Component/SearchResults/SearchResults';
import NavbarPage from './Component/Navbarside/NavbarPage';
import Footer from './Component/Footer/Footer';
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  let route = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/parents", element: <Parteners /> },
    { path: "/outlet", element: <Outlet /> },
    { path: "/outlet/:id", element: <OutletDetails /> },
    { path: "/contectus", element: <Contactus /> },
    { path: "/gallary", element: <Gallary /> },
    { path: "/SearchResults", element: <SearchDetails /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/terms", element: <Terms /> }]

  return (
    <div>
            <ToastContainer />
      <ColorBoxProvider >
      <NavbarPage isHomePage={isHomePage} />
      <Routes>
        {route.map((e) => <Route path={e.path} element={e.element} />)}
      </Routes>
      <Footer />


      </ColorBoxProvider>
    </div>
  );
}

export default App;
