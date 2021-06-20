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
            "04/20": {
                cr: 21000,
                crCount: 5,
                dr: 10000,
                drCount: 2
            },
            "05/20": {
                cr: 1700,
                crCount: 1,
                dr: 16000,
                drCount: 4
            },
            "06/20": {
                cr: 14000,
                crCount: 5,
                dr: 8900,
                drCount: 2
            },
            "07/20": {
                cr: 27000,
                crCount: 10,
                dr: 8000,
                drCount: 1
            },
            "08/20": {
                cr: 25000,
                crCount: 5,
                dr: 13000,
                drCount: 2
            },
            "09/20": {
                cr: 30000,
                crCount: 4,
                dr: 13000,
                drCount: 5
            },
            "10/20": {
                cr: 8900,
                crCount: 2,
                dr: 12000,
                drCount: 3
            },
            "11/20": {
                cr: 5000,
                crCount: 2,
                dr: 18000,
                drCount: 7
            },
            "12/20": {
                cr: 21700,
                crCount: 5,
                dr: 1800,
                drCount: 1
            },
            "01/21": {
                cr: 17000,
                crCount: 5,
                dr: 5600,
                drCount: 2
            },
            "02/21": {
                cr: 13000,
                crCount: 5,
                dr: 2800,
                drCount: 1
            },
            "03/21": {
                cr: 2000,
                crCount: 1,
                dr: 13000,
                drCount: 6
            },
        },
        categoryWiseTransactions: {
            "CHQ": {
                cr: 21000,
                crCount: 5,
                dr: 5000,
                drCount: 2
            },
            "NEFT": {
                cr: 1700,
                crCount: 1,
                dr: 12000,
                drCount: 4
            },
            "IMPS": {
                cr: 2000,
                crCount: 3,
                dr: 1000,
                drCount: 7
            },
            "RTGS": {
                cr: 15000,
                crCount: 2,
                dr: 10000,
                drCount: 2
            }
        },
        partyWiseTransactions: {
            "Sarvana Store": {
                cr: 21000,
                crCount: 5,
                dr: 10000,
                drCount: 2
            },
            "Reon Creation": {
                cr: 1700,
                crCount: 1,
                dr: 16000,
                drCount: 4
            },
            "K S Retail": {
                cr: 20000,
                crCount: 3,
                dr: 10000,
                drCount: 7
            },
            "Chennai Housing": {
                cr: 1000,
                crCount: 1,
                dr: 1000,
                drCount: 2
            },
        },
        bankStatement: [
            {
                "Date": "05-07-2020",
                "Desc": "O/S INTEREST RECOVERY FROM A/C XXXXXXXXX X0570",
                "Dr": null,
                "Cr": 21000,
                "Bal": 286445,
                "Cat": "INTEREST-EARNED",
                "Party": null
              },
              {
                "Date": "20-05-2020",
                "Desc": "99283999TERMINAL I CARDS SETTL. 11/02/20",
                "Dr": null,
                "Cr": 1,
                "Bal": 286446,
                "Cat": "CARD-SETTLEMENT",
                "Party": null
              },
              {
                "Date": "20-05-2020",
                "Desc": "99283999TERMINAL 1 CARDS SETTL. 05/03/20",
                "Dr": null,
                "Cr": 0.99,
                "Bal": 286446.99,
                "Cat": "CARD-SETTLEMENT",
                "Party": "MUTHU RAJ"
              },
              {
                "Date": "31-05-2020",
                "Desc": "DEBIT INTEREST CAPITALIZED",
                "Dr": 28264,
                "Cr": null,
                "Bal": 258182.99,
                "Cat": "INTEREST-PAID",
                "Party": null
              },
              {
                "Date": "06-10-2020",
                "Desc": "O/S INTEREST RECOVERY FROM A/C XXXXXXXXX X0570",
                "Dr": null,
                "Cr": 2000,
                "Bal": 260182.99,
                "Cat": "INTEREST-EARNED",
                "Party": "BAG INDUSTRIES"
              },
              {
                "Date": "07-01-2020",
                "Desc": "DEBIT INTEREST CAPITALIZED",
                "Dr": 27691,
                "Cr": null,
                "Bal": 232491.99,
                "Cat": "INTEREST-PAID",
                "Party": null
              },
              {
                "Date": "24-07-2020",
                "Desc": "CHQ DEP - TRANSFER OW 1 - CHENNAI RK SAL",
                "Dr": null,
                "Cr": 187200,
                "Bal": 419691.99,
                "Cat": "CHQ-TRANSFER",
                "Party": null
              },
              {
                "Date": "28-07-2020",
                "Desc": "I/W CHQ RETURN-MICR -MADRASA E MOHID",
                "Dr": 19850,
                "Cr": null,
                "Bal": 399841.99,
                "Cat": "INWARD-RETURN",
                "Party": null
              },
              {
                "Date": "28-07-2020",
                "Desc": "I/W CHQ RETURN-MICR CTS-CHENNAL RK S",
                "Dr": null,
                "Cr": 19850,
                "Bal": 419691.99,
                "Cat": "INWARD-RETURN",
                "Party": null
              },
        ]  

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