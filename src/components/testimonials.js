import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import { 
    Typography,
    Grid,
    Paper,
    Button,
    Divider
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#fff',
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

    return <Paper square className={classes.ContentWrapper}>
                    <Typography variant="h1">Next Inning is changing lives!</Typography>
                    <br/>
        <br/>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={5}>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <img src={require("../images/testimony_saloni.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="70%" />
                    </Grid>
                    <br />
                    <Grid item>
                    <Typography variant="subtitle1">Complete interview support is all you need.</Typography>
                <br/>
                <Typography variant="body1">It’s amazing how much attention the mentor gives to help cracking the PM interview. I also loved the support I received from myNextInning team in interview preparation, profile building and applications. Job switching is tiring process but thanks to myNextInning, I always had a mentor to solve my doubts.</Typography>
                <br/>
                <Typography variant="subtitle1">- Saloni</Typography>
                <Typography variant="body1">Dublin, Ireland</Typography>
                <br/>
                <Button startIcon={<LinkedInIcon/>} onClick={() => {
                                    window.open('https://www.linkedin.com/in/saloni-suman/', "_blank")
                                    dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                                }
                             } variant="contained" className={classes.LinkedInButton} >
                            </Button>
                </Grid>
                
                </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={5}>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <img src={require("../images/Rohit.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="73%" />
                    </Grid>
                    <br />
                    <Grid item>
                    <Typography variant="subtitle1">Great discussion-driven interactive sessions.</Typography>
                <br/>
                <Typography variant="body1">The Next Innings Cohort is great. The program will teach you in details about Product Management. The after support sessions from the mentors during the phase of interview is great. Thank you next innings for all the support I have received from you.</Typography>
                <br/>
                <Typography variant="subtitle1">- Rohit</Typography>
                <Typography variant="body1">Bengalore, India</Typography>
                <br/>

                <Button startIcon={<LinkedInIcon/>} onClick={() => {
                                    window.open('https://www.linkedin.com/in/rohitry/', "_blank")
                                    dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                                }
                             } variant="contained" className={classes.LinkedInButton} >
                            </Button>
                            </Grid>
                            </Grid>
            </Grid>
        </Grid>
</Paper>
}

export default Testimonials;