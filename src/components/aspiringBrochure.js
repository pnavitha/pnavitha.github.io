import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Typography,
    Grid,
    Button,
    Paper,
} from '@material-ui/core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#ffda61',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    Card: {
        padding: '8%',
        // width: '150px',
        // height: '180px',
    }
});

const AspiringBrochure = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Typography variant="h1">More details for an Aspiring Product Manager Program</Typography>
        <br />
        <Grid container direction="row" justify='center' spacing={2}>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/Aspiring/1.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid> 
            <Grid item xs={12} sm={6}>
                <img src={require("../images/Aspiring/2.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid> 
            <Grid item xs={12} sm={6}>
                <img src={require("../images/Aspiring/3.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid> 
            <Grid item xs={12} sm={6}>
                <img src={require("../images/Aspiring/4.png")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid> 
       </Grid>
       <br />
       <Button 
            variant="contained" 
            style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
            href={require("../pdfs/AspiringProductManagerBrochure.pdf")} 
            download="AspiringProductManagerBrochure"
            startIcon={<FileDownloadIcon />}>
                Download This Brochure
        </Button>
    </Paper>
}

export default AspiringBrochure;