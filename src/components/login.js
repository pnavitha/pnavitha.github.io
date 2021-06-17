import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/app-context/app-context-provider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {  
  Grid,
  Box,
  InputLabel,
  Input,
  FormControl,
  Button,
  DialogContent,
  DialogActions,
  Dialog,
  IconButton
} from '@material-ui/core'

const useStyles = makeStyles({
  submitDetails: {
      '&:hover': {
          background: '#25252B',
          color: '#ffffff',
      },
  }
});

const Login = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [open, setOpen] = React.useState(true);
    const history = useHistory();
    const [visibility, setVisibility] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
      dispatch({ type: "CLEAR_LOGIN_FORM" })
      history.goBack();
    };

    return <Dialog
    open={open}
    fullWidth
    onClose={handleClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogContent>
        <Box fontWeight="fontWeightBold" color="#1d75ae" >
            Welcome to Peso!!
        </Box>
        <Grid container direction="column">
        <FormControl>
            <InputLabel width='100%'>Phonenumber*</InputLabel>
            <Input 
                type="number"
                fullWidth
                color='secondary'
                value={state.loginForm ? state.loginForm.phoneNumber : ""}
                onChange={(event) => dispatch({ type: "UPDATE_LOGIN_FORM_PHONE_NUMBER", payload: event.target.value })} />
        </FormControl>
        <Grid container direction='row' justify='space-between'>
        <FormControl>
            <InputLabel width='100%'>Password*</InputLabel>
              <Input
                type={visibility ? "text" : "password"}
                value={state.loginForm ? state.loginForm.passcode : ""}
                onChange={(event) => dispatch({ type: "UPDATE_LOGIN_FORM_PASSCODE", payload: event.target.value })} />
        </FormControl>    
              {visibility ?
                <IconButton size='small' color="primary" onClick={() => setVisibility(false)}><VisibilityIcon /></IconButton> :
                <IconButton size='small' onClick={() => setVisibility(true)}><VisibilityOffIcon /></IconButton>
              }
          </Grid>
        </Grid>
      
    </DialogContent>
    <DialogActions>
        <Button 
            disabled={!state.loginForm || !isValidPhoneNumber(state.loginForm.phoneNumber) || state.loginForm.passcode === undefined || state.loginForm.passcode.trim().length === 0 }
            variant="contained" 
            color="primary"
            className={classes.submitDetails}
            onClick={() => { dispatch({ type: "LOGIN" }); handleClose();}}>
            Login
        </Button>
      <Button color="primary" onClick={handleClose}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
}

const isValidPhoneNumber = (phoneNumber) => {
  return phoneNumber && phoneNumber.length == 10
}

export default Login;