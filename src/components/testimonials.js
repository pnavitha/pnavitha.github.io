import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import { 
    Typography,
    Grid,
    Paper,
    Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        padding: '4px 4px',
    },
    LinkedInButton: {
        background: '#0975e1',
        color: '#fff',
    }
});

const Testimonials = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper id="SectionTwo" square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <br />
                    <Grid container direction='column'>
                    <br/>
                    <Typography variant="h1">Next Inning is changing lives!</Typography>
                <br/>
                <Typography variant="subtitle1">Complete interview support is all you need.</Typography>
                <br/>
                <Typography variant="body1">It’s amazing how much attention the mentor gives to help cracking the PM interview. I also loved the support I received from myNextInning team in interview preparation, profile building and applications. Job switching is very tiring process but thanks to myNextInning team, I always had a mentor to solve my doubts and keep my motivation up throughout the process.</Typography>
                <br/>
                <Typography variant="subtitle1">- Saloni</Typography>
                <Typography variant="body1">Dublin, Ireland</Typography>
                <br/>
                <br/>
                <Grid container direction='row' justify="flex-start" alignItems="flex-end" spacing={1}>
                        <Grid item>
                            <Button startIcon={<LinkedInIcon/>} onClick={() => {
                                    window.open('https://www.linkedin.com/in/saloni-suman/', "_blank")
                                    dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                                }
                             } variant="contained" className={classes.LinkedInButton} >
                            </Button>
                        </Grid>
                    </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={require("../images/testimony_saloni.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid>
</Grid>
</Paper>
}

export default Testimonials;