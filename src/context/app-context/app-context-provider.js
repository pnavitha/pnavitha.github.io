import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';
import {AppMiddleware} from './app-middleware';

const initialState = {
    userEmailId: "",
    profile: null,
    profilesForm: {},
    registerForm: {},
    isLoading: false,
    activeMenu: '',
    bankNames:["HDFC Bank", "Axis Bank"],
    demoReport:{
        startDuration: {
            month: 4,
            year: 2020
        },
        endDuration: {
            month: 3,
            year: 2021
        },
        monthlyTransactions: {
            "Apr 2020": {
                cr: 21000,
                crCount: 5,
                dr: 10000,
                drCount: 2
            },
            "May 2020": {
                cr: 1700,
                crCount: 1,
                dr: 16000,
                drCount: 4
            },
            "Jun 2020": {
                cr: 14000,
                crCount: 5,
                dr: 8900,
                drCount: 2
            },
            "Jul 2020": {
                cr: 27000,
                crCount: 10,
                dr: 8000,
                drCount: 1
            },
            "Aug 2020": {
                cr: 25000,
                crCount: 5,
                dr: 13000,
                drCount: 2
            },
            "Sep 2020": {
                cr: 30000,
                crCount: 4,
                dr: 13000,
                drCount: 5
            },
            "Oct 2020": {
                cr: 8900,
                crCount: 2,
                dr: 12000,
                drCount: 3
            },
            "Nov 2020": {
                cr: 5000,
                crCount: 2,
                dr: 18000,
                drCount: 7
            },
            "Dec 2020": {
                cr: 21700,
                crCount: 5,
                dr: 1800,
                drCount: 1
            },
            "Jan 2021": {
                cr: 17000,
                crCount: 5,
                dr: 5600,
                drCount: 2
            },
            "Feb 2021": {
                cr: 13000,
                crCount: 5,
                dr: 2800,
                drCount: 1
            },
            "Mar 2021": {
                cr: 2000,
                crCount: 1,
                dr: 13000,
                drCount: 6
            },
        }
    }
};

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const middlerware = AppMiddleware(dispatch, state);

    return (
        <AppContext.Provider value={[state, middlerware, dispatch ]}>
            {children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext(initialState);

export default AppContextProvider