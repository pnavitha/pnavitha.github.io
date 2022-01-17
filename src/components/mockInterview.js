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
import PagesIcon from '@mui/icons-material/Pages';
import CategoryIcon from '@mui/icons-material/Category';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#ffda61',
        paddingRight: '2%',
        paddingLeft: '2%',
        paddingBottom: '2%'
    },
    BlueContentWrapper: {
        background: '#3feee6',
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingBottom: '2%'
    },
    RedContentWrapper: {
        background: '#f78888',
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingBottom: '2%'
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
        <Grid container direction="row" alignContent='center' justify='center' spacing={0}>
        
        <Grid item xs={12} sm={4}>
        <Paper square className={classes.ContentWrapper} elevation={4} >

            <Grid container direction="column" alignItems='center' alignContent="center" justify='center' spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">FREE Mock Interview</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">Interact with an Experienced PM</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ForumIcon/>
                </Grid>
                <Grid item xs={12}>
                <Button 
                size="small"
                style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                onClick={() => {
                        window.open('https://calendly.com/nextinning/pm-mock-interview', "_blank");
                        dispatch({ type: "BUTTON_CLICKED", payload: "MOCK_INTERVIEW" })
                    }
                } 
                variant="contained" >
                BOOK NOW
            </Button>
            </Grid> 
            </Grid>
       </Paper>

        </Grid> 

        <Grid item xs={12} sm={4}>
        <Paper square className={classes.BlueContentWrapper} elevation={4} >
        <Grid container direction="column" alignItems='center' alignContent="center" justify='center' spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">PM Casestudy Templates</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">Get Best PRDs and Casestudy Templates</Typography>
                </Grid>
                <Grid item xs={12}>
                    <PagesIcon/>
                </Grid>
                <Grid item xs={12}>
                <Button 
                size="small"
                style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                onClick={() => {
                    window.open('https://wa.me/+917093003840/?text=Hi,%20I%20am%20looking%20for%20Casestudy%20template%20in%20Product%20Management.', "_blank");
                    dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                }
                } 
                variant="contained" >
                CONTACT US
            </Button>
            </Grid>  
            </Grid>
       </Paper>

        </Grid>
        <Grid item xs={12} sm={4}>
        <Paper square className={classes.RedContentWrapper} elevation={4} >
        <Grid container direction="column" alignItems='center'  alignContent="center" justify='center' spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Sunday Demo Session</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">Join our Demo Session at 199/- ONLY</Typography>                
                </Grid>
                <Grid item xs={12}>
                    <CategoryIcon/>
                </Grid>
                <Grid item xs={12}>
                <Button 
                size="small"
                style={{backgroundColor: '#0975e1', color: '#FFFFFF'}} 
                onClick={() => {
                    window.open('https://wa.me/+917093003840/?text=Hi,%20I%20am%20looking%20for%20a%20Product%20related%20demo%20session.', "_blank");
                    dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                }
                } 
                variant="contained" >
                CONTACT US
            </Button>
            </Grid>  
            </Grid>
        </Paper>
        </Grid>
       </Grid>
    </Paper>
}

export default MockInterview;