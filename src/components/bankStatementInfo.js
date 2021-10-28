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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
});

const BankStatementInfo = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper id="SectionTwo" square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
                    <Grid container direction='column'>
                    <br/>
                    <Typography variant="h1">STOP Wasting your Money, Time & Efforts on Courses!</Typography>
                <br/>
                <Typography variant="body1">You've spent your entire life in school, college, and taking several courses. You must have realised until now that Education is Great but NOTHING BEATS EXPERIENCE.</Typography>
                <br/>
                <br/>
                <Grid container direction='row' justify="flex-start" alignItems="flex-end" spacing={1}>
                        <Grid item>
                            <Button startIcon={<SearchIcon/>} onClick={() => {
                                    window.open('https://calendly.com/mohansoe/next-innings-let-us-take-the-plunge-together?month=2021-09', "_blank")
                                    dispatch({ type: "BUTTON_CLICKED", payload: "FREE_MENTORSHIP" });
                                }
                             } variant="contained" color="secondary" >
                                Get Free Mentorship Today!
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button startIcon={<WhatsAppIcon />}  onClick={() => {
                                        window.open('https://wa.me/+919535115847/?text=Hi,%20I%20am%20looking%20for%20a%20switch%20in%20Product%20Management.', "_blank");
                                        dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                                    }
                                } 
                                variant="contained" color="primary" >
                                WhatsApp the Mentor Now!
                            </Button>
                        </Grid>
                    </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/win.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid>
</Grid>
</Paper>
}

export default BankStatementInfo;