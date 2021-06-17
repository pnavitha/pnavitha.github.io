import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {
  Box,
  DialogContentText,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
 } from '@material-ui/core';
import { AppContext } from '../context/app-context/app-context-provider';

const useStyles = makeStyles({
  submitDetails: {
      '&:hover': {
          background: '#25252B',
          color: '#ffffff',
      },
  }
});

const Help = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [open, setOpen] = React.useState(true);
    const history = useHistory();

    const handleClose = () => {
      setOpen(false);
      history.goBack();
    };

    return <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">    
      <Typography variant="subtitle1">Happy to help...</Typography>
    </DialogTitle>
    <DialogContent>
        <Box fontWeight="fontWeightBold" color="#1d75ae" >
            We are always available at the following channels.
        </Box>
        <DialogContentText>
          1. Call - 1020304050<br/>
          2. WhatsApp - 1020304050
          </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={handleClose}>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
}

export default Help;