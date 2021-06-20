import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SidePanel from './sidePanel';
import {
    Link
} from "react-router-dom";
import {
    Switch,
    Route
} from "react-router-dom";
import AboutUs from './aboutUs';
import Home from './home';
import Login from '../components/login';
import Register from '../components/register';
import { AppContext } from '../context/app-context/app-context-provider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Help from './help';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
    headerWrapper: {
        padding: '10px'
    },
    ExtensionHeader: {
        backgroundColor: '#282c34',
        height: '55px',
        textAlign: 'end',
        padding: '4px',
        width: '100%',
        ['@media (max-width: 1224px)']: {
          width: '97.7%'
        },
    },
    register: {
        fontSize: 'x-small'
      },
  }));

export default function Layout() {
    const [state, dispatch] = useContext(AppContext);
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Grid container direction="row" className={classes.headerWrapper} justify="space-between" >
                        <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                        <Typography variant="h5" className={classes.title}>
                            Paiso
                        </Typography>
                        </Link>
                        </Grid>
                        <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            >
                                <Link to="/help">
                                    <IconButton size='small' color='secondary' onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })}><PhoneIcon /></IconButton>
                                </Link>
                                <Link to="/help">
                                    <IconButton size='small' color='secondary' style={{ color: '#00e600' }} onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })}><WhatsAppIcon /></IconButton>
                                </Link>
                        {/* {(!state.profile || state.profile == {}) ? <Box>
                            <Link to="/login">
                            <Button color="secondary"  className={classes.register} onClick={() => dispatch({ type: "NAVIGATE_TO_LOGIN_PAGE"})}>
                                Login
                            </Button>
                            </Link>
                            /
                            <Link to="/register">
                            <Button size="small" color="secondary" className={classes.register} onClick={() => dispatch({ type: "NAVIGATE_TO_REGISTER_PAGE"})}>
                                Register
                            </Button>
                            </Link>
                        </Box> : 
                        <IconButton size='small' color='secondary'><AccountCircleIcon /></IconButton>
                        } */}
                        </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            </div>
            {/* <SidePanel /> */}
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
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </div>
    );
}