import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import Footer from '../components/footer';
import ContentHeader from '../components/contentHeader';
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CreditDebitTable from '../components/CreditDebitTable';
import CreditDebitBarChart from '../components/CreditDebitBarChart';
import CreditAnalysisByParty from '../components/CreditAnalsisByParty';
import CreditAnalysisByCategory from '../components/CreditAnalsisByCategory';
import DebitAnalysisByParty from '../components/DebitAnalsisByParty';
import DebitAnalysisByCategory from '../components/DebitAnalsisByCategory';
import BankStatement from '../components/BankStatement';

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 50,
        background: '#f2f3f7',
        padding: '1%',
        height: 'auto',
        overflow: 'scroll',
        direction: 'column',
        display: 'flex',
        flexDirection: 'column',
    },
    ContentWrapper: {
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
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
    const [state, dispatch] = useContext(AppContext);
    const history = useHistory();

    return <Box className={classes.contentAreaWrapper}>
        <Grid container direction="column" alignItems="stretch" justify="center">
            <Grid item>
              <ContentHeader />  
            </Grid>
            <Grid item><br /></Grid>
            <Grid item>
                <Paper elevation={2} square className={classes.ContentWrapper}>
                <Typography variant="subtitle1" level="4" margin="xsmall">DEMO REPORT...</Typography>
                <br/>
                <Typography variant="body1">We use technology to understand business finances. We generate multiple reports to create a valuable profile of borrower. We analyse these reports and match the borrower with perfect lenders. Our technology is AI-driven and always learning. Following is a snippet of some basic analysis reports. Our reports are completely flexible and always improving.</Typography>
                <br/>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.reportSubtitle} variant="subtitle2" level="4" margin="xsmall">Summary</Typography>
                    <br/>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CreditDebitTable />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CreditDebitBarChart />
                    </Grid>
                </Grid>
                <br/>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.reportSubtitle} variant="subtitle2" level="4" margin="xsmall">Credit Analysis</Typography>
                    <br/>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CreditAnalysisByCategory />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CreditAnalysisByParty />
                    </Grid>
                </Grid>

                <br/>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.reportSubtitle} variant="subtitle2" level="4" margin="xsmall">Debit Analysis</Typography>
                    <br />
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <DebitAnalysisByCategory />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DebitAnalysisByParty />
                    </Grid>
                </Grid>
                <br />
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.reportSubtitle} variant="subtitle2" level="4" margin="xsmall">Statement</Typography>
                    <br />
                    <BankStatement />
                </Grid>
                    <br/>
                    <Link to="/help">
                        <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })} color="primary" startIcon={<PersonAddIcon />}>
                            Let's Connect
                        </Button>
                    </Link>
                </Paper>
            </Grid>

        </Grid>
        <Footer />
    </Box >
}

export default Home;