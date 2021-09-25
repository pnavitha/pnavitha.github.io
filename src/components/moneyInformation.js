import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InfoIcon from '@material-ui/icons/Info';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import {
    Typography,
    Grid,
    Button,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#fff',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    Card: {
        padding: '8%',
        width: '120px',
        height: '130px',
    }
});

const MoneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Typography variant="h1">What an Ideal Journey to Become a Product Manager looks like with Next Innings?</Typography>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <br />
                    <Typography variant="body1">Step 1 - Sign Up</Typography>
                    <Typography variant="body1">Step 2 - We get you the Best Mentor by analyzing your Strengths and Weaknesses.</Typography>
                    <Typography variant="body1">Step 3 - The Mentor will Personally Create a Holistic Roadmap that will help you become a Product Manager.</Typography>
                    <br />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <br />
                    <img src={require("../images/aboutus.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                    <br />
                </Grid>
            </Grid>
       </Grid>
        <br/>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <br />
                    <Typography variant="body1">Step 4 - You Follow the Roadmap and become Interview Ready</Typography>
                    <Typography variant="body1">Step 5 - Give the Interview and become a Product Manager!</Typography>
                    <br />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <br />
                    <img src={require("../images/rocket.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                    <br />
                </Grid>
            </Grid>
       </Grid>
    </Paper>
}

export default MoneyInformation;