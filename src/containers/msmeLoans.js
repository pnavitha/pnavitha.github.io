import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    Typography
  } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

  
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
});

const MsmeLoans = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [visibility, setVisibility] = React.useState(false);

    const changeHandler = (event) => {
        console.log("in input", event.target.files);
        if(event.target && event.target.files && event.target.files.length > 0) {
            getBase64(event.target.files[0], (result) => {
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
                    <Autocomplete
                        size='small'
                        fontSize='small'
                        options={state.bankNames}
                        value={state.selectedBankName}
                        value={state.newBankStatementForm ? state.newBankStatementForm.selectedBankName : ""}
                        onChange={(event, newValue) => dispatch({ type: "UPDATE_BANK_NAME", payload: newValue })}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Select Bank Name" />}
                    />
                    <Grid container direction='row' justify="flex-start" alignItems="flex-end">
                        <Grid item xs={10} sm={10}>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel >Bank statement password</InputLabel>
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
                    <InputLabel className={classes.submitDetails}>
                    <input style={{ display: 'none' }} accept="application/pdf" type="file" name="file" onChange={changeHandler} />
                        UPLOAD PDF & GET ANALYSIS
                    </InputLabel>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/msme_loans.svg")} alt="" width="100%" />
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Tabular Information</Typography>
                    <br/>
                    <br />
                    <Typography variant="body1">We understand that Business runs on Money and Time. We value both and thus, hustle to make money available for your business, as soon as possible. Our work is to guide you with our financial knowledge, at each step of your business.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <img src={require("../images/our_motto.svg")} alt="" width="100%" /> */}
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">FAQs</Typography>
                    <br/>
                    <br/>
                    <Typography variant="body1">We are experts in different kinds of business loans and MSME loans. We analyse all the documents related to your business and direct you to the right bank which can help you with the money problem and provides the best offer.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <img src={require("../images/analysis.svg")} alt="" width="100%" /> */}
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
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