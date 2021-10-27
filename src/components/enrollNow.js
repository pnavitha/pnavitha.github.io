import React, { useContext, useRef, useEffect } from 'react';
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
    TextField,
    Box
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
    },
    infoBox: {
        textAlign: 'flex-start'
    },
    error: {
        visibility: 'hidden',
        color: 'red',
        textAlign: 'center'
    },
    paypalButton: {
        textAlign: 'center',
        marginTop: '0.625rem'
    }
});


const EnrollNow = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    // const paypal = useRef();
    // useEffect(() => {
    //     var description = document.querySelector('#smart-button-container #description');
    //     var amount = document.querySelector('#smart-button-container #amount');
    //     var descriptionError = document.querySelector('#smart-button-container #descriptionError');
    //     var priceError = document.querySelector('#smart-button-container #priceLabelError');

    //     window.paypal.Buttons({
    //         onClick: function () {
    //             if (description.value.length < 1) {
    //               descriptionError.style.visibility = "visible";
    //             } else {
    //               descriptionError.style.visibility = "hidden";
    //             }
        
    //             if (amount.value.length < 1) {
    //               priceError.style.visibility = "visible";
    //             } else {
    //               priceError.style.visibility = "hidden";
    //             }
    //           },

    //         createOrder: (data, actions, err) => {
    //         return actions.order.create({
    //             intent: "CAPTURE",
    //             purchase_units: [
    //             {
    //                 description: description.value,
    //                 amount: {
    //                 currency_code: "USD",
    //                 value: amount.value,
    //                 },
    //             },
    //             ],
    //         });
    //         },
    //         onApprove: async (data, actions) => {
    //         const order = await actions.order.capture();
    //         console.log(order);
    //         },
    //         onError: (err) => {
    //         console.log(err);
    //         },
    //     }).render(paypal.current);
    // }, []);

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
                        <div id="smart-button-container">
                            <Box className={classes.infoBox}>
                                <FormControl >
                                <InputLabel for="description">Name </InputLabel>
                                <Input type="text" name="descriptionInput" id="description" maxlength="127" 
                                    value={state.payment ? state.payment.description : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_PAYMENT_DESCRIPTION", payload: event.target.value })} />
                                </FormControl>
                            </Box>
                                <Typography id="descriptionError" className={classes.error}>Please enter your name.</Typography>
                            <Box className={classes.infoBox}>
                                <FormControl>
                                <InputLabel for="amount">Amount (in USD) </InputLabel>
                                <Input name="amountInput" type="number" id="amount" 
                                    value={state.payment ? state.payment.amount : ""}
                                    onChange={(event) => dispatch({ type: "UPDATE_PAYMENT_AMOUNT", payload: event.target.value })} />
                                </FormControl>
                                {/* <span> USD</span> */}
                            </Box>
                            <Typography id="priceLabelError" className={classes.error}>Please enter a price</Typography>
                            {/* <div ref={paypal}></div> */}
                        </div>
                        </Grid>
                        <br />
                        <Grid item>
                            <Button variant='contained' color='secondary' onClick={() => dispatch({ type: "PAY" })}>
                                Enroll Now!
                            </Button>
                        </Grid>
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