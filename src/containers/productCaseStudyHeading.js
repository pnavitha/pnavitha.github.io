import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Grid,
    Box,
    Paper,
    Typography,
    Button
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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

const ProductCaseStudyHeading = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

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
        <Paper id="SectionOne" elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <br />
                    <Typography variant="h1">Ace your interview with the Perfect Case Study</Typography>
                    <br />
                    <Typography variant="body1">Do you know that almost 80% of companies have product case study rounds?</Typography>
                    <br />
                    <Typography variant="body1">Don’t worry, you can present an awesome case with the help of our personalized templates & after discussions with our experienced PM’s.</Typography>
                    <br />
                    <br />
                    <Grid container direction='row' justify="flex-start" alignItems="flex-end" spacing={1}>
                        <Grid item>
                            <Button startIcon={<WhatsAppIcon />} onClick={() => {
                                        window.open('https://wa.me/+917093003840/?text=Hi,%20I%20am%20looking%20for%20a%20Product%20Case%20Study%20Template.', "_blank");
                                        dispatch({ type: "BUTTON_CLICKED", payload: "WHATSAPP_MENTOR" })
                                    }
                                } 
                                variant="contained" color="primary" >
                                WhatsApp Us Now!
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../images/present.svg")} alt="Product Management Career Mentorship Program Become a Product Manager Career Mentor for better career high salary " width="90%" />
                </Grid>
            </Grid>
        </Paper>
    </Box>
}
export default ProductCaseStudyHeading;