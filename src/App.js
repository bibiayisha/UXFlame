// React imports
import React from 'react';
import ReactDOM from 'react-dom';
// Third party imports
import { ThemeProvider } from '@mui/material/styles';
// App imports
import './App.css';
import theme from './assets/themes/theme'; 
import NavBar from './components/atoms/NavBar';
import Home from './components/webPages/Home/Home';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Home/>
  </ThemeProvider>
  );
}

export default App;
