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
import { Link } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
});

const PreFooter = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={6}>
                <Grid container direction='column'>
                    <Typography variant="h1">We know our Unconventional Methods have got you thinking!.</Typography>
                    <br />
                    <Typography variant="body1">Get complete clarity about the Product Management Mentorship Program.</Typography>
                    <br />
                    
                    <Button startIcon={<WhatsAppIcon />}  onClick={() => {
                                        window.open('https://wa.me/+917093003840/?text=Hi,%20I%20am%20looking%20for%20a%20switch%20in%20Product%20Management.', "_blank");
                                        dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                                    }
                                } variant="contained" color="primary" >
                        WhatsApp our Support Now!
                    </Button>
                </Grid>
            </Grid>
            {/* <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={5}>
                <Grid container direction='column'>
                    <Typography variant="h1">Contact Us if you are an Aspiring Product Manager.</Typography>
                    <br />
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary" >
                            Contact Us
                        </Button>
                    </Link>
                </Grid>
            </Grid> */}
        </Grid>
    </Paper>
}

export default PreFooter;