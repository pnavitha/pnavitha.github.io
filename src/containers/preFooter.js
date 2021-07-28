import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Grid,
    Paper,
    Button,
    Divider
} from '@material-ui/core';
import { AppContext } from '../context/app-context/app-context-provider';
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
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={6}>
                <Grid container direction='column'>
                    <Typography variant="h1">Analyse your Financial Documents.</Typography>
                    <br />
                    <Link to="/bank-statement-rating" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" >
                            Get Bank Statement Rating
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={5}>
                <Grid container direction='column'>
                    <Typography variant="h1">Know more about FinDash.</Typography>
                    <br />
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" >
                            About Us
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
}

export default PreFooter;