import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GaugeChart from 'react-gauge-chart'
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
    CircularProgress,
    Button
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
import GetAppIcon from '@material-ui/icons/GetApp';

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
        paddingTop: '5%',
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
    rightSide: {
        float: "right"
    }
});

const BankStatementAnalyzer = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [visibility, setVisibility] = React.useState(false);

    const changeHandler = (event) => {
        if (event.target && event.target.files && event.target.files.length > 0) {
            getBase64(event.target.files[0], (result) => {
                result = result.replace('data:application/pdf;base64,', '');
                dispatch({ type: "UPLOAD_PDF_AND_ANALYZE", payload: result })
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
                    <br />
                    <Typography variant="h1">Get Bank Statement Rating to improve your loan eligibility.</Typography>
                    <br />
                    <Typography variant="body1">Lenders Check Bank Statement to know your Credit Worthiness. With Statement Analyser Tool, analyze 10,000+ transactions in just 20 seconds and understand what's lacking.</Typography>
                    <br />
                    <Typography variant="body1">** Currently support HDFC bank only. Others banks coming soon.</Typography>
                    <br />
                    <FormControl className={classes.bankPassword}>
                        <InputLabel >Phone number*</InputLabel>
                        <Input
                            type="number"
                            value={state.newBankStatementForm ? state.newBankStatementForm.phoneNumber : ""}
                            onChange={(event) => dispatch({ type: "UPDATE_BANK_STATEMENT_PHONENUMBER", payload: event.target.value })} />
                    </FormControl>
                    {/* <Autocomplete
                        size='small'
                        fontSize='small'
                        options={state.bankNames}
                        value={state.newBankStatementForm ? state.newBankStatementForm.selectedBankName : ""}
                        onChange={(event, newValue) => dispatch({ type: "UPDATE_BANK_NAME", payload: newValue })}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Select Bank Name*" />}
                    /> */}
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
                    <Grid container direction='row' justify="flex-start" alignItems="flex-end">
                        <Grid item>
                            <InputLabel
                                classes={{ disabled: classes.disabledButton }}
                                className={classes.submitDetails}>
                                <input
                                    style={{ display: 'none' }}
                                    accept="application/pdf"
                                    type="file"
                                    name="file"
                                    disabled={(!state.newBankStatementForm) || (state.newBankStatementForm && (!state.newBankStatementForm.phoneNumber || state.newBankStatementForm.phoneNumber.length < 10 || state.newBankStatementForm.inProgress))}
                                    onChange={changeHandler} />
                                {(state.newBankStatementForm && state.newBankStatementForm.inProgress) ?
                                    <CircularProgress />
                                    : <Grid container direction="row"><Typography>UPLOAD PDF NOW!</Typography></Grid>}
                            </InputLabel>
                        </Grid>
                        {state.error && state.error.bankStatementError && <Grid item>
                            <Typography color="error">Select valid bank statement pdf and phone number.</Typography>
                        </Grid>}
                    </Grid>
                    {state.bankStatementAnalysis && <Box color="#0975e1" >
                        <Typography variant="subtitle1" level="4" margin="xsmall">Following is your bank statement report.</Typography>
                    </Box>}

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
                <br />
                <Typography variant="body1">First filter of your loan application is your bank-statement. Similar report is used by banks and other lenders to decide whether to give business loans or not. This report shows your eligibility for MSME business loan and credibility to repay the loan.</Typography>
                <br />
                <Box className={classes.rightSide}>
                    <Button onClick={() => dispatch({ type: "DOWNLOAD_BANK_ANALYSIS" })} variant="contained" size="small" color="primary" startIcon={<GetAppIcon />}>
                        Download Bank Statement Report
                    </Button>
                </Box>
                <br />
                <br />
                <Paper elevation={2} square className={classes.whiteWrapper}>
                    <Grid container direction="column" justify="flex-start" spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="subtitle2" level="4" margin="xsmall">FinDash Insights</Typography>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Grid container direction="column" justify="flex-start" alignItems="center" spacing={0}>
                                    <Grid item>
                                        <GaugeChart id="bank-statement-rating"
                                            nrOfLevels={10}
                                            colors={["#ff0000", "#23d366"]}
                                            arcWidth={0.4}
                                            textColor="#0975e1"
                                            percent={.35}
                                            hideText />
                                    </Grid>
                                    <Grid item>
                                        <Box color="#0975e1" >
                                            <Typography variant="subtitle1" level="4" margin="xsmall">Your bank-statement score is 350/1000</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" level="4" margin="xsmall">Factors effecting your score.</Typography>
                                <br />
                                <Typography variant="body1">1. EMIs default for home loan in Jan 2021 and Feb 2021.</Typography>
                                <Typography variant="body1">2. Credit card repayment due charges of 8000 INR in Feb 2021.</Typography>
                            </Grid>
                        </Grid>
                        <br />
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
                        <br />
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
                        <br />
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
                        <br />
                        <Grid item xs={12} sm={12}>
                            <Typography variant="subtitle2" level="4" margin="xsmall">Statement</Typography>
                            <br />
                            <DetailedBankStatement />
                        </Grid>
                    </Grid>
                </Paper>
                <br />
                <Box className={classes.rightSide}>
                    <Button onClick={() => dispatch({ type: "DOWNLOAD_BANK_ANALYSIS" })} variant="contained" size="small" color="primary" startIcon={<GetAppIcon />}>
                        Download Bank Statement Report
                    </Button>
                </Box>
            </Paper>
        }
    </Box>
}
export default BankStatementAnalyzer;