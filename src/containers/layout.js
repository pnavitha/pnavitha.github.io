import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    subTitle: {
        flexGrow: 1,
        marginLeft: '6px',
        marginTop: '9px'
    },
    AppHeader: {
        backgroundColor: '#fff',
    },
    headerWrapper: {
        padding: '10px',
        backgroundColor: '#fff',
    },
    register: {
        fontSize: 'x-small'
      },
      helpSection: {
          paddingRight: '20px'
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
                    <Grid container direction="row" className={classes.headerWrapper} justify="space-between" >
                        <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color:'#0975e1'}}>
                        <Typography variant="h5" className={classes.title}>
                            FinDash
                        </Typography>
                        </Link>
                        </Grid>
                        <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            className={classes.helpSection}
                            >
                                <Link to="/help">
                                    <IconButton size='small' color='primary' onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })}><PhoneIcon /></IconButton>
                                </Link>
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
                <Route path="/msme-loans">
                    <MsmeLoans />
                </Route>
            </Switch>
        </div>
    );
}