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
    { id: 'category', label: 'Category', minWidth: 10, maxWidth: 10, align: 'left' },
    { id: 'cr', label: 'Credit', minWidth: 10, maxWidth: 10, align: 'right' },
    {
      id: 'crCount',
      label: 'Credit Count',
      minWidth: 10,
      maxWidth: 10,
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
    backgroundColor: '#ebffeb'
    },
    '&:nth-of-type(even)': {
    backgroundColor: '#d8ffd8'
    },
},
}))(TableRow);  

const CreditAnalsisByCategory = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    const donutData = {
        labels: Object.keys(state.demoReport.categoryWiseTransactions),
        datasets: [
          {
            data: Object.values(state.demoReport.categoryWiseTransactions).map((value) => value.cr),
            backgroundColor: [
              '#0d4325',  
              '#157f3d',
              '#1db156',
              '#3edf7b',
              '#82eaa9'
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
                                <Typography variant="body2" margin="xsmall">{cellValue}</Typography>
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

export default CreditAnalsisByCategory;