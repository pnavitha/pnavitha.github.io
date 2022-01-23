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
import AspiringProductManager from './aspiringProductManager';
import AssociateProductManager from './associateProductManager';
import { AppContext } from '../context/app-context/app-context-provider';
import { makeStyles } from '@material-ui/core/styles';
import Help from './help';
import BankStatementAnalyzer from './homeHeading';
import Home from './home';
import ProductCaseStudyTemplate from './productCaseStudy';

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
                    <Grid container direction="row" alignContent="center" justify="space-between" >
                        <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color:'#000080'}}>
                        <Typography variant="subtitle1">NextInning</Typography>
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
                                <Link to="/help" style={{ textDecoration: 'none', color:'#000080'}}>
                                    <Button size='small' >+91 7093003840</Button>
                                </Link>
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
                <Route exact path="/aspiring-product-manager">
                    <AspiringProductManager />
                </Route>
                <Route exact path="/product-case-study">
                    <ProductCaseStudyTemplate />
                </Route>
                <Route exact path="/associate-product-manager">
                    <AssociateProductManager />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/bank-statement-rating">
                    <BankStatementAnalyzer />
                </Route>
            </Switch>
        </div>
    );
}