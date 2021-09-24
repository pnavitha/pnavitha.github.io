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
                    <Typography variant="h1">Heading1</Typography>
                    <br />
                    <Typography variant="body1">[subtext]</Typography>
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
                                <InputLabel >Email</InputLabel>
                                <Input
                                    type="text"
                                    value={state.newBankStatementForm ? state.newBankStatementForm.bankStatementPassword : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_BANK_STATEMENT_PASSWORD", payload: event.target.value })} />
                            </FormControl>
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
                                    : <Grid container direction="row"><Typography>CTA1</Typography></Grid>}
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
    </Box>
}
export default BankStatementAnalyzer;