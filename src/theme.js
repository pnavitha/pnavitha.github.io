import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  typography: {
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
      main: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
    error: {
      main: '#ff5252'
    }
  }
});