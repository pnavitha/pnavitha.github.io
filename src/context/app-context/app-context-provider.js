import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';
import {AppMiddleware} from './app-middleware';

const initialState = {
    userEmailId: "",
    profile: null,
    profilesForm: {},
    registerForm: {},
    profileAdded: false,
    isLoading: false,
    activeMenu: '',
    bankNames:["HDFC Bank", "Axis Bank"],
    msmeLoans:{
        "Central Bank of india": {
            interestRate: "7.35% onwards"
        },
        "Andhra Bank": {
            interestRate: "8.20% onwards"
        },
        "Bank of Maharashtra": {
            interestRate: "8.55% onwards",
        },
        "Canara Bank Business Loan": {
            interestRate: "9.20% onwards",
        },
        "Bank of Baroda": {
            interestRate: "9.65% onwards",
        },
        "UCO Bank":	{
            interestRate: "9.85% onwards",
        },
        "HDFC Bank": {
            interestRate: "15% onwards",
        },
        "Kotak Mahindra Bank": {
            interestRate: "16% onwards",
        },
        "State Bank of India": {
            interestRate: "7.65% onwards",
        },
        "ICICI Bank": {
            interestRate: "13% onwards"
        },
    },
    frequentlyAskedQuestions:{
        msmeLoans:[
            {
                question: "What is MSME full form?",
                answer: "MSME stands for Micro, Small and Medium Enterprise. They are categorised based on their revenue and type of business. Any business comes under MSME can apply for MSME loan from any bank or NBFCs."

            },
            {
                question: "What documents are required for MSME loan?",
                answer: "Important documents that are mostly required for getting MSME loans are Proof of Identity (PAN card, Aadhaar card, Voter’s ID or passport), Proof of Residence (Rental agreement, ration card or utility bills), Proof of Business Address (Rental agreement, lease agreement, utility bills), Proof of Income (P/L account and balance sheet copies of last 2 years), Tax documents (IT returns, sales tax return, PAN card), Proof of securities provided (Photocopies of title deeds/lease deeds offered as securities) and other documents like Projected balance sheet, project report, etc"
            },
            {
                question: "How to apply for MSME loan?",
                answer: "Many different banks and NBFCs provide loan for new or existing businesses. Every bank has different interest rate and rules. Above is the general interest rate table. You can know more by visiting the lender's website."
            },
            {
                question: "What is MSME loan eligibility criteria?",
                answer: "MSME loan can be availed by any self-employed professionals, entrepreneurs, business owners, micro-small and medium enterprises, sole proprietorship, partnership firms, limited liability partnership (LLP). Apart from this banks and NBFCs have their own criteria to check MSME loan application and borrower profile."
            }
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