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
    savingsAccount: {
        "Bank of Baroda": {
            interestRate: "2.75% to 3.20%"
        },
        "Bank of India": {
            interestRate: "2.9%"
        },
        "Bank of Maharashtra": {
            interestRate: "2.75%",
        },
        "Canara Bank": {
            interestRate: "2.9%",
        },
        "Central Bank of India": {
            interestRate: "2.90%(upto 10 Lakhs), 2.70% above 10 Lakhs",
        },
        "Indian Bank":	{
            interestRate: "2.9%",
        },
        // "Indian Overseas Bank": {
        //     interestRate: "15% onwards",
        // },
        // "Punjab & Sind Bank": {
        //     interestRate: "16% onwards",
        // },
        "Punjab National Bank": {
            interestRate: "3%",
        },
        "State Bank of India": {
            interestRate: "2.7%"
        },
        "UCO Bank": {
            interestRate: "2.5%"
        },
        "Union Bank of India": {
            interestRate: "3%"
        },
    },
    fixedDepositDuration: {
        years: "",
        months: "",
        days: ""
    },
    fixedDeposit: {
        6: {
            "Bank of Baroda": 0,
            "Bank of India": 0,
            "Bank of Maharashtra": 0,
            "Canara Bank": 0,
            "Central Bank of India": 0,
            "Indian Bank":	0,
            "Indian Overseas Bank": 0,
            "Punjab National Bank": 0,
            "State Bank of India": 0,
            "UCO Bank": 0,
            "Union Bank of India": 0,
        },
        14: {
            "Bank of Baroda": 2.8,
            "Bank of India": 2.85,
            "Bank of Maharashtra": 2.75,
            "Canara Bank": 2.95,
            "Central Bank of India": 2.75,
            "Indian Bank":	2.9,
            "Indian Overseas Bank": 3.4,
            "Punjab National Bank": 3,
            "State Bank of India": 2.9,
            "UCO Bank": 2.75,
            "Union Bank of India": 3,
        },
        29: {
            "Union Bank of India": 3,
            "Bank of Baroda": 2.8,
            "Bank of India": 2.85,
            "Bank of Maharashtra": 2.75,
            "Canara Bank": 2.95,
            "Central Bank of India": 2.75,
            "Indian Bank":	2.9,
            "Indian Overseas Bank": 3.4,
            "Punjab National Bank": 3,
            "State Bank of India": 2.9,
            "UCO Bank": 2.75,
            
        },
        45: {
            "Bank of Baroda": 2.8,
            "Bank of India": 2.85,
            "Bank of Maharashtra": 2.75,
            "Canara Bank": 2.95,
            "Central Bank of India": 2.9,
            "Indian Bank":	2.9,
            "Indian Overseas Bank": 3.4,
            "Punjab National Bank": 3,
            "State Bank of India": 2.9,
            "UCO Bank": 3,
            "Union Bank of India": 3,
        },
        90: {
            "Bank of Baroda": 3.7,
            "Bank of India": 3.85,
            "Bank of Maharashtra": 3.25,
            "Canara Bank": 3.9,
            "Central Bank of India": 3.25,
            "Indian Bank":	3.05,
            "Indian Overseas Bank": 3.9,
            "Punjab National Bank": 3.25,
            "State Bank of India": 3.9,
            "UCO Bank": 3.75,
            "Union Bank of India": 3.75,
        },
        120: {
            "Bank of Baroda": 3.7,
            "Bank of India": 3.85,
            "Bank of Maharashtra": 3.5,
            "Canara Bank": 4,
            "Central Bank of India": 3.9,
            "Indian Bank":	3.95,
            "Indian Overseas Bank": 3.9,
            "Punjab National Bank": 4,
            "State Bank of India": 3.9,
            "UCO Bank": 3.9,
            "Union Bank of India": 4.25,
        },
        180: {
            "Bank of Baroda": 3.7,
            "Bank of India": 3.85,
            "Bank of Maharashtra": 3.75,
            "Canara Bank": 4,
            "Central Bank of India": 3.9,
            "Indian Bank":	3.95,
            "Indian Overseas Bank": 4.4,
            "Punjab National Bank": 4,
            "State Bank of India": 3.9,
            "UCO Bank": 3.9,
            "Union Bank of India": 4.3,
        },
        270: {
            "Bank of Baroda": 4.3,
            "Bank of India": 4.35,
            "Bank of Maharashtra": 4,
            "Canara Bank": 4.45,
            "Central Bank of India": 4.25,
            "Indian Bank":	4.4,
            "Indian Overseas Bank": 4.9,
            "Punjab National Bank": 4.4,
            "State Bank of India": 4.4,
            "UCO Bank": 4.7,
            "Union Bank of India": 4.5,
        },
        364: {
            "Bank of Baroda": 4.4,
            "Bank of India": 4.35,
            "Bank of Maharashtra": 4.25,
            "Canara Bank": 4.45,
            "Central Bank of India": 4.25,
            "Indian Bank":	4.4,
            "Indian Overseas Bank": 4.9,
            "Punjab National Bank": 4.5,
            "State Bank of India": 4.4,
            "UCO Bank": 4.7,
            "Union Bank of India": 4.5,
        },
        365: {
            "Bank of Baroda": 4.9,
            "Bank of India": 5.1,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.2,
            "Central Bank of India": 4.9,
            "Indian Bank":	5,
            "Indian Overseas Bank": 5.2,
            "Punjab National Bank": 5.1,
            "State Bank of India": 5,
            "UCO Bank": 4.9,
            "Union Bank of India": 5.25,
        },
        547: {
            "Bank of Baroda": 5,
            "Bank of India": 5.1,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.2,
            "Central Bank of India": 4.9,
            "Indian Bank":	5.1,
            "Indian Overseas Bank": 5.2,
            "Punjab National Bank": 5.1,
            "State Bank of India": 5,
            "UCO Bank": 5,
            "Union Bank of India": 5.3,
        },
        730: {
            "Bank of Baroda": 5,
            "Bank of India": 5.1,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.2,
            "Central Bank of India": 4.9,
            "Indian Bank":	5.1,
            "Indian Overseas Bank": 5.2,
            "Punjab National Bank": 5.1,
            "State Bank of India": 5,
            "UCO Bank": 5,
            "Union Bank of India": 5.3,
        },
        1095: {
            "Bank of Baroda": 5.1,
            "Bank of India": 5.15,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.4,
            "Central Bank of India": 5,
            "Indian Bank":	5.1,
            "Indian Overseas Bank": 5.25,
            "Punjab National Bank": 5.1,
            "State Bank of India": 5.1,
            "UCO Bank": 5,
            "Union Bank of India": 5.5,
        },
        1825: {
            "Bank of Baroda": 5.25,
            "Bank of India": 5.15,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.5,
            "Central Bank of India": 5.1,
            "Indian Bank":	5.15,
            "Indian Overseas Bank": 5.25,
            "Punjab National Bank": 5.25,
            "State Bank of India": 5.3,
            "UCO Bank": 5,
            "Union Bank of India": 5.55,
        }, 
        3650: {
            "Bank of Baroda": 5.25,
            "Bank of India": 5.15,
            "Bank of Maharashtra": 4.9,
            "Canara Bank": 5.5,
            "Central Bank of India": 5.1,
            "Indian Bank":	5.15,
            "Indian Overseas Bank": 5.25,
            "Punjab National Bank": 5.25,
            "State Bank of India": 5.4,
            "UCO Bank": 5,
            "Union Bank of India": 5.6,
        }
    },
    fuelPrices: {
        petrolPrices: {
            "Andhra Pradesh": {
                price: 87.24
            },
            "Assam":{
                price: 96.70
            },
            "Bihar":{
                price: 103.18
            },
            "Chhattisgarh":{
                price: 98.92
            },
            "Gujarat":{
                price: 97.58
            },
            "Haryana":{
                price: 98.70
            },
            "Himachal Pradesh":{
                price: 95.85
            },
            "Jammu And Kashmir":{
                price: 101.99
            },
            "Jharkhand":{
                price: 95.94
            },
            "Karnataka":{
                price: 103.88
            },
            "Kerala":{
                price: 101.32
            },
            "Madhya Pradesh":{
                price: 109.28
            },
            "Maharashtra":{
                price: 107.09
            },
            "Odisha":{
                price: 101.72
            },
            "Punjab":{
                price: 99.80
            },
            "Rajasthan":{
                price: 107.74
            },
            "Tamil Nadu":{
                price: 102.08
            },
            "Telangana":{
                price: 104.86
            },
            "Uttar Pradesh":{
                price: 97.91
            },
            "Uttarakhand":{
                price: 97.37
            },
            "West Bengal":{
                price: 101.01
            },
            "NCT Of Delhi":{
                price: 100.91
            }
        },
        dieselPrices: {
            "Andhra Pradesh": {
                price: 80.21
            },
            "Assam":{
                price: 89.22
            },
            "Bihar":{
                price: 95.46
            },
            "Chhattisgarh":{
                price: 97.18
            },
            "Gujarat":{
                price: 96.66
            },
            "Haryana":{
                price: 90.60
            },
            "Himachal Pradesh":{
                price: 87.98
            },
            "Jammu And Kashmir":{
                price: 91.97
            },
            "Jharkhand":{
                price: 94.81
            },
            "Karnataka":{
                price: 94.87
            },
            "Kerala":{
                price: 95.02
            },
            "Madhya Pradesh":{
                price: 98.72
            },
            "Maharashtra":{
                price: 96.64
            },
            "Odisha":{
                price: 97.95
            },
            "Punjab":{
                price: 90.98
            },
            "Rajasthan":{
                price: 99.02
            },
            "Tamil Nadu":{
                price: 94.81
            },
            "Telangana":{
                price: 97.96
            },
            "Uttar Pradesh":{
                price: 90.17
            },
            "Uttarakhand":{
                price: 90.57
            },
            "West Bengal":{
                price: 92.97
            },
            "NCT Of Delhi":{
                price: 89.88
            }
        }
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
        ],
        savingsAccount:[
            {
                question: "Why is it important to have a savings account?",
                answer: "Savings account at bank or post-office provides the safety to your wealth and also give a small interest on your savings. It is always suggested to keep one savings account irrespective of all your investments as savings account keep your money liquid. Thus you can withdraw it at time of emergencies. It is best to keep at least 3 months of your expense in savings account."

            },
            {
                question: "What are different kinds of savings accounts?",
                answer: "Banks provide different kinds of savings accounts depending on your need and usability. There exists salaried savings account, zero balance savings account, minor savings account, senior citizen savings account and regular savings account."
            },
            {
                question: "Is savings account interest taxable?",
                answer: "Interest earnings of up to Rs.10000 accrued on your savings account balance is tax free under Section 80TTA. Higher amounts earned as interest are subject to TDS."
            },
            {
                question: "What documents required to open a savings account?",
                answer: "Documents required are Proof of age and identity (PAN, Voter ID, Passport or Driving license), Photographs	(2 passport-sized photographs) and Proof of address (Driving license, Voter’s ID, Passport or Utility bill). Incase of senior citizen savings account, applicant also need Senior Citizen Card."
            },
            {
                question: "Is there savings account for minors?",
                answer: "For opening a saving account, applicant must be of 18 years or more. Minors can open a savings account only as a joint account with their parent or gaurdian. Joint account for minors is at banks and post office."
            },
            {
                question: "What is savings account eligibility?",
                answer: "Any Indian citizen or foreign citizen residing in India can open a savings account in any Indian Bank. Only criteria is of age eligibility of 18 years or more. Some banks have minimum balance required for the savings account."
            }
        ],
        fixedDeposit:[
            {
                question: "Why are advantages of having a fixed deposit (FD)?",
                answer: "Fixed Deposits or FDs are risk-free investment tool as they provide assured returns. Every bank and NBFCs provide facility of FD with different interest rates and tenures. Some banks even provide other facilities with fixed deposits, like loan on fixed deposits, additional interest for senior citizens and pre-mature usage of FD."
            },
            {
                question: "What is the duration of fixed deposits?",
                answer: "Fixed Deposits or FDs are provided with flexible durations. You can make an FD of as small as 7 days or as long as 10 years. Depending on the tenure the interest rates are mentioned by banks and NBFCs."
            },
            {
                question: "What are fixed deposits interest rates depend on?",
                answer: "Every bank and NBFC has to provide the minimum interest rates on FDs under the regulation of RBI. Apart from this, banks and NBFCs provide additional offeres depending on the tenure of FD and senior citizen interest rates."
            },
            {
                question: "How much loan can I get on my FD?",
                answer: "Banks give credit of 90% of FD amount as loan to the customer with nominal charges."
            },
            {
                question: "Why is it good to take loan on Fixed deposit instead of breaking it?",
                answer: "Fixed Deposit is your promise to the bank to let them use your money till the mentioned duration. But in time of emergency your can ask to break your fixed deposit or take loan over it. Both options are available to user in nominal charges. But it is better to take loan instead of breaking the fixed deposit. One reason is that your FD returns mostly higher and thus breaking it in between will cost you more money than the loan interest."
            },
            {
                question: "Is fiexed deposit (FD) interest taxable?",
                answer: "Fixed Deposit interest is treated as any other earning and thus it is 100% taxable."
            }
        ],
        fuelPrices:[
            {
                question: "What is today's petrol price in India?",
                answer: "Above table is showing statewise today's petrol price in India. Petrol price changes daily at 6:00 AM due to change in global oil price."
            },
            {
                question: "Why is petrol price or diesel price different for each state in India?",
                answer: "Fuel like petrol and diesel are subjected to VAT. Petrol and diesel prices are inclusive of these taxes. VAT is different for each state, thus petrol price and diesel price is different for each state."
            },
            {
                question: "What is today's diesel price in India?",
                answer: "Above table is showing statewise today's diesel price in India. Diesel price changes daily at 6:00 AM due to change in global oil price."
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