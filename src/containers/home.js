import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box
} from '@material-ui/core';
import Footer from '../components/footer';
import ContentHeader from '../components/contentHeader';
import MoneyInformation from '../components/moneyInformation';
import KnowMore from '../components/knowMore';
import BankStatementAnalyzer from '../containers/bankStatementAnalyzer';
import BankStatementInfo from '../components/bankStatementInfo';
import FrequentlyAskedQuestions from '../components/frequentlyAskedQuestions';

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
    }
});

const Home = () => {
    const classes = useStyles();

    return <Box className={classes.contentAreaWrapper}>
        <Grid container direction="column" alignItems="stretch" justify="center">
            <Grid item>
                <ContentHeader />  
            </Grid>
            <Grid item>
                <BankStatementAnalyzer />  
            </Grid>
            <Grid item>
                <BankStatementInfo />
            </Grid>
            <Grid item>
                <MoneyInformation />
            </Grid>
            <Grid item>
                <KnowMore />
            </Grid>
            <Grid item>
                <FrequentlyAskedQuestions />
            </Grid>
        </Grid>
        <Footer />
    </Box >
}

export default Home;