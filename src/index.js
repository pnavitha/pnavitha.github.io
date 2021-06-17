import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from './theme';
import Layout from './containers/layout';
import AppContextProvider from './context/app-context/app-context-provider';
import { ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router
} from "react-router-dom";

function App() {
    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <AppContextProvider>
                    <Layout />
                </AppContextProvider>
            </ThemeProvider>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);