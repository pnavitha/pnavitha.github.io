import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Typography,
    Grid,
    Button,
    Paper,
    Box,
    FormControl,
    InputLabel,
    Input,
} from '@material-ui/core';
import ForumIcon from '@mui/icons-material/Forum';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#ffda61',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: '2%'
    },
    blueContentWrapper: {
        background: '#fea631',
        paddingRight: '5%',
        paddingLeft: '5%',
        // paddingBottom: '2%'
    },
    whiteText: {
        color: '#fff',
        width: '300px'
    }
});

const MockInterview = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper>
    <Paper square className={classes.ContentWrapper} elevation={4} >
        <Grid container direction="row" alignContent='center' justify='center' spacing={2}>
            <Grid item xs={12} sm={7}>
                <Typography variant="subtitle1">Check your Product Thinking by our FREE Mock Interview</Typography>
                <Typography variant="body1">Interact with an Experienced PM to know what can get you shortlisted and make an awesome PM.</Typography>
            </Grid> 
            <Grid item xs={12} sm={3}>
                <br/>
                <Button 
                style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                startIcon={<ForumIcon/>} onClick={() => {
                        window.open('https://calendly.com/nextinning/pm-mock-interview', "_blank");
                        dispatch({ type: "BUTTON_CLICKED", payload: "MOCK_INTERVIEW" })
                    }
                } 
                variant="contained" >
                Book A FREE Mock Interview!
            </Button>
            </Grid> 
       </Grid>
       </Paper>
       {/* <Paper square className={classes.blueContentWrapper} elevation={4} >
       <Grid container direction="row" alignContent='center' justify='center' spacing={2}>
            <Grid item xs={12} sm={7}>
                <Box color="#fff" >
                <Typography variant="subtitle1">Your LinkedIn Profile tells a lot about you</Typography>
                <Typography variant="body1">Assess your linkedIn profile and get a report on what hiring managers and recruiters think looking at your profile.</Typography>
                </Box>
            </Grid> 
            <Grid item xs={12} sm={3}>
                <FormControl >
                <InputLabel className={classes.whiteText} for="description"> Your LinkedIn URL* </InputLabel>
                <Input multiline rowsMax={2} rows={1} className={classes.whiteText} type="text" name="descriptionInput" id="description" maxlength="500" 
                    value={state.linkedInUrl ? state.linkedInUrl : ""}
                    onChange={(event) => dispatch({ type: "UPDATE_LINKEDIN_URL", payload: event.target.value })} />
                </FormControl>
                <br/>
                <br/>
                <Button 
                startIcon={<LinkedInIcon />} 
                style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                onClick={() => dispatch({ type: "SUBMIT_LINKEDIN_URL" })} 
                variant="contained">
                SUBMIT LinkedIn URL
            </Button>
            </Grid> 
            {state.linkedInSubmitted 
            && 
            <Box color="#ffc629" >
                <Typography variant="body1">** Your LinkedIn Profile Submitted. We will mail you the report in few hours.**</Typography>
            </Box>
            }
       </Grid>
    </Paper> */}
    </Paper>
}

export default MockInterview;