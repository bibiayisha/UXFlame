// React imports
import React from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Third party imports
import { ThemeProvider } from '@mui/material/styles';
// App imports
import './App.css';
import theme from './assets/themes/theme'; 
import NavBar from './components/atoms/Navbar/NavBar';
import Home from './components/webPages/Home/Home';
import Footer from './components/atoms/Footer/Footer';
import AboutUs from './components/webPages/AboutUs/AboutUs'
import ContactUs from './components/webPages/ContactUs/ContactUs';
import ComingSoon from './components/webPages/ComingSoon/ComingSoon';

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [navbarBgColor, setNavbarBgColor] = useState(isHomePage);

  useEffect(() => {
    setNavbarBgColor(!isHomePage);
  }, [isHomePage]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar bgcolor={navbarBgColor} />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='contact-us' element={<ContactUs/>} />
        <Route path='blogs' element={<ComingSoon/>} /> 
        <Route path='videos' element={<ComingSoon/>} /> 
        <Route path='courses' element={<ComingSoon/>} /> 
      </Routes>
      <Footer/>
  </ThemeProvider>
  );
}

export default App;
