import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Box } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#25252B',
        padding: '20px',
        color: '#fff',
        marginTop: '50px'
    }
});

const Footer = () => {
    const classes = useStyles();

    return <Box className={classes.footer}>
        <Typography variant="body1">Copyright 2021 Peso. All rights reserved.</Typography>    
        </Box>
}

export default Footer;