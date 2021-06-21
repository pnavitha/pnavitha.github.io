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
        paddingBottom: '2%',
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
        border: '1px solid #ccc',
        display: 'inline-block',
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '4px 4px #c3c3c3',
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
            <Typography variant="body1">We help you in tracking your finances so that you focus on more important business which you aspire for...</Typography>
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
            <Grid container direction='column'>
                <Typography variant="subtitle1">GET BANK STATEMENT ANALYSIS...</Typography>
                <br />
                <Box fontWeight="bold" color="#1d75ae" >
                    Provide your bank statement to get details.
                </Box>
                <Autocomplete
                    size='small'
                    fontSize='small'
                    options={state.bankNames}
                    value={state.newBankStatementForm ? state.newBankStatementForm.selectedBankName : ""}
                    onChange={(event, newValue) => dispatch({ type: "UPDATE_BANK_NAME", payload: newValue })}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Select Bank Name" />}
                />
                <Grid container direction='row' justify="flex-start" alignItems="flex-end">
                    <Grid item xs={10} sm={10}>
                        <FormControl className={classes.bankPassword}>
                            <InputLabel >Bank statement password</InputLabel>
                            <Input
                                type={visibility ? "text" : "password"}
                                value={state.newBankStatementForm ? state.newBankStatementForm.bankStatementPassword : ""}
                                onChange={(event) => dispatch({ type: "UPDATE_BANK_STATEMENT_PASSWORD", payload: event.target.value })} />
                        </FormControl>  
                    </Grid>
                    <Grid item>
                        {visibility ?
                            <IconButton size='small' color="primary" onClick={() => setVisibility(false)}><VisibilityIcon /></IconButton> :
                            <IconButton size='small' onClick={() => setVisibility(true)}><VisibilityOffIcon /></IconButton>
                        }
                    </Grid>
                </Grid>
                <br/>
                <InputLabel className={classes.submitDetails}>
                    <input style={{ display: 'none' }} accept="application/pdf" type="file" name="file" onChange={changeHandler} />
                    UPLOAD PDF & GET ANALYSIS
                </InputLabel>
            </Grid>
        </Paper>
    </Grid>
</Grid>
}

export default ContentHeader;