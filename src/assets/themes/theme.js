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
    fontFamily: 'Poppins, sans-serif', 
    h1: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '48px'
    },
    h3: {
      fontSize: '44px',
      fontWeight: '700',
      lineHeight: '48px',
      letterSpacing: '-1.2px'
    },
    h2: {
      fontSize: '64px',
      fontWeight: '700',
      lineHeight: '68px',
      letterSpacing: '-1.5px'
    },
    button: {
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '20px',
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          padding: '12px 45px'
        },
        outline: {
          color: 'white',
          border: '2px solid white',
          borderRadius: '0'
        },
        text: {
          padding: '8px',
          fontSize: '12px',
          color: 'white',
          fontWeight:'600',
          textTransform: 'uppercase',
          '&:hover': {
            backgroundColor:'transparent',
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          overflow: 'hidden'
        },
        paper: {
          backgroundColor: '#FB8045',
        },
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '8px',
          fontSize: '13px',
          fontWeight: 'bold',
          color: 'white',
          '&:hover': {
            borderBottom: '2px solid white',
            cursor: 'pointer'
          },
          '&.navListItem': {
            '&:hover': {
              borderBottom: 'none',
              textDecoration: 'underline solid 2px white',
              marginLeft: '8px'
            },
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary:{
            fontSize: '14px !important',
          },
        },
      },
    MuiList: {
      styleOverrides:{
        root: {
          '&.navList': {
            display: 'flex',
            flexDirection: 'row',
          },
        }
      }
    }
  }
});

export default theme;
