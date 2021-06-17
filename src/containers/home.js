import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import Footer from '../components/footer';
import Header from '../components/header';
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 48,
        left: '14%',
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
              <Header />  
            </Grid>
            <Grid item><br /></Grid>
            <Grid item>
                <Paper elevation={2} square className={classes.ContentWrapper}>
                    <Grid container direction="row" justify="center">
                        <Grid item xs={12} sm={8}>
                            <Typography variant="subtitle1" level="4" margin="xsmall">Special Offers...</Typography>
                            <br />
                            <Typography variant="body1">Currently, we are making our curriculum better and stocking offline games' accessories. We will start the next batch by May, 2021.</Typography>
                            <br />
                            <Typography variant="body1">Be in first 1,000 to register and get 70% discount.</Typography>
                            <Typography variant="body1">Be in next 1,000 to register and get 50% discount.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img src={require("../images/svg_childrenPlaying.svg")} alt="simple solution club how to start financial education to my kids and talk about money earning, spending, saving, and investments" width="100%" height="100rem" />
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