import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '6rem',
      fontWeight: 'bold',
      '@media (min-width:300px)': {
        fontSize: '3rem',
      }
    },
    h5: {
      fontSize: '1.3rem',
      '@media (min-width:300px)': {
        fontSize: '1.4rem',
      }
    },
    body1: {
      fontSize: '0.6rem',
      '@media (min-width:300px)': {
        fontSize: '0.8rem',
      }
    },
    body2: {
      fontSize: '0.4rem',
      '@media (min-width:300px)': {
        fontSize: '0.6rem',
      }
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      '@media (min-width:300px)': {
        fontSize: '1rem',
      },
    },
    subtitle2: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      backgroundColor: '#282c35',
      color: '#fff'
    }
  },
  palette: {
    primary: {
      main: '#0975e1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f38b01',
      contrastText: '#fff',
    },
    error: {
      main: '#ff5252'
    }
  }
});