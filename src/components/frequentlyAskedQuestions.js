import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';

import {
    Typography,
    Grid,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    ContentWrapper: {
        background: '#f0f1f2',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    submitDetails: {
        padding: '4px 4px',
    },
});

const FrequentlyAskedQuestions = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return <Paper elevation={2} square className={classes.ContentWrapper}>
        <Grid container direction="row" justify="space-evenly" spacing={2}>
            <Grid item>
                <Typography variant="subtitle1">Frequently Asked Questions</Typography>
                <br />
                <br />
                {state.frequentlyAskedQuestions.genericQuestions.map((faq) => {
                    return <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant="subtitle1">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                }
                )}
            </Grid>
        </Grid>
    </Paper>
}

export default FrequentlyAskedQuestions;