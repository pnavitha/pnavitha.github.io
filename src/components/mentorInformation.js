import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InfoIcon from '@material-ui/icons/Info';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import {
    Typography,
    Grid,
    Button,
    Paper,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
        minHeight: '600px'
    },
    Card: {
        padding: '8%',
        width: '200px',
        height: '400px',
    },
    LinkedInButton: {
        background: '#0975e1',
        color: '#fff',
    }
});

const MentorInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Typography variant="h1">Meet our Rockstar Mentors</Typography>
        <br />
        <br />
        <Grid container direction="row" justify='center' spacing={2}>
        <Grid item xs={12} sm={4}>
            <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="flex-start" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Arpita Srivastava</Typography>
                    <Typography variant="body1">Loved by candidates for her way of explaining different concepts of Product Thinking and Management.</Typography>
                    <br />
                    <img src={require("../images/arpita.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                    <Button startIcon={<LinkedInIcon/>} onClick={() => {
                                    window.open('https://www.linkedin.com/in/arpita-srivastava-045a42a8/', "_blank")
                                    dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                                }
                             } variant="contained" className={classes.LinkedInButton} >
                            </Button>
                </Grid>
            </Paper>
       </Grid>
       <Grid item xs={12} sm={4}>
       <Paper square elevation={2} className={classes.Card}>
            <Grid container direction='column' justify="space-between" alignItems='center'>
                <Typography variant="subtitle1" color='primary'>Kushagra Mohan</Typography>
                <Typography variant="body1">A perfect mentor to learn Growth and Customers.</Typography>
                <br />
                <img src={require("../images/kushagra.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                <br/>
                <Button startIcon={<LinkedInIcon/>} onClick={() => {
                        window.open('https://www.linkedin.com/in/kushagra-m-64206583/', "_blank")
                        dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                    }
                    } variant="contained" className={classes.LinkedInButton} >
                </Button>
            </Grid>
        </Paper>
       </Grid>
       <Grid item xs={12} sm={4}>
        <Paper square elevation={2} className={classes.Card}>
                <Grid container direction='column' justify="space-between" alignItems='center'>
                    <Typography variant="subtitle1" color='primary'>Pooshkar Rajiv</Typography>
                    <Typography variant="body1">Expert on how to win in competitive market</Typography>
                    <br />
                    <img src={require("../images/pooshkar.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                    <Button startIcon={<LinkedInIcon/>} onClick={() => {
                            window.open('https://www.linkedin.com/in/pooshkar-rajiv-b20328ba/', "_blank")
                            dispatch({ type: "BUTTON_CLICKED", payload: "CHECK_TESTIMONY_LINKEDIN" });
                        }
                        } variant="contained" className={classes.LinkedInButton} >
                    </Button>
                </Grid>
            </Paper>
       </Grid>
       </Grid>
    </Paper>
}

export default MentorInformation;