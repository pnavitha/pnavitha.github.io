import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import {
    Link
} from "react-router-dom";
import { AppContext } from '../context/app-context/app-context-provider';

const useStyles = makeStyles({
    sidePanelWrapper: {
        position: 'fixed',
        top: 48,
        bottom: 0,
        minWidth: '13%',
        maxWidth: '13%',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: '5px',
    },
});

const SidePanel = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    return <div>
        <Box borderRight={1} className={classes.sidePanelWrapper}>
            <Grid
                container
                direction="column"
                justify="space-evenly"
            >
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Link to="/" style={{ textDecoration: state.activeMenu === 'home' ? 'underline' : 'none' }}>
                                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HOME_PAGE" })} color="primary" startIcon={<HomeIcon />}>
                                    {<Hidden xsDown>Home</Hidden>}
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/about" style={{ textDecoration: state.activeMenu === 'about' ? 'underline' : 'none' }}>
                                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    {<Hidden xsDown>About Us</Hidden>}
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/help" style={{ textDecoration: state.activeMenu === 'contactus' ? 'underline' : 'none' }}>
                                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })} color="primary" startIcon={<ContactSupportIcon />}>
                                    {<Hidden xsDown>HELP</Hidden>}
                                </Button>
                            </Link>
                        </Grid>
                        <hr />
                        { state.profile && state.profile != {} &&
                            <Grid item>
                            <Link to="/my-reports" style={{ textDecoration: state.activeMenu === 'about' ? 'underline' : 'none' }}>
                                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_MY_REPORTS_PAGE" })} color="primary" startIcon={<InfoIcon />}>
                                    {<Hidden xsDown>MY REPORTS</Hidden>}
                                </Button>
                            </Link>
                        </Grid>
                        }
                        { state.profile && state.profile != {} && 
                            <Grid item>
                            <Button onClick={() => dispatch({ type: "LOGOUT" })} color="primary" startIcon={<ContactSupportIcon />}>
                                {<Hidden xsDown>LOGOUT</Hidden>}
                            </Button>
                    </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </div>
}

export default SidePanel;