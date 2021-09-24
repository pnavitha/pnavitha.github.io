import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Box } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        marginTop: '50px',
        padding: '10px',
        backgroundColor: "#424242",
        color: "#fff"
    }
});

const Footer = () => {
    const classes = useStyles();

    return <Box className={classes.footer}>
            <Typography variant="body1">Copyright 2021 Simple Solution Club. All rights reserved.</Typography>    
        </Box>
}

export default Footer;