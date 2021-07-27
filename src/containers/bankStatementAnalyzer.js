import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  
    Grid,
    Box,
    InputLabel,
    Paper,
    TextField,
    FormControl,
    Input,
    IconButton,
    Typography,
    TableCell,
    TableRow,
    CircularProgress
  } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CreditDebitTable from '../components/creditDebitTable';
import CreditDebitBarChart from '../components/creditDebitBarChart';
import CreditAnalysisByParty from '../components/creditAnalysisByParty';
import CreditAnalysisByCategory from '../components/creditAnalysisByCategory';
import DebitAnalysisByParty from '../components/debitAnalysisByParty';
import DebitAnalysisByCategory from '../components/debitAnalysisByCategory';
import DetailedBankStatement from '../components/detailedBankStatement';
  
const useStyles = makeStyles({
    contentAreaWrapper: {
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
        boxShadow: '1px 1px #c3c3c3'
    },
    container: {
        maxHeight: 350,
    },
    bankPassword: {
        width: '100%'
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
    disabledButton: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'inline-block',
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#ffd092',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '1px 1px #c3c3c3',
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

    
const columns = [
    { id: 'LenderName', label: 'Lender Name', minWidth: 5, maxWidth: 5, align: 'left' },
    { id: 'interestRate', label: 'Interest Rates', minWidth: 20, maxWidth: 20, align: 'left' },
];


const BankStatementAnalyzer = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [visibility, setVisibility] = React.useState(false);

    const changeHandler = (event) => {
        if(event.target && event.target.files && event.target.files.length > 0) {
            getBase64(event.target.files[0], (result) => {
                result = result.replace('data:application/pdf;base64,', '');
                dispatch({ type: "UPLOAD_PDF_AND_ANALYZE", payload:  result})
           });
    
        }
    };
    
    const getBase64 = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Lenders Check Bank Statement to know your Credit Worthiness.</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Get your Bank Statement Rating to improve your loan eligibility.</Typography>
                    <br/>
                    <Typography variant="body1">Your bank-statement tells alot about you. With Statement Analyser Tool, analyze 1000+ transactions in just 20 seconds and understand what's lacking.</Typography>
                    <br/>
                    <FormControl className={classes.bankPassword}>
                        <InputLabel >Phone number*</InputLabel>
                        <Input
                            type="number"
                            value={state.newBankStatementForm ? state.newBankStatementForm.phoneNumber : ""}
                            onChange={(event) => dispatch({ type: "UPDATE_BANK_STATEMENT_PHONENUMBER", payload: event.target.value })} />
                    </FormControl>  
                    <Autocomplete
                        size='small'
                        fontSize='small'
                        options={state.bankNames}
                        value={state.selectedBankName}
                        value={state.newBankStatementForm ? state.newBankStatementForm.selectedBankName : ""}
                        onChange={(event, newValue) => dispatch({ type: "UPDATE_BANK_NAME", payload: newValue })}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Select Bank Name*" />}
                    />
                    <Grid container direction='row' justify="flex-start" alignItems="flex-end">
                        <Grid item xs={10} sm={10}>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel >Bank statement password (if present)</InputLabel>
                                <Input
                                    type={visibility ? "text" : "password"}
                                    value={state.newBankStatementForm ? state.newBankStatementForm.bankStatementPassword : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_BANK_STATEMENT_PASSWORD", payload: event.target.value })} />
                            </FormControl>  
                        </Grid>
                        <Grid item>
                            {visibility ?
                                <IconButton size='small' color="primary" onClick={() => setVisibility(false)}><VisibilityIcon /></IconButton> :
                                <IconButton size='small' onClick={() => setVisibility(true)}><VisibilityOffIcon /></IconButton>
                            }
                        </Grid>
                    </Grid>
                    <br />
                    <InputLabel 
                        disabled = {(!state.newBankStatementForm) || (state.newBankStatementForm && (state.newBankStatementForm.phoneNumber.length < 10 || !state.newBankStatementForm.selectedBankName || state.newBankStatementForm.inProgress))} 
                        classes={{ disabled: classes.disabledButton}} 
                        className={classes.submitDetails}>
                    <input 
                        style={{ display: 'none' }} 
                        accept="application/pdf" 
                        type="file" 
                        name="file" 
                        disabled = {(!state.newBankStatementForm) || (state.newBankStatementForm && (state.newBankStatementForm.phoneNumber.length < 10 || !state.newBankStatementForm.selectedBankName || state.newBankStatementForm.inProgress))} 
                        onChange={changeHandler}/>
                        {(state.newBankStatementForm && state.newBankStatementForm.inProgress) ?
                        <CircularProgress />
                        : "UPLOAD PDF & GET ANALYSIS" }
                    </InputLabel>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/msme_loans.svg")} alt="loans in india analyse loan documents required for loans bank statement rating analyser tool get loans quicker get loans HDFC ICICI SBI PSBLoansin59mins credit score low interest rates for loans in india business loans personal loans car loans home loan eligibility for loan documents for loan best loan offers" width="100%" />
                </Grid>
            </Grid>
        </Paper>
        {
            state.bankStatementAnalysis &&
            <Paper elevation={2} square className={classes.greyWrapper}>
                <Typography variant="subtitle1" level="4" margin="xsmall">Your bank statement analysis report</Typography>
                <br/>
                <Typography variant="body1">First filter of your loan application is your bank-statement. Similar report is used by banks and other similar lender to decide whether to give business loans or not. This report shows your eligibility for MSME business loan and credibility to repay the loan.</Typography>
                <br />
                <Grid container direction="column" justify="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="subtitle2" level="4" margin="xsmall">Summary</Typography>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CreditDebitTable />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CreditDebitBarChart />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="subtitle2" level="4" margin="xsmall">Credit Analysis</Typography>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CreditAnalysisByCategory />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CreditAnalysisByParty />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="subtitle2" level="4" margin="xsmall">Debit Analysis</Typography>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <DebitAnalysisByCategory />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DebitAnalysisByParty />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="subtitle2" level="4" margin="xsmall">Statement</Typography>
                        <br/>
                        <DetailedBankStatement />
                    </Grid>

                </Grid>
            </Paper>
        }
    </Box>
}
export default BankStatementAnalyzer;