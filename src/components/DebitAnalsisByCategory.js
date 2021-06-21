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
      backgroundColor: '#000',
      color: '#fff',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles(() => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: '#ffebeb'
        },
        '&:nth-of-type(even)': {
        backgroundColor: '#ffd8d8'
        },
    },
}))(TableRow); 

const DebitAnalsisByCategory = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    const donutData = {
        labels: Object.keys(state.demoReport.categoryWiseTransactions),
        datasets: [
          {
            data: Object.values(state.demoReport.categoryWiseTransactions).map((value) => value.dr),
            backgroundColor: [
                '#620000',  
                '#b10000',
                '#ff0000',
                '#ff4e4e',
                '#ffc4c4'
            ]
          },
        ],
      };

    return (
        <Paper className={classes.root}>
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
                    {Object.entries(state.demoReport.categoryWiseTransactions).map(([key, value]) => {
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
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            
        </Paper>
    );
}

export default DebitAnalsisByCategory;