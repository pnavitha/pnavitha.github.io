import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import Footer from '../components/footer';
import ContentHeader from '../components/contentHeader';
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 48,
        left: '12.8%',
        background: '#f2f3f7',
        padding: '16px',
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
                <Typography variant="subtitle1" level="4" margin="xsmall">Demo Report...</Typography>

                    <Grid container direction="row" justify="center">

                        <Grid item xs={12} sm={6}>
                            <br />
                            {/* <Doughnut data={state.demoReport.expenseData} /> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <Doughnut data={state.demoReport.expenseData} /> */}
                            {/* <img src={require("../images/svg_childrenPlaying.svg")} alt="simple solution club how to start financial education to my kids and talk about money earning, spending, saving, and investments" width="100%" height="100rem" /> */}
                        </Grid>
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