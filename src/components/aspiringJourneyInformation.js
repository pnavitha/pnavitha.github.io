import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Typography,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    Card: {
        padding: '8%',
        // width: '150px',
        // height: '180px',
    }
});

const AspiringJourneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Typography variant="h1">An Ideal Journey to Become an Awesome Product Manager with NextInning</Typography>
        <br />
        <Grid container direction="row" justify='center' spacing={2}>
        <Grid item xs={12} sm={2}>
        <Grid container direction="column" spacing={0}>
                <Paper square elevation={2} className={classes.Card}>
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <Typography variant="subtitle1" color='primary'>Interact with Mentor</Typography>
                        <Typography variant="body1">Book mentor's time and use free trial discussion</Typography>
                        <br />
                        <img src={require("../images/find_mentor.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                    </Grid>
                </Paper>
            </Grid>
            
       </Grid>
       <Grid item xs={12} sm={2}>
        <Grid container direction="column" spacing={0}>
            <br/>
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Get Career & Profile Feedback</Typography>
                    <Typography variant="body1">Analyze your Strengths and Weaknesses</Typography>
                    <br />
                    <img src={require("../images/aboutus.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
       </Grid>
       </Grid>
       <Grid item xs={12} sm={2}>
       <Grid container direction="column" spacing={0}>
       <br/>
       <br/>
       <br />
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Get Personalised Plan</Typography>
                    <Typography variant="body1">A Roadmap to become a Product Manager</Typography>
                    <br />
                    <img src={require("../images/msme_loans.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                </Grid>
            </Paper>
        </Grid>
       </Grid>
       <Grid item xs={12} sm={2}>
       <Grid container direction="column" spacing={0}>
       <br/>
       <br/>
       <br/>
       <br />

            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Execute Plan with Discussions</Typography>
                    <Typography variant="body1">You Follow the Roadmap and become Interview Ready</Typography>
                    <br />
                    <img src={require("../images/work_together.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
        </Grid>
       </Grid>
       <Grid item xs={12} sm={2}>
       <Grid container direction="column" spacing={0}>
       <br/>
       <br/>
       <br/>
       <br />
       <br/>
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Final Result, Smoother & Quicker</Typography>
                    <Typography variant="body1">Give the Interview and become a Product Manager!</Typography>
                    <br />
                    <img src={require("../images/rocket.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
        </Grid>
       </Grid>
       </Grid>
    </Paper>
}

export default AspiringJourneyInformation;