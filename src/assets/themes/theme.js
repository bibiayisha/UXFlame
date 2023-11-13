// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Change this to your desired primary color
    },
    secondary: {
      main: '#FF4081', // Change this to your desired secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // You can change the font family
  },
});

export default theme;
