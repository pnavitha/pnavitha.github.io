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

const CreditDebitBarChart = () => {
    const classes = useStyles();
    const [state, dispatch] = useContext(AppContext);

    const data = {
        labels: (state.bankStatementAnalysis && state.bankStatementAnalysis.monthWiseTransactions) ? Object.keys(state.bankStatementAnalysis.monthWiseTransactions) : [],
        datasets: [
          {
            label: 'Debit',
            data: (state.bankStatementAnalysis && state.bankStatementAnalysis.monthWiseTransactions) ? Object.values(state.bankStatementAnalysis.monthWiseTransactions).map(value => value.cr) : [],
            backgroundColor: '#f38b01'
          },
          {
            label: 'Credit',
            data: (state.bankStatementAnalysis && state.bankStatementAnalysis.monthWiseTransactions) ? Object.values(state.bankStatementAnalysis.monthWiseTransactions).map(value => value.dr) : [],
            backgroundColor: '#0975e1'
          },
        ],
    };

    return (
        <Paper className={classes.root}>
          { state.bankStatementAnalysis 
            && state.bankStatementAnalysis.monthWiseTransactions
            &&
            <Bar data={data} options={options} />}
        </Paper>
    );
}

export default CreditDebitBarChart;
