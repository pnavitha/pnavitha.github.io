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
        width: '120px',
        height: '130px',
    }
});

const MoneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <br />
                    <Typography variant="h1">How it works!</Typography>
                    <br />
                    <Typography variant="body1">[Flow diagram].</Typography>
                    <br />
                </Grid>
            </Grid>
       </Grid>
        <br/>
    </Paper>
}

export default MoneyInformation;