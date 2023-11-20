// React imports
import React from 'react';
import ReactDOM from 'react-dom';
// Third party imports
import { ThemeProvider } from '@mui/material/styles';
// App imports
import './App.css';
import theme from './assets/themes/theme'; 
import NavBar from './components/atoms/NavBar';
import Header from './components/atoms/Header';
import ImageCarousal from './components/molecules/ImageCarousal';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <NavBar />
    <Header/>
    <ImageCarousal/>
  </ThemeProvider>
  );
}

export default App;
