import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import { AppContext } from '../context/app-context/app-context-provider';
import {  
    Grid,
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Accordion,
    AccordionSummary,
    AccordionDetails
  } from '@material-ui/core'
import PreFooter from './preFooter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  
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
    container: {
        maxHeight: 350,
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

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#000',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: '#9cc7f4'
        },
        '&:nth-of-type(even)': {
        backgroundColor: '#cde3f9'
        },
    },
    }))(TableRow);

    
const columns = [
    { id: 'LenderName', label: 'Lender Name', minWidth: 5, maxWidth: 5, align: 'left' },
    { id: 'interestRate', label: 'Interest Rates', minWidth: 20, maxWidth: 20, align: 'left' },
];


const SavingsAccount = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

   return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">Bankwise savings account interest rates</Typography>
                    <br/>
                    <br />
                    <Typography variant="body1">Banks and NBFCs provide savings account facility to their customers which provides security to savings and an additional interest on the amount. It is always suggested to keep some amount in savings account as it is liquid money and can be withdrawn quickly in emergencies. Different banks provide different interest rates on savings account.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(state.savingsAccount).map(([key, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            const value = column.id === "LenderName" ? key : data[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Typography variant="body1" margin="xsmall">{value}</Typography>
                                                </TableCell>
                                            );
                                        })}
                                    </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} square className={classes.greyWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item>
                    <Typography variant="subtitle1">Frequently asked questions</Typography>
                    <br/>
                    <br/>
                    {state.frequentlyAskedQuestions.savingsAccount.map((faq) => 
                    {
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
        <PreFooter />
        <Footer />
    </Box>
}

export default SavingsAccount;