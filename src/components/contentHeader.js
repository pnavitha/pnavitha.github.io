import React, { useContext, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InfoIcon from '@material-ui/icons/Info';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { 
    Typography,
    Box,
    Grid,
    Button,
    InputLabel,
    Input,
    FormControl,
    TextField,
    Paper,
    IconButton
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    JoinClubWrapper: {
        background: '#fff',
        height: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        // border: '1px solid #ccc',
        display: 'inline-block',
        padding: '4px 4px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '2px 2px #c3c3c3',
        '&:hover': {
            background: '#25252B',
        },
    },
    bankPassword: {
        width: '100%'
    }
});

const ContentHeader = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [visibility, setVisibility] = React.useState(false);

    const changeHandler = (event) => {
        console.log("in input", event.target.files);
		if(event.target && event.target.files && event.target.files.length > 0) {
            getBase64(event.target.files[0], (result) => {
                dispatch({ type: "UPLOAD_PDF_AND_ANALYZE", payload:  result})
           });
    
        }
	};

    const getBase64 = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return <Grid container direction="row" justify="space-evenly" spacing={2}>
    <Grid item xs={12} sm={6}>
        <Paper elevation={2} square className={classes.ContentWrapper}>
            <Typography variant="subtitle1">ABOUT US...</Typography>
            <br />
            <Typography variant="body1">We are the team who believes technology can help in your business money problems. We fasten the decision making time for borrower's loan applications in banks....</Typography>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                    Know more
                </Button>
            </Link>
            <img src={require("../images/svg_aboutus.svg")} alt="simple solution club how to introduce money to child and talk about money earning, spending, saving, and investments" width="100%" height="80rem" />
        </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Paper elevation={2} square className={classes.JoinClubWrapper}>
            { state.profileAdded ? 
                <Box fontWeight="bold" color="#1d75ae" >
                    Thank you for taking a step ahead. We will call you to help with your Business and MSME loans.
                </Box> :
                <Grid container direction='column'>
                <Typography variant="subtitle1">CONNECT TO KNOW MORE...</Typography>
                <Box fontWeight="bold" color="#1d75ae" >
                    Provide your contact information. We will reach out to you.
                </Box>
                <FormControl className={classes.bankPassword}>
                    <InputLabel >Phone Number</InputLabel>
                    <Input
                        type="text"
                        value={state.profilesForm ? state.profilesForm.phoneNumber : ""}
                        onChange={(event) => dispatch({ type: "UPDATE_USER_PHONE_NUMBER", payload: event.target.value })} />
                </FormControl>  
                <FormControl className={classes.bankPassword}>
                    <InputLabel >Email Id</InputLabel>
                    <Input
                        type="text"
                        value={state.profilesForm ? state.profilesForm.email : ""}
                        onChange={(event) => dispatch({ type: "UPDATE_USER_PHONE_EMALID", payload: event.target.value })} />
                </FormControl>  
                <br />
                <Button className={classes.submitDetails} onClick={() => dispatch({ type: "REGISTER" })}>
                    SUBMIT
                </Button>
            </Grid>}
        </Paper>
    </Grid>
</Grid>
}

export default ContentHeader;