import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';
import Footer from '../components/footer';
import ContentHeader from '../components/contentHeader';
import AspiringJourneyInformation from '../components/aspiringJourneyInformation';
import BankStatementInfo from '../components/bankStatementInfo';
import FrequentlyAskedQuestions from '../components/frequentlyAskedQuestions';
import PreFooter from './preFooter';
import Testimonials from '../components/testimonials';
import EnrollNow from '../components/enrollNow';
import MentorInformation from '../components/mentorInformation';
import AspiringHeading from './aspiringHeading';
import AspiringBrochure from '../components/aspiringBrochure';
import MockInterview from '../components/mockInterview';
import ProductCaseStudyHeading from '../containers/productCaseStudyHeading';
import TemplateJourneyInformation from '../components/templateJourneyInformation';

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

const ProductCaseStudyTemplate = () => {
    const classes = useStyles();

    return <Box className={classes.contentAreaWrapper}>
        <Grid container direction="column" alignItems="stretch" justify="center">
            <Grid item>
                <ProductCaseStudyHeading />  
            </Grid>
            <Grid item>
                <MentorInformation />
            </Grid>
            <Grid item>
                <TemplateJourneyInformation />
            </Grid>
            <Grid item>
                <MockInterview />
            </Grid>
            <Grid item>
                <Testimonials />
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

export default ProductCaseStudyTemplate;