import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';
import Footer from '../components/footer';
import ContentHeader from '../components/contentHeader';
import MoneyInformation from '../components/moneyInformation';
import BankStatementAnalyzer from '../containers/bankStatementAnalyzer';
import BankStatementInfo from '../components/bankStatementInfo';
import FrequentlyAskedQuestions from '../components/frequentlyAskedQuestions';
import PreFooter from './preFooter';
import Testimonials from '../components/testimonials';
import EnrollNow from '../components/enrollNow';
import MentorInformation from '../components/mentorInformation';

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
        <Grid container direction="column" alignItems="stretch" justify="center">
            {/* <Grid item>
                <ContentHeader />  
            </Grid> */}
            <Grid item>
                <BankStatementAnalyzer />  
            </Grid>
            <Grid item>
                <MoneyInformation />
            </Grid>
            <Grid item>
                <Testimonials />
            </Grid>
            <Grid item>
                <MentorInformation />
            </Grid>
            {/* <Grid item>
                <EnrollNow />
            </Grid> */}
            <Grid item>
                <BankStatementInfo />
            </Grid>
            {/* <Grid item>
                <FrequentlyAskedQuestions />
            </Grid> */}
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