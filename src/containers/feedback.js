import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import {
    Typography,
    Grid,
    Paper,
    Button,
    Divider,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
    InputLabel,
    Input,
    Box
} from '@material-ui/core';
import { Link } from "react-router-dom";

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
    comment: {
        width: '100%'
    },
    rating: {
        padding: '8px'
    }
});

const Feedback = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const handleChange = (event) => {
        dispatch({ type: "SUBMIT_FEEDBACK", payload: event.target.value })
    };

    return <Paper square className={classes.ContentWrapper}>
        <Grid container direction="column" alignItems="center" justify="space-evenly" spacing={3}>
            <Grid item>
                {(state.feedback && state.feedback.rating) ? 
                <Box fontWeight="bold" color="#0975e1" >
                    Thank you for your rating. We appriciate if you submit your comments and help us to improve. 
                </Box>
                :
                <Grid container direction='row' justify="space-evenly" alignItems="center" spacing={3}>
                    <Typography variant="body1">How would you rate your overall experience here?</Typography>
                    <RadioGroup row aria-label="feedback" name="feedback" value={state.feedback ? state.feedback.rating : 0} onChange={handleChange}>
                        <FormControlLabel className={classes.rating} labelPlacement="start" value="1" control={<Radio />} label="1" />
                        <FormControlLabel className={classes.rating} labelPlacement="start" value="2" control={<Radio />} label="2" />
                        <FormControlLabel className={classes.rating} labelPlacement="start" value="3" control={<Radio />} label="3" />
                        <FormControlLabel className={classes.rating} labelPlacement="start" value="4" control={<Radio />} label="4" />
                        <FormControlLabel className={classes.rating} labelPlacement="start" value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                </Grid>}
            </Grid>
            <Grid item>
            {(state.feedback && state.feedback.isSubmitted) ? 
                <Box fontWeight="bold" color="#0975e1" >
                    Thank you for your comment. We can contact you if need more details. 
                </Box>
                :
                <Grid container direction='row' justify="space-around" alignItems="center" spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="body1">Please tell us more...</Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FormControl className={classes.comment}>
                            <InputLabel >Your Comments*</InputLabel>
                            <Input
                                multiline
                                rowsMax='3'
                                type="text"
                                value={state.feedback ? state.feedback.comment : ""}
                                onChange={(event) => dispatch({ type: "UPDATE_FEEDBACK_COMMENT", payload: event.target.value })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl className={classes.comment}>
                            <InputLabel >Phone Number*</InputLabel>
                            <Input
                                type="number"
                                value={state.feedback ? state.feedback.phoneNumber : ""}
                                onChange={(event) => dispatch({ type: "UPDATE_FEEDBACK_PHONENUMBER", payload: event.target.value })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Button 
                            disable={!state.feedback || !state.feedback.phoneNumber || !state.feedback.comment}
                            variant="contained" 
                            onClick={() => dispatch({ type: "SUBMIT_FEEDBACK" })} 
                            color="secondary">
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            }
            </Grid>
        </Grid>
    </Paper>
}

export default Feedback;