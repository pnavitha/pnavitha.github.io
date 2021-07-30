import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './aboutUs';
import MsmeLoans from './msmeLoans';
import Home from './home';
import { AppContext } from '../context/app-context/app-context-provider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Help from './help';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
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
                        <img src={require("../images/FinDash_logo100x40.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers"/>
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
                            className={classes.helpSection}
                            >
                                <Link to="/help">
                                    <IconButton size='small' color='primary' onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })}><EmailIcon /></IconButton>
                                </Link>
                                <Link to="/help">
                                    <IconButton size='small' style={{ color: '#00e600' }} onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })}><WhatsAppIcon /></IconButton>
                                </Link>
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