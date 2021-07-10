import React, { useContext, useState } from 'react';
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
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    JoinClubWrapper: {
        background: '#fff',
        height: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        display: 'inline-block',
        padding: '4px 4px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '2px 2px #c3c3c3',
        '&:hover': {
            background: '#25252B',
        },
    },
});

const ContentHeader = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h1">The finance platform for a changing business world.</Typography>
                <br />
                <Typography variant="body1">We are the team who believes technology can help in your business money problems. We fasten the decision making time for borrower's loan applications in banks....</Typography>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Button onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                        Know more
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/aboutus.svg")} alt="" width="100%" />
            </Grid>
        </Grid>
    </Paper>
}

export default ContentHeader;