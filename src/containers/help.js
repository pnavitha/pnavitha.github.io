import React from 'react';
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

const Help = () => {
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
        <Box fontWeight="fontWeightBold">
            To reach our customer support executives, drop an email on
            </Box>
        <DialogContentText>
          <Box fontWeight="fontWeightBold" color="#1d75ae" >
          connect@mynextinning.com
          </Box>
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