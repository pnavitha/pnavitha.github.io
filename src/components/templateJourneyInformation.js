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
        <Grid item xs={12} sm={3}>
        <Grid container direction="column" spacing={0}>
                <Paper square elevation={2} className={classes.Card}>
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <Typography variant="subtitle1" color='primary'>Interact with a PM</Typography>
                        <Typography variant="body1">Reach out to us and we will set up a conversation on the product case you have been given to solve for your dream job.</Typography>
                        <br />
                        <img src={require("../images/find_mentor.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                    </Grid>
                </Paper>
            </Grid>
            
       </Grid>
       <Grid item xs={12} sm={3}>
        <Grid container direction="column" spacing={0}>
            <br/>
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Get feedback on case study/PRD</Typography>
                    <Typography variant="body1">Discuss the case study with our experienced PM’s and take their feedback to make it 10x better.</Typography>
                    <br />
                    <img src={require("../images/aboutus.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
       </Grid>
       </Grid>
       <Grid item xs={12} sm={3}>
       <Grid container direction="column" spacing={0}>
       <br/>
       <br/>
       <br />
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Get a personalized template</Typography>
                    <Typography variant="body1">Get a personalized template to best display the creative solutions you discussed with our mentors.</Typography>
                    <br />
                    <img src={require("../images/msme_loans.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                </Grid>
            </Paper>
        </Grid>
       </Grid>
       <Grid item xs={12} sm={3}>
       <Grid container direction="column" spacing={0}>
       <br/>
       <br/>
       <br/>
       <br />

            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Final result</Typography>
                    <Typography variant="body1">Clear the case study round of your dream job and voila you are 90% there!</Typography>
                    <br />
                    <img src={require("../images/work_together.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />

                </Grid>
            </Paper>
        </Grid>
       </Grid>
       </Grid>
    </Paper>
}

export default TemplateJourneyInformation;