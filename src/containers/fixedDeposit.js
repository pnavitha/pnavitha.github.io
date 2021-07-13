import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import {
    Link
} from "react-router-dom";
import { AppContext } from '../context/app-context/app-context-provider';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import {
    Grid,
    Box,
    Button,
    InputLabel,
    Paper,
    FormControl,
    Input,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 50,
        height: 'auto',
        overflow: 'scroll',
        direction: 'column',
        display: 'flex',
        flexDirection: 'column',
    },
    submitDetails: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'inline-block',
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#f38b01',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '1px 1px #c3c3c3',
        '&:hover': {
            background: '#d38b01',
            color: '#ffffff',
        },
    },
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 350,
    },
    whiteWrapper: {
        background: '#fff',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    greyWrapper: {
        background: '#f0f1f2',
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
});

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#000',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#9cc7f4'
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#cde3f9'
        },
    },
}))(TableRow);


const upto4monthsColumns = [
    { id: 'bankName', label: 'Bank Name', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '29', label: '15 to 29 days', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '45', label: '30 to 45 days', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '90', label: '46 to 90 days', minWidth: 20, maxWidth: 20, align: 'left' },
];

const upto9monthsColumns = [
    { id: 'bankName', label: 'Bank Name', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '120', label: '91 to 120 days', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '180', label: '121 to 180 Days', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '270', label: '181 to 270 days', minWidth: 20, maxWidth: 20, align: 'left' },
];

const upto2yearsColumns = [
    { id: 'bankName', label: 'Bank Name', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '364', label: '271 days & above but less than 1 year', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '365', label: '1 year', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '730', label: 'Above 1 year up to 2 Years', minWidth: 20, maxWidth: 20, align: 'left' },
];

const upto10yearsColumns = [
    { id: 'bankName', label: 'Bank Name', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '1095', label: 'Above 2 Years and upto 3 Years', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '1825', label: 'Above 3 Years and upto 5 Years', minWidth: 20, maxWidth: 20, align: 'left' },
    { id: '3650', label: 'Above 5 Years and upto 10 Years', minWidth: 20, maxWidth: 20, align: 'left' },
];

const FixedDeposit = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    if(!state.bankwiseData || state.bankwiseData == {})
        dispatch({ type: "UPDATE_BANKWISE_FIXED_DEPOSIT"});

    return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Interest rate on your fixed deposit</Typography>
                    <br />
                    <Typography variant="h1">Check best interest rates on your fixed deposit.</Typography>
                    <br />
                    <Box fontWeight="bold" color="#0975e1" >
                        Provide the duration for which you can fix the amount. 
                    </Box>
                    <Typography variant="body1">Duration selected must be less than or equal to 10 years. </Typography>
                    <br />
                    <Grid container direction='row' justify="flex-start" alignItems="flex-end" spacing={2}>
                        <Grid item>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel >Years</InputLabel>
                                <Input
                                    type="number"
                                    value={state.fixedDepositDuration ? state.fixedDepositDuration.years : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_FIXED_DEPOSIT_YEAR", payload: event.target.value })} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel>Months</InputLabel>
                                <Input
                                    type="number"
                                    value={state.fixedDepositDuration ? state.fixedDepositDuration.months : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_FIXED_DEPOSIT_MONTH", payload: event.target.value })} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel>Days</InputLabel>
                                <Input
                                    type="number"
                                    value={state.fixedDepositDuration ? state.fixedDepositDuration.days : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_FIXED_DEPOSIT_DAY", payload: event.target.value })} />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Button variant="contained" onClick={() => dispatch({ type: "CALCULATE_FIXED_DEPOSIT_RATES" })} color="secondary">
                        FIND BEST INTEREST RATES
                    </Button>
                    <Typography variant="body1">** Interest rates are for amount below 2 Cr for regular customer.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {state.fixedDepositRatesResult ?
                        <TableContainer className={classes.container}>
                            <Table className={classes.table} stickyHeader size="small">
                                <TableHead>
                                    <TableRow className={classes.tableHead}>
                                        <StyledTableCell key="bankName">
                                            Bank Name
                                        </StyledTableCell>
                                        <StyledTableCell key="interestRate" >
                                            Rate of Interest for selected duration
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {state.fixedDepositRatesResult.map((bank) =>
                                        <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                            <TableCell key="bankName" >
                                                <Typography variant="body1" margin="xsmall">{bank[0]}</Typography>
                                            </TableCell>
                                            <TableCell key="interestRate">
                                                <Typography variant="body1" margin="xsmall">{bank[1]}</Typography>
                                            </TableCell>
                                        </StyledTableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        : <img src={require("../images/fixed_deposit_best_offer.svg")} alt="" width="100%" />}
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Banks fixed deposit interest rates</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Fixed deposit upto 3 months.</Typography>
                    <br />
                    <Typography variant="body1">As a business person or salaried person, we always want our money to earn for us. Banks provide fixed deposit for as low as 7 days. Check the current interest rates offered by banks for small durations fixed deposits.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {upto4monthsColumns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.bankwiseData && Object.entries(state.bankwiseData).map(([bankName, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                {upto4monthsColumns.map((column) => {
                                            const value = column.id == "bankName" ? bankName : data[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Typography variant="body1" margin="xsmall">{value}</Typography>
                                                </TableCell>
                                            );
                                        })}
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Banks fixed deposit interest rates</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Fixed deposit 3 months onwards till 9 month.</Typography>
                    <br />
                    <Typography variant="body1">Fixed deposit interest rates changes with the duration. Checking FD rates regularly with different banks will provide you the option to avail better returns.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {upto9monthsColumns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.bankwiseData && Object.entries(state.bankwiseData).map(([bankName, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                {upto9monthsColumns.map((column) => {
                                            const value = column.id == "bankName" ? bankName : data[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Typography variant="body1" margin="xsmall">{value}</Typography>
                                                </TableCell>
                                            );
                                        })}
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Banks fixed deposit interest rates</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Fixed deposit 9 months onwards till 2 years.</Typography>
                    <br />
                    <Typography variant="body1">Fixed deposit gives the security of assured returns. Fixed deposit is a risk-free investment. You only need to check which bank is providing you the best FD interest rates.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {upto2yearsColumns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.bankwiseData && Object.entries(state.bankwiseData).map(([bankName, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                {upto2yearsColumns.map((column) => {
                                            const value = column.id == "bankName" ? bankName : data[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Typography variant="body1" margin="xsmall">{value}</Typography>
                                                </TableCell>
                                            );
                                        })}
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
                 <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Banks fixed deposit interest rates</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Fixed deposit 2 years onwards till 10 years.</Typography>
                    <br />
                    <Typography variant="body1">Fixed deposits are with awesome product provided by banks. There are many benefits of FDs, like loan on FD, assured returns and even pre-maturity use of FD. You can apply to break your fixed deposit by deducting nominal charges by bank.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {upto10yearsColumns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.bankwiseData && Object.entries(state.bankwiseData).map(([bankName, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                {upto10yearsColumns.map((column) => {
                                            const value = column.id == "bankName" ? bankName : data[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Typography variant="body1" margin="xsmall">{value}</Typography>
                                                </TableCell>
                                            );
                                        })}
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Banks' links</Typography>
                    <br />
                    <br />
                    <Typography variant="h1">Bankwise fixed deposit (FD) interest rates</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container direction="column">
                        <Typography variant="subtitle1">Public Banks' interest rates</Typography>
                        <br />
                        {Object.entries(state.fixedDepositInterestLinks.publicBanks).map(([bankName, link]) =>
                            <Link to={{ pathname: link }} target="_blank" >
                                <Button color="primary" style={{textTransform: 'none'}}>
                                    {bankName}
                                </Button> 
                            </Link> 
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container direction="column">
                        <Typography variant="subtitle1">Private Banks' interest rates</Typography>
                        <br />
                        {Object.entries(state.fixedDepositInterestLinks.privateBanks).map(([bankName, link]) =>
                            <Link to={{ pathname: link }} target="_blank" >
                                <Button color="primary" style={{textTransform: 'none'}}>
                                    {bankName}
                                </Button> 
                            </Link> 
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item>
                    <Typography variant="subtitle1">Frequently asked questions</Typography>
                    <br />
                    <br />
                    {state.frequentlyAskedQuestions.fixedDeposit.map((faq) => {
                        return <Box>
                            <Typography variant="subtitle1">{faq.question}</Typography>
                            <br />
                            <Typography variant="body1">{faq.answer}</Typography>
                            <br />
                        </Box>
                    }
                    )}
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Link to="/" >
                <Button color="primary" startIcon={<HomeIcon />}>
                    GOTO HOME PAGE
                </Button>
            </Link>
            <br />
            <Link to="/help">
                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })} color="primary" startIcon={<PersonAddIcon />}>
                    Let's Connect
                </Button>
            </Link>
        </Paper>
        <Footer />
    </Box>
}

export default FixedDeposit;