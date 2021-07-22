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
    TableRow ,
    Typography,
    Grid
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    }
});

const columns = [
    { id: 'category', label: 'Category', minWidth: 20, align: 'left' },
    { id: 'dr', label: 'Debit', minWidth: 20, align: 'right' },
    {
      id: 'drCount',
      label: 'Dr Ct',
      minWidth: 20,
      align: 'right'
    }
];

const options = {
    plugins: {
        legend: {
        //   display: false,
        },
        
      },
};

const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: '#282c35',
      color: '#fff',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles(() => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: '#ffd9a6'
        },
        '&:nth-of-type(even)': {
        backgroundColor: '#ffe9cd'
        },
    },
}))(TableRow); 


const DebitAnalsisByCategory = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    const donutData = {
        labels: (state.bankStatementAnalysis && state.bankStatementAnalysis.categoryWiseDebitTransactions) ? Object.keys(state.bankStatementAnalysis.categoryWiseDebitTransactions).slice(0, 5) : [],
        datasets: [
          {
            data: (state.bankStatementAnalysis && state.bankStatementAnalysis.categoryWiseDebitTransactions) ? Object.values(state.bankStatementAnalysis.categoryWiseDebitTransactions).slice(0, 5).map((value) => value.dr) : [],
            backgroundColor: [
                '#573200',
                '#a55e01',  
                '#f38b01',
                '#feae44',
                '#ffd9a6'
            ]
          },
        ],
      };

    return (
        <Paper className={classes.root}>
            { state.bankStatementAnalysis 
            && state.bankStatementAnalysis.categoryWiseDebitTransactions
            &&
            <Grid container direction="column" alignItems="center" justify="flex-start">
                <Grid item>
                    <Doughnut data={donutData} options={options} />
                </Grid>
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
                    {Object.entries(state.bankStatementAnalysis.categoryWiseDebitTransactions).map(([key, value]) => {
                    if(value.dr != 0) {
                        return (
                            <StyledTableRow hover role="checkbox" tabIndex={-1} key={key}>
                            {columns.map((column) => {
                                const cellValue = (column.id === 'category') ? key : value[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    <Typography variant="body1" margin="xsmall">{cellValue}</Typography>
                                </TableCell>
                                );
                            })}
                            </StyledTableRow>
                        );
                    }
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            </Grid>}
        </Paper>
    );
}

export default DebitAnalsisByCategory;
