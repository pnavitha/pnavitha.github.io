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
import Feedback from './feedback';

const useStyles = makeStyles({
    contentAreaWrapper: {
        position: 'absolute',
        top: 50,
        height: 'auto',
        overflow: 'scroll',
        direction: 'column',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
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

    
const petrolColumns = [
    { id: 'stateName', label: 'State Name', minWidth: 20, align: 'left' },
    { id: 'price', label: 'Petrol Price (per litre)', minWidth: 20, align: 'left' },
];

const dieselColumns = [
    { id: 'stateName', label: 'State Name', minWidth: 20, align: 'left' },
    { id: 'price', label: 'Diesel Price (per litre)', minWidth: 20, align: 'left' },
];

const FuelPrices = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    return <Box className={classes.contentAreaWrapper}>
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h1">Petrol Price in India</Typography>
                    <br/>
                    <br />
                    <Typography variant="body1">Petrol price is revised daily at 6:00 AM depending on the global oil rates. End user get the petrol price including all taxes.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {petrolColumns.map((column) => (
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
                        {Object.entries(state.fuelPrices.petrolPrices).map(([key, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {petrolColumns.map((column) => {
                                            const value = column.id === "stateName" ? key : data[column.id];
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
                <Grid item xs={12} sm={4}>
                    <Typography variant="h1">Diesel Price in India</Typography>
                    <br/>
                    <br />
                    <Typography variant="body1">Diesel price is revised daily at 6:00 AM depending on the global oil rates. End user get the diesel price including all taxes.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TableContainer className={classes.container}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            {dieselColumns.map((column) => (
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
                        {Object.entries(state.fuelPrices.dieselPrices).map(([key, data]) => 
                            <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {dieselColumns.map((column) => {
                                            const value = column.id === "stateName" ? key : data[column.id];
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
        
        
        <Paper elevation={2} square className={classes.whiteWrapper}>
            <Grid container direction="row" justify="space-evenly" spacing={2}>
                <Grid item>
                    <Typography variant="subtitle1">Frequently asked questions</Typography>
                    <br/>
                    <br/>
                    {state.frequentlyAskedQuestions.fuelPrices.map((faq) => 
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
        <Feedback />
        <PreFooter />
        <Footer />
    </Box>
}

export default FuelPrices;