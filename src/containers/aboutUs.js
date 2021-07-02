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
import {  
    Grid,
    Box,
    Button,
    Paper
  } from '@material-ui/core'

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 48,
        bottom: 0,
        right: 0,
        // left: '14%',
        background: '#fafbeb',
        padding: '16px',
        height: 'auto',
        overflow: 'scroll',
        direction: 'column',
        display: 'flex',
        flexDirection: 'column',
    },
    aboutUsWrapper: {
        background: '#fff',
        padding: '16px',
    },
});

const AboutUs = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.aboutUsWrapper}>
            <Typography variant="subtitle1">ABOUT US...</Typography>
            <br />
            <br />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1">Who are we?</Typography>
                    <Typography variant="body1">We are the team who believes technology can help in your business money problems. We fasten the decision making time for borrower's loan application in banks and other lending parties. It does not matter which domain you do business in or in what turnover. We are present for each buisness. We use our tech to analyse your documents and direct you to the right lenders.</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={require("../images/svg_aboutus.svg")} alt="simple solution club best way to talk to kids about money earning, spending, saving, and investments" width="100%" height="100rem" />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} sm={4} >
                    <img src={require("../images/svg_checkData.svg")} alt="simple solution club best way to talk to child about money earning, spending, saving, and investments" width="100%" height="100rem" />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Typography variant="subtitle1">What is our motto?</Typography>
                    <br />
                    <Typography variant="body1">We understand that Business runs on Money and Time. We value both and thus, hustle to make money available for your business, as soon as possible. Our work is to guide you with our financial knowledge, at each step of your business.</Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} sm={8} >
                    <Typography variant="subtitle1">How can we help you?</Typography>
                    <br />
                    <Typography variant="body1">We are expert in different kinds of business loans and MSME loans. We analyse all the documents related to your business and direct you to the right bank which can help you with the money problem and provides the best offer.</Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <img src={require("../images/svg_project.svg")} alt="simple solution club best way of talking to child about money earning, spending, saving, and investments" width="100%" height="100rem" />
                </Grid>
            </Grid>
            <br />
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