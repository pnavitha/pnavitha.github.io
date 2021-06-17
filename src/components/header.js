import React, { useContext }  from 'react';
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
    FormControl,
    Input,
    InputLabel,
    TextField,
    Paper
} from '@material-ui/core';

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
        height: '94%',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        '&:hover': {
            background: '#25252B',
            color: '#ffffff',
        },
    }
});

const Header = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Grid container direction="row" justify="space-evenly" spacing={2}>
    <Grid item xs={12} sm={6}>
        <Paper elevation={2} square className={classes.ContentWrapper}>
            <Typography variant="subtitle1">ABOUT US...</Typography>
            <br />
            <Typography variant="body1">Simple Solution Club is a new initiative to simplify finances for next generation. From piggy banks to bank accounts, work & wages to mutual funds, interest to compounding, we will introduce topics at the right age to ensure that your child is always ahead of the financial curve...</Typography>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                    Know more
                </Button>
            </Link>
            <img src={require("../images/svg_aboutus.svg")} alt="simple solution club how to introduce money to child and talk about money earning, spending, saving, and investments" width="100%" height="100rem" />
        </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Paper elevation={2} square className={classes.JoinClubWrapper}>
            <Grid container direction='column'>
                <Typography variant="subtitle1">Get Bank Statement Analysis...</Typography>
                <br />
                <Box fontWeight="fontWeightBold" color="#1d75ae" >
                    Provide your bank statement to get details.
                </Box>
                <Autocomplete
                    size='small'
                    fontSize='small'
                    options={state.bankNames}
                    value={state.selectedBankName}
                    onChange={(event, newValue) => dispatch({ type: "UPDATE_BANK_NAME", payload: newValue })}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Select Bank Name" />}
                />
                <FormControl>
                    <InputLabel>Phonenumber</InputLabel>
                    <Input 
                        value={state.profileForm ? state.profileForm.phoneNumber : ""}
                        onChange={(event) => dispatch({ type: "UPDATE_PHONENUMBER", payload: event.target.value })} />
                </FormControl>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.submitDetails}
                    onClick={() => dispatch({ type: "SAVE_PROFILE_BASICS" })
                    }>
                    Submit
        </Button>
            </Grid>
        </Paper>
    </Grid>
</Grid>
}

export default Header;