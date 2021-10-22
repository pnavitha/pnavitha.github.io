import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import { 
    Typography,
    Grid,
    Paper,
    Button,
    FormControl,
    InputLabel,
    Input,
    TextField
} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import BookIcon from '@material-ui/icons/Book';

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
    enrollNow: {
        width: '200px'
    }
});

const EnrollNow = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper id="SectionTwo" square className={classes.ContentWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
                    <Grid container direction='column'>
                    <br/>
                    <Typography variant="h1">Enroll now and get started in a week!</Typography>
                <br/>
                <Typography variant="body1">We understand you. Get the sessions scheduled as per your convenience.</Typography>
                <br/>
                <br/>
                <Grid container direction='column' justify="flex-start" alignItems="flex-start" spacing={1}>
                        <Grid item>
                            <FormControl className={classes.bankPassword}>
                                <InputLabel >Amount</InputLabel>
                                <Input
                                    type="number"
                                    value={state.payment ? state.payment.amount : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_PAYMENT_AMOUNT", payload: event.target.value })} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                        <Autocomplete
                            disableClearable
                            id="combo-box-demo"
                            options={["USD", "INR"]}
                            sx={{ width: 150 }}
                            value={state.payment ? state.payment.currency : ""}
                            onChange={(event) => dispatch({ type: "UPDATE_PAYMENT_CURRENCY", payload: event.target.value })}
                            renderInput={(params) => <TextField {...params} label="Currency" />}
                            />
                        </Grid>
                        <br />
                        <Grid item>
                            <Button startIcon={<BookIcon />} onClick={() => dispatch({ type: "PAY"})}
                             variant="contained" color="secondary" className={classes.enrollNow} >
                                Enroll Now!
                            </Button>
                        </Grid>
                        <br />
                    </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={require("../images/msme_loans.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="100%" />
            </Grid>
</Grid>
</Paper>
}

export default EnrollNow;