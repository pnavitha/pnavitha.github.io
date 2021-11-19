import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';
import Footer from '../components/footer';
import HomeHeading from './homeHeading';
import BankStatementInfo from '../components/bankStatementInfo';
import PreFooter from './preFooter';
import Testimonials from '../components/testimonials';
import RoleChoice from '../containers/roleChoice';
import MentorInformation from '../components/mentorInformation';
import MockInterview from '../components/mockInterview';

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
    whatsNewWrapper: {
        background: '#fff',
        padding: '16px',
    },
    reportSubtitle: {
        padding: '4px'
    },
    connect : {
        alignContent: 'center',
        margin: '2%'
    } 
});

const Home = () => {
    const classes = useStyles();

    return <Box className={classes.contentAreaWrapper}>
        <Grid container direction="column" alignItems="stretch" justify="center" spacing={0}>
            <Grid item>
                <MockInterview />
            </Grid>    
            <Grid item>
                <HomeHeading />  
            </Grid>
            <Grid item>
                <RoleChoice />
            </Grid>
            <Grid item>
                <Testimonials />
            </Grid>
            <Grid item>
                <MentorInformation />
            </Grid>
            <Grid item>
                <BankStatementInfo />
            </Grid>
            <Grid item>
                <PreFooter />
            </Grid>
            <Grid item>
                <Box className={classes.connect}>
                <Typography variant="body1">To reach our customer support executives, drop an email on </Typography>
                <Box fontWeight="fontWeightBold" color="#1d75ae" >
                    connect@mynextinning.com
                </Box>
                </Box>
            </Grid>
        </Grid>
        <Footer />
    </Box >
}

export default Home;