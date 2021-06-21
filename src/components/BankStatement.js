import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
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
    { id: 'Date', label: 'Date', minWidth: 5, maxWidth: 5, align: 'left' },
    { id: 'Desc', label: 'Desc', minWidth: 20, maxWidth: 20, align: 'left' },
    {
        id: 'Dr',
        label: 'Dr',
        minWidth: 2,
        maxWidth: 2,
        align: 'right'
    },
    {
        id: 'Cr',
        label: 'Cr',
        minWidth: 2,
        maxWidth: 2,
        align: 'right'
    },
    {
        id: 'Bal',
        label: 'Bal',
        minWidth: 10,
        maxWidth: 10,
        align: 'right'
    },
    {
        id: 'Cat',
        label: 'Cat',
        minWidth: 5,
        maxWidth: 5,
        align: 'left'
    },
    {
        id: 'Party',
        label: 'Party',
        minWidth: 5,
        maxWidth: 5,
        align: 'left'
    },
];

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#000',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const CreditStyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#ebffeb'
    }
}))(TableRow);

const DebitStyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#ffebeb'
    }
}))(TableRow);

const BankStatement = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    return (
        <Paper className={classes.root}>
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
                        {(state.demoReport.bankStatement).map((transaction) => {
                            return (transaction.Cr !== null) ?
                                (
                                    <CreditStyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {transaction[column.id] && <Typography variant="body1" margin="xsmall">{transaction[column.id]}</Typography>}
                                                </TableCell>
                                            );
                                        })}
                                    </CreditStyledTableRow>
                                ) :
                                (
                                    <DebitStyledTableRow hover role="checkbox" tabIndex={-1}>
                                        {columns.map((column) => {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {transaction[column.id] && <Typography variant="body1" margin="xsmall">{transaction[column.id]}</Typography>}
                                                </TableCell>
                                            );
                                        })}
                                    </DebitStyledTableRow>
                                );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}

export default BankStatement;