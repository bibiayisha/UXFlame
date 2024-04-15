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
    fontFamily: 'Inter, sans-serif', 
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
    h5: {
      fontSize: '11px',
      fontWeight: '700',
      lineHeight: '12px',
      letterSpacing: '-0.4px'
    },
    h4: {
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '34px',
      letterSpacing: '-0.85px'
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
    MuiLink:{
      styleOverrides:{
        root:{
          width:'max-content !important',
          
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
