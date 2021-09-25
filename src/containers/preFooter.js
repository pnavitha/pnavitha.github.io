import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Grid,
    Paper,
    Button,
    Divider
} from '@material-ui/core';
import { Link } from "react-router-dom";

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

const PreFooter = () => {
    const classes = useStyles();

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={6}>
                <Grid container direction='column'>
                    <Typography variant="h1">We know our Unconventional Methods have got you thinking!.</Typography>
                    <br />
                    <Typography variant="body1">Get complete clarity about the Product Management Mentorship Program.</Typography>
                    <br />
                    <Button variant="contained" color="secondary" >
                        Talk to us Now!
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