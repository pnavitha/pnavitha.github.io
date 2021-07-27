import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InfoIcon from '@material-ui/icons/Info';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Link
} from "react-router-dom";
import {
    Typography,
    Grid,
    Button,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    Card: {
        padding: '8%',
        width: '130px',
        height: '130px',
    }
});

const MoneyInformation = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={4}>
                <br />
                <Grid container direction='column'>
                    <Typography variant="subtitle1">Our other products</Typography>
                    <br />
                    <br />
                    <Typography variant="h1">We are going an Extra Mile For YOU!</Typography>
                    <br />
                    <Typography variant="body1">A finance wellness is the combination of savings, investments, good loans, growing business and financial awareness. We aggregare as much information to make your finance to grow and you to prosper.</Typography>
                    <br />
                </Grid>
            </Grid>
            <Link to="/fixed-deposit-interest-rates" style={{ textDecoration: 'none' }}>
                <Paper square elevation={2} className={classes.Card}>
                    <Typography variant="subtitle1" color='primary'>Fixed Deposits</Typography>
                    <br />
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_fixed_deposit.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="25%" />
                        <br />
                        <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="secondary" startIcon={<InfoIcon />}>
                            Know more
                        </Button>
                    </Grid>
                </Paper>
                <br/>
            </Link>
            <Link to="/savings-account" style={{ textDecoration: 'none' }}>
                <Paper square elevation={2} className={classes.Card}>
                    <Typography variant="subtitle1" color='primary'>Savings Account</Typography>
                    <br />
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_savings.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="25%" />
                        <br />
                        <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="secondary" startIcon={<InfoIcon />}>
                            Know more
                        </Button>
                    </Grid>
                </Paper>
                <br/>
            </Link>
            <Link to="/msme-loan" style={{ textDecoration: 'none' }}>
                <Paper square elevation={2} className={classes.Card}>
                    <Typography variant="subtitle1" color='primary'>MSME Loans</Typography>
                    <br />
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_business_loan.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="25%" />
                        <br />
                        <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="secondary" startIcon={<InfoIcon />}>
                            Know more
                        </Button>
                    </Grid>
                </Paper>
                <br/>
            </Link>
            <Link to="/fuel-prices-in-india" style={{ textDecoration: 'none' }}>
                <Paper square elevation={2} className={classes.Card}>
                    <Typography variant="subtitle1" color='primary'>Fuel Prices</Typography>
                    <br />
                    <Grid container direction='column' justify="space-between" alignItems='center'>
                        <img src={require("../images/icon_fuel.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="20%" />
                        <br />
                        <Button size="small" onClick={() => dispatch({ type: "NAVIGATE_TO_ABOUT_PAGE" })} color="secondary" startIcon={<InfoIcon />}>
                            Know more
                        </Button>
                    </Grid>
                </Paper>
                <br/>
            </Link>
        </Grid>
        <br/>
    </Paper>
}

export default MoneyInformation;