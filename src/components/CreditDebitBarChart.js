import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/app-context/app-context-provider';
import { 
    Paper
} from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      
    },
};

const CreditDebitTable = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    const data = {
        labels: Object.keys(state.demoReport.monthlyTransactions),
        datasets: [
          {
            label: 'Debit',
            data: Object.values(state.demoReport.monthlyTransactions).map(value => value.cr),
            backgroundColor: '#ff0000'
          },
          {
            label: 'Credit',
            data: Object.values(state.demoReport.monthlyTransactions).map(value => value.dr),
            backgroundColor: '#23d366'
          },
        ],
    };

    return (
        <Paper className={classes.root}>
            <Bar data={data} options={options} />
        </Paper>
    );
}

export default CreditDebitTable;