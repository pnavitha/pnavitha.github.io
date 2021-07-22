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
    { id: 'date', label: 'Date', minWidth: 5, maxWidth: 5, align: 'left' },
    { id: 'desc', label: 'Desc', minWidth: 20, maxWidth: 20, align: 'left' },
    {
      id: 'change',
      label: 'Debit/Credit',
      minWidth: 2,
      maxWidth: 2,
      align: 'right'
    },
    {
      id: 'bal',
      label: 'Bal',
      minWidth: 10,
      maxWidth: 10,
      align: 'right'
    }
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

const CreditStyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#b2d7fc'
    }
}))(TableRow);

const DebitStyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#ffd9a6'
    }
}))(TableRow);

const DetailedBankStatement = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return (
        <Paper className={classes.root}>
            { state.bankStatementAnalysis 
            && state.bankStatementAnalysis.detailedTransactions
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
                        {(state.bankStatementAnalysis.detailedTransactions).map((transaction) => {
                            return (transaction.cr !== null) ?
                                (
                                    <CreditStyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            var data = (column.id === "change") ? transaction["cr"] : transaction[column.id]
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {data && <Typography variant="body1" margin="xsmall">{data}</Typography>}
                                                </TableCell>
                                            );
                                        })}
                                    </CreditStyledTableRow>
                                ) :
                                (
                                    <DebitStyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            var data = (column.id === "change") ? "-" + transaction["dr"] : transaction[column.id]
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {data && <Typography variant="body1" margin="xsmall">{data}</Typography>}
                                                </TableCell>
                                            );
                                        })}
                                    </DebitStyledTableRow>
                                );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>}
        </Paper>
    );
}

export default DetailedBankStatement;
