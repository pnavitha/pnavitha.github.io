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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
                    <Typography variant="h1">Are you an Aspiring Product Manager?</Typography>
                    <br />
                    <Link to="/aspiring-product-manager" style={{ textDecoration: 'none' }}>
                        <img src={require("../images/Aspiring/3.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
                        <br />
                    
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
            <Grid item xs={12} sm={4}>
                <Typography variant="h1">Try our next demo session..</Typography>
                <br />
                <img src={require("../images/demo.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="75%" />
                <br />
                <br />
                <Button startIcon={<WhatsAppIcon />} onClick={() => {
                            window.open('https://wa.me/+917093003840/?text=Hi,%20I%20want%20to%20register%20for%20upcoming%20demo%20session%20in%20Product%20Management.', "_blank");
                            dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                        }
                    } 
                    variant="contained" color="primary" >
                    Register Now!
                </Button>
            </Grid>
        </Grid>
    </Paper>
}

export default RoleChoice;