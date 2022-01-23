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
        background: '#ffffff',
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

const TemplateJourneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper id="SectionTwo" square className={classes.ContentWrapper}>
        <Typography variant="h1">An Ideal Journey with NextInning</Typography>
        <br />
        <Grid container direction="row" justify='center' spacing={2}>
        <Grid item xs={12} sm={2}>
        <Grid container direction="column" spacing={0}>
                <Paper square elevation={2} className={classes.Card}>
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <Typography variant="subtitle1" color='primary'>Interact with a PM</Typography>
                        <Typography variant="body1">Book PM's time-slot and tell your requirement.</Typography>
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
                    <Typography variant="subtitle1" color='primary'>Get Feedback on case study or PRD</Typography>
                    <Typography variant="body1">Analyze your product casestudy or PRD</Typography>
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
                    <Typography variant="subtitle1" color='primary'>Improve your casestudy</Typography>
                    <Typography variant="body1">PMs feedback will help you in getting better at Case-study</Typography>
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
                    <Typography variant="subtitle1" color='primary'>Get Personalised Template</Typography>
                    <Typography variant="body1">An awesome template as per your requirment</Typography>
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
                    <Typography variant="body1">Use the template with your data, and Viola!</Typography>
                    <br />
                    <img src={require("../images/rocket.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
        </Grid>
       </Grid>
       </Grid>
    </Paper>
}

export default TemplateJourneyInformation;