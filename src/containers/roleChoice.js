import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import {
    Typography,
    Grid,
    Paper,
    Button,
    Divider
} from '@material-ui/core';
import { Link } from "react-router-dom";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        padding: '4px 4px',
    },
});

const RoleChoice = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={5}>
                <Grid container direction='column'>
                    <Typography variant="h1">I'm an Aspiring Product Manager.</Typography>
                    <br />
                    <Typography variant="body1">The Product Management Mentorship Program with 1 year Interview Support.</Typography>
                    <br />
                    <Link to="/aspiring-product-manager" style={{ textDecoration: 'none' }}>
                        <Button startIcon={<SearchIcon/>} variant="contained" color="secondary" >
                            Check Aspiring Product Manager Plans
                        </Button>
                    </Link>
                    <br />
                    <Button 
                        variant="contained" 
                        style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                        href={require("../pdfs/AspiringProductManagerBrochure.pdf")} 
                        download="AspiringProductManagerBrochure"
                        startIcon={<FileDownloadIcon />}>
                            Download Aspiring Product Manager Brochure
                    </Button>
                </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={5}>
                <Grid container direction='column'>
                    <Typography variant="h1">I'm an Associate Product Manager.</Typography>
                    <br />
                    <Typography variant="body1">The Product Management Mentorship Program with in-depth PM Concepts.</Typography>
                    <br />
                    <Link to="/associate-product-manager" style={{ textDecoration: 'none' }}>
                        <Button startIcon={<SearchIcon/>} variant="contained" color="secondary" >
                            Check Associate Product Manager Plans
                        </Button>
                    </Link>
                    <br />
                    <Button 
                        variant="contained" 
                        style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                        href={require("../pdfs/AssociateProductManagerBrochure.pdf")} 
                        download="AssociateProductManagerBrochure"
                        startIcon={<FileDownloadIcon />}>
                            Download Associate Product Manager Brochure
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
}

export default RoleChoice;