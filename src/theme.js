import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  typography: {
    fontFamily: "'Neuton', serif",
    h1: {
      fontSize: '40px',
      fontWeight: 'bold'
    },
    body1: {
      fontSize: '16px',
      whiteSpace: 'pre-line'
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      '@media (min-width:300px)': {
        fontSize: '1rem',
      },
    },
    subtitle2: {
      padding: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
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