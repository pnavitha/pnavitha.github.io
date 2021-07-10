import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Box } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        marginTop: '50px',
        padding: '10px',
    }
});

const Footer = () => {
    const classes = useStyles();

    return <Box className={classes.footer}>
            <Typography variant="body1">Copyright 2021 FinDash. All rights reserved.</Typography>    
        </Box>
}

export default Footer;