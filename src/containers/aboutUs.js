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
        left: '14%',
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
                    <Typography variant="body1">Simple Solution Club is a new initiative to simplify finances for next generation. We have on our team of qualified educators, renowned child psychologists, and experienced financial professionals who have worked to prepare an age-appropriate curriculum and study materials to ensure that your child builds a positive relationship with money.</Typography>
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
                    <Typography variant="body1">From piggy banks to bank accounts, work & wages to mutual funds, interest to compounding we will introduce topics at the right age to ensure that your child is always ahead of the financial curve.</Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} sm={8} >
                    <Typography variant="subtitle1">How can we help you?</Typography>
                    <br />
                    <Typography variant="body1">We at Simple Solution Club have built the most robust curriculum for imparting financial education to children. The medium of instruction will be a mix of video lessons and interactive sessions on our immersive viewing platform along with offline accessories that work towards creating a holistic learning environment.</Typography>
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