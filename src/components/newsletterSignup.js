import React, { useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../context/app-context/app-context-provider';

import { 
    Typography,
    Box,
    Grid,
    Button,
    InputLabel,
    Input,
    FormControl,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
    ContentWrapper: {
        backgroundColor: '#f0f1f2',
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        padding: '4px 4px',
    },
});

const NewsletterSignup = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
            { state.profileAdded ? 
                <Box fontWeight="bold" color="#1d75ae" >
                    Thank you for taking a step ahead. We will call you to help with your Business and MSME loans.
                </Box> :
                <Grid container direction='column'>
                <Typography variant="subtitle1">Get Regular updates by WhatsApp...</Typography>
                <br/>
                <Box fontWeight="bold" color="#0975e1" >
                    Provide your contact information. We will reach out to you.
                </Box>
                <FormControl>
                    <InputLabel >Phone Number</InputLabel>
                    <Input
                        type="text"
                        value={state.profilesForm ? state.profilesForm.phoneNumber : ""}
                        onChange={(event) => dispatch({ type: "UPDATE_USER_PHONE_NUMBER", payload: event.target.value })} />
                </FormControl>  
                <FormControl>
                    <InputLabel >Email Id</InputLabel>
                    <Input
                        type="text"
                        value={state.profilesForm ? state.profilesForm.email : ""}
                        onChange={(event) => dispatch({ type: "UPDATE_USER_PHONE_EMALID", payload: event.target.value })} />
                </FormControl>  
                <br />
                <Button variant="contained" color='secondary' className={classes.submitDetails} onClick={() => dispatch({ type: "REGISTER" })}>
                    SUBMIT
                </Button>
            </Grid>}
            </Grid>
            <Grid item xs={12} sm={6}> 
            <img src={require("../images/newsletter_signup.svg")} alt="" width="100%" />
            </Grid> 
</Grid>
</Paper>
}

export default NewsletterSignup;