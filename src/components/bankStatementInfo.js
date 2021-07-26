import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const BankStatementInfo = () => {
    const classes = useStyles();

    return <Paper square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
                    <Grid container direction='column'>
                    <Typography variant="subtitle1">Increase your chances of getting loan next time.</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Improve your Financial Rating Today!</Typography>
                <br/>
                <Typography variant="body1">A good bank statement can increase your chances of getting loan by 95%. We make sure that your have the best bank statement when you apply for loan, the next time.</Typography>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/rocket.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
            </Grid>
</Grid>
</Paper>
}

export default BankStatementInfo;