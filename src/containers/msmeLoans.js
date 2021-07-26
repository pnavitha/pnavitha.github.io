import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import {
    Link
} from "react-router-dom";
import { AppContext } from '../context/app-context/app-context-provider';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  
    Grid,
    Box,
    Button,
    InputLabel,
    Paper,
    TextField,
    FormControl,
    Input,
    IconButton,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress
  } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ContactSupportOutlined } from '@material-ui/icons';
import CreditDebitTable from '../components/creditDebitTable';
import CreditDebitBarChart from '../components/creditDebitBarChart';
import CreditAnalysisByParty from '../components/creditAnalysisByParty';
import CreditAnalysisByCategory from '../components/creditAnalysisByCategory';
import DebitAnalysisByParty from '../components/debitAnalysisByParty';
import DebitAnalysisByCategory from '../components/debitAnalysisByCategory';
import DetailedBankStatement from '../components/detailedBankStatement';
  
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


const MsmeLoans = () => {
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
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Check your credibility for MSME loans</Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1">Stay ahead using bank statement analysis.</Typography>
                    <br/>
                    <Typography variant="body1">Your bank-statement tells alot about you. Banks use your bank-statement to check your credibility.</Typography>
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
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Lenderwise MSME loan interest rates</Typography>
                    <br/>
                    <br />
                    <Typography variant="body1">Many banks and NBFCs provide MSME loans to business owners as working capital or for business expansion. Different lenders provide different loan offers and schemes to support businesses in their daily operations or expansions. Mentioned is the table of lenders which provide msme loan without collateral. Lenders which are not in the list do provide MSME loan but decide on loan interest rates as per the borrower's profile and application details.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {columns.map((column) => (
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
                        {Object.entries(state.msmeLoans).map(([key, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            const value = column.id == "LenderName" ? key : data[column.id];
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
                <Grid item>
                    <Typography variant="subtitle1">Frequently asked questions</Typography>
                    <br/>
                    <br/>
                    {state.frequentlyAskedQuestions.msmeLoans.map((faq) => 
                    {
                        return <Box>
                            <Typography variant="subtitle1">{faq.question}</Typography>
                            <br/>
                            <Typography variant="body1">{faq.answer}</Typography>
                            <br/>
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
            <br/>
            <Link to="/help">
                <Button onClick={() => dispatch({ type: "NAVIGATE_TO_HELP_PAGE" })} color="primary" startIcon={<PersonAddIcon />}>
                    Let's Connect
                </Button>
            </Link>
        </Paper>
        <Footer />
    </Box>
}
export default MsmeLoans;