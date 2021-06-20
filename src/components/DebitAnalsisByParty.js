import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const DebitAnalsisByParty = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);
    
    const donutData = {
        labels: Object.keys(state.demoReport.partyWiseTransactions),
        datasets: [
          {
            data: Object.values(state.demoReport.partyWiseTransactions).map((value) => value.dr),
            backgroundColor: [
              '#000000',  
              '#333333',
              '#666666',
              '#858585',
              '#adadad'
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
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(state.demoReport.partyWiseTransactions).map(([key, value]) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map((column) => {
                            const cellValue = (column.id === 'category') ? key : value[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                <Typography variant="body1" margin="xsmall">{cellValue}</Typography>
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            
        </Paper>
    );
}

export default DebitAnalsisByParty;