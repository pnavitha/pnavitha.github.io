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
import MoneyInformation from '../components/moneyInformation';
import NewsletterSignup from '../components/newsletterSignup';
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';

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
    const [state, dispatch] = useContext(AppContext);
    const history = useHistory();

    return <Box className={classes.contentAreaWrapper}>
        <Grid container direction="column" alignItems="stretch" justify="center">
            <Grid item>
              <ContentHeader />  
            </Grid>
            <Grid item>
                <NewsletterSignup />
            </Grid>
            <Grid item>
                <MoneyInformation />
            </Grid>
        </Grid>
        <Footer />
    </Box >
}

export default Home;