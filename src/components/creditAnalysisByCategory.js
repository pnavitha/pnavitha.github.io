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
    { id: 'cr', label: 'Credit', minWidth: 20, align: 'right' },
    {
      id: 'crCount',
      label: 'Cr Ct',
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

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#282c35',
      color: '#fff',
    },
    body: {
      fontSize: 8,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: '#b2d7fc'
    },
    '&:nth-of-type(even)': {
    backgroundColor: '#d8ebfd'
    },
},
}))(TableRow);  

const CreditAnalsisByCategory = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    const donutData = {
        labels: (state.bankStatementAnalysis && state.bankStatementAnalysis.categoryWiseCreditTransactions) ? Object.keys(state.bankStatementAnalysis.categoryWiseCreditTransactions).slice(0, 5) : [],
        datasets: [
          {
            data: (state.bankStatementAnalysis && state.bankStatementAnalysis.categoryWiseCreditTransactions) ? Object.values(state.bankStatementAnalysis.categoryWiseCreditTransactions).slice(0, 5).map((value) => value.cr) : [],
            backgroundColor: [
              '#064e96',
              '#0975e1',
              '#419cf7',
              '#9fcdfb',
              '#d8f5fe'
            ]
          },
        ],
      };

    return (
        <Paper className={classes.root}>
            { state.bankStatementAnalysis 
            && state.bankStatementAnalysis.categoryWiseCreditTransactions
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
                    {Object.entries(state.bankStatementAnalysis.categoryWiseCreditTransactions).map(([key, value]) => {
                        if(value.cr !== 0) {
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

export default CreditAnalsisByCategory;
