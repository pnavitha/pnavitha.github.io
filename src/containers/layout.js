import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import {  
    Grid,
    Typography,
    Button
  } from '@material-ui/core'
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './aboutUs';
import MsmeLoans from './msmeLoans';
import Home from './home';
import { AppContext } from '../context/app-context/app-context-provider';
import { makeStyles } from '@material-ui/core/styles';
import Help from './help';
import SavingsAccount from './savingsAccount';
import FixedDeposit from './fixedDeposit';
import FuelPrices from './fuelPrices';
import BankStatementAnalyzer from './bankStatementAnalyzer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    AppHeader: {
        backgroundColor: '#fff',
    },
    helpSection: {
        paddingTop: '5px'
      }  
  }));

const scrollTo = (sectionId) => {
    console.log("abt to scroll to: ",sectionId);
    var element = document.getElementById(sectionId);
    element.scrollIntoView();
}

export default function Layout() {
    const [state, dispatch] = useContext(AppContext);
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense" className={classes.AppHeader}>
                    <Grid container direction="row" justify="space-between" >
                        <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color:'#0975e1'}}>
                        <Grid container direction="row">
                            <Typography variant="subtitle1">Simple Solution for Aspiring Product Managers</Typography>
                        </Grid>
                        </Link>
                        </Grid>
                        <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignContent="center"
                            alignItems="center"
                            spacing={1}
                            className={classes.helpSection}
                            >
                                <Grid item>
                                    <Button size='small' color='secondary' onClick={() => scrollTo('SectionTwo')}>About Us</Button>
                                </Grid>
                                <Grid item>
                                    <Button size='small' color='secondary' onClick={() => scrollTo('SectionOne')}>Find A mentor</Button>
                                </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/msme-loan">
                    <MsmeLoans />
                </Route>
                <Route path="/savings-account">
                    <SavingsAccount />
                </Route>
                <Route path="/fixed-deposit-interest-rates">
                    <FixedDeposit />
                </Route>
                <Route path="/fuel-prices-in-india">
                    <FuelPrices />
                </Route>
                <Route path="/bank-statement-rating">
                    <BankStatementAnalyzer />
                </Route>
            </Switch>
        </div>
    );
}