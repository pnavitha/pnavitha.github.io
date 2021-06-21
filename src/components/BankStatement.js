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
    { id: 'Date', label: 'Date', minWidth: 5, maxWidth: 10, align: 'left' },
    { id: 'Desc', label: 'Description', minWidth: 5, maxWidth: 8, align: 'left' },
    {
      id: 'transaction',
      label: 'Transaction',
      minWidth: 1,
      maxWidth: 2,
      align: 'right'
    },
    {
      id: 'Bal',
      label: 'Balance',
      minWidth: 1,
      maxWidth: 2,
      align: 'right'
    }
];

const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: '#282c35',
      color: '#fff',
    },
    body: {
      fontSize: 8,
    },
  }))(TableCell);

const CreditStyledTableRow = withStyles(() => ({
    root: {
            backgroundColor: '#ebffeb',
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
                     return   (transaction.Cr !== null) ?
                     (
                            <CreditStyledTableRow hover role="checkbox" tabIndex={-1}>
                            {columns.map((column) => {
                                let cellValue = "";
                                if(column.id == "transaction")
                                    cellValue = "+" + transaction.Cr;
                                else 
                                    cellValue = transaction[column.id];

                                console.log('cellValue: ' , cellValue)
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    <Typography variant="body2" margin="xsmall">{cellValue}</Typography>
                                </TableCell>
                                );
                            })}
                            </CreditStyledTableRow>
                        ) :
                    (
                        <DebitStyledTableRow hover role="checkbox" tabIndex={-1}>
                        {columns.map((column) => {
                            let cellValue = "";
                            if(column.id == "transaction")
                                cellValue = "-" + transaction.Dr;
                            else 
                                cellValue = transaction[column.id];

                            return (
                            <TableCell key={column.id} align={column.align}>
                                <Typography variant="body2" margin="xsmall">{cellValue}</Typography>
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