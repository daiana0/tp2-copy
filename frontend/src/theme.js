import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
    mode: 'light',
    primary: {
      main: '#CBA0FF', // Lila suave
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6A0DAD', // Morado oscuro
      contrastText: '#ffffff',
    },
   // background: {
      //default: '#F9F5FF', 
     // paper: '#ffffff',
    //},
    text: {
      primary: '#2E2E2E', // Gris oscuro
      secondary: '#6A0DAD',
    },
    accent: {
      main: '#FF6EC7', // Rosa chicle
    },
    info: {
      main: '#AEEEEE', // Celeste suave para detalles
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: '#4d5656',
        },
        '#root': {
          width: '100%',
        },
      },
      MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    },
  },
});

export default theme;
