import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import { 
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow ,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 340,
    }
});

const columns = [
    { id: 'duration', label: 'Month', minWidth: 5, align: 'left' },
    { id: 'cr', label: 'Credit', minWidth: 20, align: 'right' },
    {
      id: 'crCount',
      label: 'Cr Ct',
      minWidth: 2,
      align: 'right'
    },
    {
      id: 'dr',
      label: 'Debit',
      minWidth: 20,
      align: 'right'
    },
    {
      id: 'drCount',
      label: 'Dr Ct',
      minWidth: 2,
      align: 'right'
    },
];

const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: '#282c35',
      color: '#fff',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const CreditDebitTable = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let credit = 0;
    let creditCount = 0;
    let debit = 0;
    let debitCount = 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            { state.bankStatementAnalysis 
            && state.bankStatementAnalysis.monthWiseTransactions
            &&
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
                    {Object.entries(state.bankStatementAnalysis.monthWiseTransactions).map(([key, value]) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map((column) => {
                            const cellValue = (column.id === 'duration') ? key : value[column.id];
                            if(column.id === 'cr')
                                credit += cellValue;
                            if(column.id === 'dr')
                                debit += cellValue;  
                            if(column.id === 'crCount')
                                creditCount += cellValue;
                            if(column.id === 'drCount')
                                debitCount += cellValue;  

                            return (
                            <TableCell key={column.id} align={column.align}>
                                <Typography variant="body1" margin="xsmall">{cellValue}</Typography>
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                    <TableRow hover role="checkbox" tabIndex={-1} key="table-footer">
                    <TableCell key="grand-total">
                        <Typography variant="body1" margin="xsmall">Grand Total</Typography>
                    </TableCell>
                    <TableCell key="credit-total" align='right'>
                        <Typography variant="body1" margin="xsmall">{credit}</Typography>
                    </TableCell>
                    <TableCell key="credit-count-total" align='right'>
                        <Typography variant="body1" margin="xsmall">{creditCount}</Typography>
                    </TableCell>
                    <TableCell key="debit-total" align='right'>
                        <Typography variant="body1" margin="xsmall">{debit}</Typography>
                    </TableCell>
                    <TableCell key="debit-count-total" align='right'>
                        <Typography variant="body1" margin="xsmall">{debitCount}</Typography>
                    </TableCell>
            </TableRow>
                </TableBody>
                </Table>
            </TableContainer> }
            
        </Paper>
    );
}

export default CreditDebitTable;
