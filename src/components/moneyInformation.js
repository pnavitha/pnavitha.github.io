import React, { useContext, useState }  from 'react';
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
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    Card: {
        padding: '8%',
        width: '170px',
        height: '190px',
    }
});

const MoneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="center" spacing={8}>
                <Grid item>
                    <Link to="/fixed-deposit-interest-rates" style={{ textDecoration: 'none' }}>
                        <Paper square elevation={2} className={classes.Card}>
                            <Typography variant="subtitle1">Fixed Deposits</Typography>
                            <br />
                            <Typography variant="body1">A Secured return on your investment...</Typography>
                            <br />
                            <Grid container direction='column' justify="space-between" alignItems='center'>
                                <img src={require("../images/icon_fixed_deposit.svg")} alt="" width="20%" />
                                <br />
                                <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    Know more
                                </Button>
                            </Grid>
                            </Paper>
                    </Link>
                </Grid>
                <Grid item>
                <Link to="/savings-account" style={{ textDecoration: 'none' }}>
                    <Paper square elevation={2} className={classes.Card}>
                        <Typography variant="subtitle1">Savings Account</Typography>
                        <br />
                        <Typography variant="body1">Best ways to grow your saved money...</Typography>
                        <br/>
                        <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_savings.svg")} alt="" width="20%" />
                               <br/> 
                                <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    Know more
                                </Button>
                            </Grid>
                    </Paper>
                    </Link>
                </Grid>
                <Grid item>
                <Link to="/msme-loan" style={{ textDecoration: 'none' }}>
                    <Paper square elevation={2} className={classes.Card}>
                        <Typography variant="subtitle1">MSME Loans</Typography>
                        <br />
                        <Typography variant="body1">Micro, small, medium loans for working capital at best interest rates...</Typography>
                        <br/> 
                        <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_business_loan.svg")} alt="" width="20%" />
                               <br/> 
                                <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    Know more
                                </Button>
                            </Grid>
                    </Paper>
                    </Link>
                </Grid>
                <Grid item>
                <Link to="/fuel-prices-in-india" style={{ textDecoration: 'none' }}>
                    <Paper square elevation={2} className={classes.Card}>
                        <Typography variant="subtitle1">Fuel Prices</Typography>
                        <br />
                        <Typography variant="body1">Know latest fuel prices in your state...</Typography>
                        <br/> 
                        <Grid container direction='column' justify="space-between" alignItems='center'>
                            <img src={require("../images/icon_fuel.svg")} alt="" width="20%" />
                               <br/> 
                                <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    Know more
                                </Button>
                            </Grid>
                    </Paper>
                    </Link>
                </Grid>
            </Grid>
    </Paper>
}

export default MoneyInformation;