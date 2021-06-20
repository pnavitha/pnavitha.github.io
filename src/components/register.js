import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
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

const Register = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [open, setOpen] = React.useState(true);
    const history = useHistory();
    const [visibility, setVisibility] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleClose = () => {
      setOpen(false);
      dispatch({ type: "CLEAR_REGISTER_FORM" })
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
            Thanks for choosing Paiso!!
        </Box>
        <Grid container direction="column">
        <FormControl>
            <InputLabel width='100%'>Phonenumber*</InputLabel>
            <Input 
                type="number"
                fullWidth
                color='secondary'
                value={state.registerForm ? state.registerForm.phoneNumber : ""}
                onChange={(event) => dispatch({ type: "UPDATE_REGISTER_FORM_PHONE_NUMBER", payload: event.target.value })} />
        </FormControl>
        <FormControl>
            <InputLabel width='100%'>Email*</InputLabel>
            <Input 
                type="email"
                color='secondary'
                fullWidth
                value={state.registerForm ? state.registerForm.email : ""}
                onChange={(event) => dispatch({ type: "UPDATE_REGISTER_FORM_EMAIL", payload: event.target.value })} />
        </FormControl>
        <Grid container direction='row' justify='space-between'>
        <FormControl>
            <InputLabel width='100%'>Password*</InputLabel>
              <Input
                type={visibility ? "text" : "password"}
                value={state.registerForm ? state.registerForm.passcode : ""}
                onChange={(event) => dispatch({ type: "UPDATE_REGISTER_FORM_PASSCODE", payload: event.target.value })} />
        </FormControl>    
              {visibility ?
                <IconButton size='small' color="primary" onClick={() => setVisibility(false)}><VisibilityIcon /></IconButton> :
                <IconButton size='small' onClick={() => setVisibility(true)}><VisibilityOffIcon /></IconButton>
              }
          </Grid>
          
        <FormControl>
        <InputLabel width='100%'>Confirm Password*</InputLabel>
        <Input
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)} />
        </FormControl>
        </Grid>
    </DialogContent>
    <DialogActions>
          {(state.registerForm && state.registerForm.email && !isValidEmailId(state.registerForm.email)) ?
            <Typography variant="body1" color="error">Provide valid Email Id.</Typography> :
            ((state.registerForm && state.registerForm.passcode && confirmPassword !== state.registerForm.passcode) ?
              <Typography variant="body1" color="error">Password and Confirm Password are not matching.</Typography> :
              <br />)
          }
        <Button 
            disabled={!isValidPhoneNumber(state.registerForm.phoneNumber) || !isValidEmailId(state.registerForm.email) || state.registerForm.passcode === undefined || state.registerForm.passcode.trim().length === 0 || confirmPassword !== state.registerForm.passcode}
            variant="contained" 
            color="primary"
            className={classes.submitDetails}
            onClick={() => {dispatch({ type: "REGISTER" }); handleClose();}}>
            Register
        </Button>
      <Button color="primary" onClick={handleClose}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
}

const isValidEmailId = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidPhoneNumber = (phoneNumber) => {
  return phoneNumber && phoneNumber.length == 10
}
export default Register;