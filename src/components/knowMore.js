import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";

import { 
    Typography,
    Grid,
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
    submitDetails: {
        padding: '4px 4px',
    },
});

const KnowMore = () => {
    const classes = useStyles();

    return <Paper square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
                    <Grid container direction='column'>
                <Typography variant="h1">How FinDash improves your chances for Loan Approval?</Typography>
                <br/>
                <Typography variant="body1">We are starting our journey for faster business loans for MSMEs. Check this demo video explaining our current platform and know our future plans.</Typography>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}> 
            <ReactPlayer
                width='100%'
                height='100%'
                controls
                url="https://www.youtube.com/watch?v=4iNApWtnOzY&t=1s"
            />
            </Grid> 
</Grid>
</Paper>
}

export default KnowMore;