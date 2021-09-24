import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Paper,
    Button,

} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    JoinClubWrapper: {
        background: '#fff',
        height: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        display: 'inline-block',
        padding: '4px 4px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '2px 2px #c3c3c3',
        '&:hover': {
            background: '#25252B',
        },
    },
});

const ContentHeader = () => {
    const classes = useStyles();

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h1">About Us.</Typography>
                <br />
                <Typography variant="body1">"[Some content]"</Typography>
                <br />
                <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary" >
                            Know More
                        </Button>
                    </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/aboutus.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
            </Grid>
        </Grid>
    </Paper>
}

export default ContentHeader;