import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Footer from '../components/footer';
import {
    Link
} from "react-router-dom";
import { AppContext } from '../context/app-context/app-context-provider';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import {  
    Grid,
    Box,
    Button,
    Paper
  } from '@material-ui/core'

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 50,
        height: 'auto',
        overflow: 'scroll',
        direction: 'column',
        display: 'flex',
        flexDirection: 'column',
    },
    whiteWrapper: {
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    greyWrapper: {
        background: '#f0f1f2',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
});

const AboutUs = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Who are we?</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Use technology to solve business capital problems.</Typography>
                    <br />
                    <Typography variant="body1">We are the team who believes technology can help in your business money problems. We fasten the decision-making time for borrower's loan applications in banks and other lending parties. It does not matter which domain you do business in or in what turnover. We are present for each business. We use our tech to analyse your documents and direct you to the right lenders.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/who_are_we.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">What is our motto?</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Best offers for business capital.</Typography>
                    <br />
                    <Typography variant="body1">We understand that Business runs on Money and Time. We value both and thus, hustle to make money available for your business, as soon as possible. Our work is to guide you with our financial knowledge, at each step of your business.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/our_motto.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">How can we help you?</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Analyse all business documents for quick loans.</Typography>
                    <br />
                    <Typography variant="body1">We are experts in different kinds of business loans and MSME loans. We analyse all the documents related to your business and direct you to the right bank which can help you with the money problem and provides the best offer.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/analysis.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Link to="/bank-statement-rating" >
                <Button color="primary" startIcon={<GradeIcon />}>
                    Get Your Bank Statement Rating
                </Button>
            </Link>
            <br/>
            <Link to="/" >
                <Button color="primary" startIcon={<HomeIcon />}>
                    GOTO HOME PAGE
                </Button>
            </Link>
            <br/>
            <Link to="/help">
                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })} color="primary" startIcon={<PersonAddIcon />}>
                    Let's Connect
                </Button>
            </Link>
        </Paper>
        <Footer />
    </Box>
}

export default AboutUs;