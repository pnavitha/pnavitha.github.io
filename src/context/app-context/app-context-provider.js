import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';
import { AppMiddleware } from './app-middleware';

const initialState = {
    profilesForm: {},
    profileAdded: false,
    isLoading: false,
    bankNames: ["Axis Bank", "HDFC Bank", "ICICI", "SBI"],
    msmeLoans: {
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
        "UCO Bank": {
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
        "Indian Bank": {
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
            publicBank: {
                "Bank of Baroda": 0,
                "Bank of India": 0,
                "Bank of Maharashtra": 0,
                "Canara Bank": 0,
                "Central Bank of India": 0,
                "Indian Bank": 0,
                "Indian Overseas Bank": 0,
                "Punjab National Bank": 0,
                "State Bank of India": 0,
                "UCO Bank": 0,
                "Union Bank of India": 0,
            },
            privateBank: {
                "Axis Bank Ltd": 0,
                "Bandhan Bank Ltd": 0,
                "CSB Bank Ltd": 0,
                "City Union Bank Ltd": 0,
                "DCB Bank Ltd": 0,
                "Dhanlaxmi Bank Ltd": 0,
                "Federal Bank Ltd": 0,
                "HDFC Bank Ltd": 0,
                "ICICI Bank Ltd": 0,
                "Induslnd Bank Ltd": 0,
                "IDFC First Bank Ltd": 0,
                "Jammu & Kashmir Bank Ltd": 0,
                "Karnataka Bank Ltd": 0,
                "Karur Vysya Bank Ltd": 0,
                "Kotak Mahindra Bank Ltd": 0,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 0, 
                "Nainital Bank Ltd": 0,
                "RBL Bank Ltd": 0,
                "South Indian Bank Ltd": 0,
                "Tamilnad Mercantile Bank Ltd": 0,
                "YES Bank Ltd": 0,
                "IDBI Bank Ltd": 0,
            }
        },
        14: {
            publicBank: {
                "Bank of Baroda": 2.8,
                "Bank of India": 2.85,
                "Bank of Maharashtra": 2.75,
                "Canara Bank": 2.95,
                "Central Bank of India": 2.75,
                "Indian Bank": 2.9,
                "Indian Overseas Bank": 3.4,
                "Punjab National Bank": 3,
                "State Bank of India": 2.9,
                "UCO Bank": 2.75,
                "Union Bank of India": 3,
            },
            privateBank: {
                "Axis Bank Ltd": 2.5,
                "Bandhan Bank Ltd": 3,
                "CSB Bank Ltd": 3,
                "City Union Bank Ltd": 3,
                "DCB Bank Ltd": 4.55,
                "Dhanlaxmi Bank Ltd": 3.5,
                "Federal Bank Ltd": 2.5,
                "HDFC Bank Ltd": 2.5,
                "ICICI Bank Ltd": 2.5,
                "Induslnd Bank Ltd": 2.75,
                "IDFC First Bank Ltd": 2.75,
                "Jammu & Kashmir Bank Ltd": 3,
                "Karnataka Bank Ltd": 3.4,
                "Karur Vysya Bank Ltd": 3.25,
                "Kotak Mahindra Bank Ltd": 2.5,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.5, 
                "Nainital Bank Ltd": 3.35,
                "RBL Bank Ltd": 3.25,
                "South Indian Bank Ltd": 3.5,
                "Tamilnad Mercantile Bank Ltd": 2.75,
                "YES Bank Ltd": 3.25,
                "IDBI Bank Ltd": 2.7,
            }
        },
        29: {
            publicBank: {
                "Union Bank of India": 3,
                "Bank of Baroda": 2.8,
                "Bank of India": 2.85,
                "Bank of Maharashtra": 2.75,
                "Canara Bank": 2.95,
                "Central Bank of India": 2.75,
                "Indian Bank": 2.9,
                "Indian Overseas Bank": 3.4,
                "Punjab National Bank": 3,
                "State Bank of India": 2.9,
                "UCO Bank": 2.75,
            },
            privateBank: {
                "Axis Bank Ltd": 2.5,
                "Bandhan Bank Ltd": 3,
                "CSB Bank Ltd": 3,
                "City Union Bank Ltd": 3.25,
                "DCB Bank Ltd": 4.55,
                "Dhanlaxmi Bank Ltd": 3.5,
                "Federal Bank Ltd": 2.5,
                "HDFC Bank Ltd": 2.5,
                "ICICI Bank Ltd": 2.5,
                "Induslnd Bank Ltd": 2.75,
                "IDFC First Bank Ltd": 3,
                "Jammu & Kashmir Bank Ltd": 3,
                "Karnataka Bank Ltd": 3.4,
                "Karur Vysya Bank Ltd": 3.25,
                "Kotak Mahindra Bank Ltd": 2.5,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.5, 
                "Nainital Bank Ltd": 3.35,
                "RBL Bank Ltd": 3.75,
                "South Indian Bank Ltd": 3.5,
                "Tamilnad Mercantile Bank Ltd": 3.5,
                "YES Bank Ltd": 3.5,
                "IDBI Bank Ltd": 2.7,
            }
        },
        45: {
            publicBank: {
                "Bank of Baroda": 2.8,
                "Bank of India": 2.85,
                "Bank of Maharashtra": 2.75,
                "Canara Bank": 2.95,
                "Central Bank of India": 2.9,
                "Indian Bank": 2.9,
                "Indian Overseas Bank": 3.4,
                "Punjab National Bank": 3,
                "State Bank of India": 2.9,
                "UCO Bank": 3,
                "Union Bank of India": 3,
            },
            privateBank: {
                "Axis Bank Ltd": 3,
                "Bandhan Bank Ltd": 3,
                "CSB Bank Ltd": 3,
                "City Union Bank Ltd": 3.25,
                "DCB Bank Ltd": 4.55,
                "Dhanlaxmi Bank Ltd": 3.5,
                "Federal Bank Ltd": 2.75,
                "HDFC Bank Ltd": 3,
                "ICICI Bank Ltd": 3,
                "Induslnd Bank Ltd": 3,
                "IDFC First Bank Ltd": 3.5,
                "Jammu & Kashmir Bank Ltd": 3.1,
                "Karnataka Bank Ltd": 3.4,
                "Karur Vysya Bank Ltd": 3.25,
                "Kotak Mahindra Bank Ltd": 2.75,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.5, 
                "Nainital Bank Ltd": 3.35,
                "RBL Bank Ltd": 3.75,
                "South Indian Bank Ltd": 3.5,
                "Tamilnad Mercantile Bank Ltd": 3.75,
                "YES Bank Ltd": 3.5,
                "IDBI Bank Ltd": 2.8,
            }
        },
        90: {
            publicBank: {
                "Bank of Baroda": 3.7,
                "Bank of India": 3.85,
                "Bank of Maharashtra": 3.25,
                "Canara Bank": 3.9,
                "Central Bank of India": 3.25,
                "Indian Bank": 3.05,
                "Indian Overseas Bank": 3.9,
                "Punjab National Bank": 3.25,
                "State Bank of India": 3.9,
                "UCO Bank": 3.75,
                "Union Bank of India": 3.75,
            },
            privateBank: {
                "Axis Bank Ltd": 3,
                "Bandhan Bank Ltd": 3.25,
                "CSB Bank Ltd": 3,
                "City Union Bank Ltd": 3.5,
                "DCB Bank Ltd": 4.5,
                "Dhanlaxmi Bank Ltd": 4,
                "Federal Bank Ltd": 3,
                "HDFC Bank Ltd": 3,
                "ICICI Bank Ltd": 3,
                "Induslnd Bank Ltd": 3.5,
                "IDFC First Bank Ltd": 4,
                "Jammu & Kashmir Bank Ltd": 3.25,
                "Karnataka Bank Ltd": 4.9,
                "Karur Vysya Bank Ltd": 3.25,
                "Kotak Mahindra Bank Ltd": 2.75,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.5, 
                "Nainital Bank Ltd": 4.35,
                "RBL Bank Ltd": 4,
                "South Indian Bank Ltd": 3.75,
                "Tamilnad Mercantile Bank Ltd": 4.25,
                "YES Bank Ltd": 4,
                "IDBI Bank Ltd": 3,
            }
        },
        120: {
            publicBank: {
                "Bank of Baroda": 3.7,
                "Bank of India": 3.85,
                "Bank of Maharashtra": 3.5,
                "Canara Bank": 4,
                "Central Bank of India": 3.9,
                "Indian Bank": 3.95,
                "Indian Overseas Bank": 3.9,
                "Punjab National Bank": 4,
                "State Bank of India": 3.9,
                "UCO Bank": 3.9,
                "Union Bank of India": 4.25,
            },
            privateBank: {
                "Axis Bank Ltd": 3.5,
                "Bandhan Bank Ltd": 3.75,
                "CSB Bank Ltd": 3.5,
                "City Union Bank Ltd": 3.75,
                "DCB Bank Ltd": 5.25,
                "Dhanlaxmi Bank Ltd": 4.25,
                "Federal Bank Ltd": 3.75,
                "HDFC Bank Ltd": 3.5,
                "ICICI Bank Ltd": 3.5,
                "Induslnd Bank Ltd": 4,
                "IDFC First Bank Ltd": 4.5,
                "Jammu & Kashmir Bank Ltd": 4,
                "Karnataka Bank Ltd": 5.1,
                "Karur Vysya Bank Ltd": 3.5,
                "Kotak Mahindra Bank Ltd": 3,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.75, 
                "Nainital Bank Ltd": 4.35,
                "RBL Bank Ltd": 4.5,
                "South Indian Bank Ltd": 4.75,
                "Tamilnad Mercantile Bank Ltd": 5,
                "YES Bank Ltd": 4.5,
                "IDBI Bank Ltd": 3.5,
            }
        },
        180: {
            publicBank: {
                "Bank of Baroda": 3.7,
                "Bank of India": 3.85,
                "Bank of Maharashtra": 3.75,
                "Canara Bank": 4,
                "Central Bank of India": 3.9,
                "Indian Bank": 3.95,
                "Indian Overseas Bank": 4.4,
                "Punjab National Bank": 4,
                "State Bank of India": 3.9,
                "UCO Bank": 3.9,
                "Union Bank of India": 4.3,
            },
            privateBank: {
                "Axis Bank Ltd": 3.5,
                "Bandhan Bank Ltd": 3.75,
                "CSB Bank Ltd": 3.5,
                "City Union Bank Ltd": 3.75,
                "DCB Bank Ltd": 5.25,
                "Dhanlaxmi Bank Ltd": 4.25,
                "Federal Bank Ltd": 3.75,
                "HDFC Bank Ltd": 3.5,
                "ICICI Bank Ltd": 3.5,
                "Induslnd Bank Ltd": 4.5,
                "IDFC First Bank Ltd": 4.5,
                "Jammu & Kashmir Bank Ltd": 4,
                "Karnataka Bank Ltd": 5.1,
                "Karur Vysya Bank Ltd": 3.75,
                "Kotak Mahindra Bank Ltd": 3.25,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 2.75, 
                "Nainital Bank Ltd": 4.35,
                "RBL Bank Ltd": 4.5,
                "South Indian Bank Ltd": 4.75,
                "Tamilnad Mercantile Bank Ltd": 5,
                "YES Bank Ltd": 4.5,
                "IDBI Bank Ltd": 3.5,
            }
        },
        270: {
            publicBank: {
                "Bank of Baroda": 4.3,
                "Bank of India": 4.35,
                "Bank of Maharashtra": 4,
                "Canara Bank": 4.45,
                "Central Bank of India": 4.25,
                "Indian Bank": 4.4,
                "Indian Overseas Bank": 4.9,
                "Punjab National Bank": 4.4,
                "State Bank of India": 4.4,
                "UCO Bank": 4.7,
                "Union Bank of India": 4.5,
            },
            privateBank: {
                "Axis Bank Ltd": 4.4,
                "Bandhan Bank Ltd": 4,
                "CSB Bank Ltd": 4.25,
                "City Union Bank Ltd": 4,
                "DCB Bank Ltd": 5.7,
                "Dhanlaxmi Bank Ltd": 4.5,
                "Federal Bank Ltd": 4,
                "HDFC Bank Ltd": 4.4,
                "ICICI Bank Ltd": 4.4,
                "Induslnd Bank Ltd": 5,
                "IDFC First Bank Ltd": 5.25,
                "Jammu & Kashmir Bank Ltd": 4.4,
                "Karnataka Bank Ltd": 5.1,
                "Karur Vysya Bank Ltd": 4,
                "Kotak Mahindra Bank Ltd": 4.4,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 3, 
                "Nainital Bank Ltd": 5.05,
                "RBL Bank Ltd": 5,
                "South Indian Bank Ltd": 4.75,
                "Tamilnad Mercantile Bank Ltd": 5.25,
                "YES Bank Ltd": 5,
                "IDBI Bank Ltd": 4.3,
            }
        },
        364: {
            publicBank: {
                "Bank of Baroda": 4.4,
                "Bank of India": 4.35,
                "Bank of Maharashtra": 4.25,
                "Canara Bank": 4.45,
                "Central Bank of India": 4.25,
                "Indian Bank": 4.4,
                "Indian Overseas Bank": 4.9,
                "Punjab National Bank": 4.5,
                "State Bank of India": 4.4,
                "UCO Bank": 4.7,
                "Union Bank of India": 4.5,
            },
            privateBank: {
                "Axis Bank Ltd": 4.4,
                "Bandhan Bank Ltd": 4,
                "CSB Bank Ltd": 4.25,
                "City Union Bank Ltd": 5,
                "DCB Bank Ltd": 5.7,
                "Dhanlaxmi Bank Ltd": 4.5,
                "Federal Bank Ltd": 4.4,
                "HDFC Bank Ltd": 4.4,
                "ICICI Bank Ltd": 4.4,
                "Induslnd Bank Ltd": 5.5,
                "IDFC First Bank Ltd": 5.25,
                "Jammu & Kashmir Bank Ltd": 4.5,
                "Karnataka Bank Ltd": 5.1,
                "Karur Vysya Bank Ltd": 4.25,
                "Kotak Mahindra Bank Ltd": 4.4,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 3.5, 
                "Nainital Bank Ltd": 5.15,
                "RBL Bank Ltd": 5.4,
                "South Indian Bank Ltd": 4.75,
                "Tamilnad Mercantile Bank Ltd": 5.25,
                "YES Bank Ltd": 5.25,
                "IDBI Bank Ltd": 4.3,
            }
        },
        365: {
            publicBank: {
                "Bank of Baroda": 4.9,
                "Bank of India": 5.1,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.2,
                "Central Bank of India": 4.9,
                "Indian Bank": 5,
                "Indian Overseas Bank": 5.2,
                "Punjab National Bank": 5.1,
                "State Bank of India": 5,
                "UCO Bank": 4.9,
                "Union Bank of India": 5.25,
            },
            privateBank: {
                "Axis Bank Ltd": 5.1,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5,
                "City Union Bank Ltd": 5.25,
                "DCB Bank Ltd": 5.8,
                "Dhanlaxmi Bank Ltd": 5.25,
                "Federal Bank Ltd": 5.1,
                "HDFC Bank Ltd": 4.9,
                "ICICI Bank Ltd": 4.9,
                "Induslnd Bank Ltd": 6,
                "IDFC First Bank Ltd": 5.5,
                "Jammu & Kashmir Bank Ltd": 5.1,
                "Karnataka Bank Ltd": 5.2,
                "Karur Vysya Bank Ltd": 5.25,
                "Kotak Mahindra Bank Ltd": 4.5,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 5, 
                "Nainital Bank Ltd": 5.25,
                "RBL Bank Ltd": 6.1,
                "South Indian Bank Ltd": 5.4,
                "Tamilnad Mercantile Bank Ltd": 5.5,
                "YES Bank Ltd": 6,
                "IDBI Bank Ltd": 4.9,
            }
        },
        547: {
            publicBank: {
                "Bank of Baroda": 5,
                "Bank of India": 5.1,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.2,
                "Central Bank of India": 4.9,
                "Indian Bank": 5.1,
                "Indian Overseas Bank": 5.2,
                "Punjab National Bank": 5.1,
                "State Bank of India": 5,
                "UCO Bank": 5,
                "Union Bank of India": 5.3,
            },
            privateBank: {
                "Axis Bank Ltd": 5.1,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5,
                "City Union Bank Ltd": 5.25,
                "DCB Bank Ltd": 5.8,
                "Dhanlaxmi Bank Ltd": 5.25,
                "Federal Bank Ltd": 5.1,
                "HDFC Bank Ltd": 4.9,
                "ICICI Bank Ltd": 4.9,
                "Induslnd Bank Ltd": 6,
                "IDFC First Bank Ltd": 5.5,
                "Jammu & Kashmir Bank Ltd": 5.1,
                "Karnataka Bank Ltd": 5.2,
                "Karur Vysya Bank Ltd": 5.25,
                "Kotak Mahindra Bank Ltd": 4.5,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 5, 
                "Nainital Bank Ltd": 5.25,
                "RBL Bank Ltd": 6.1,
                "South Indian Bank Ltd": 5.4,
                "Tamilnad Mercantile Bank Ltd": 5.6,
                "YES Bank Ltd": 6,
                "IDBI Bank Ltd": 5,
            }
        },
        730: {
            publicBank: {
                "Bank of Baroda": 5,
                "Bank of India": 5.1,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.2,
                "Central Bank of India": 4.9,
                "Indian Bank": 5.1,
                "Indian Overseas Bank": 5.2,
                "Punjab National Bank": 5.1,
                "State Bank of India": 5,
                "UCO Bank": 5,
                "Union Bank of India": 5.3,
            },
            privateBank: {
                "Axis Bank Ltd": 5.25,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5,
                "City Union Bank Ltd": 5.5,
                "DCB Bank Ltd": 6,
                "Dhanlaxmi Bank Ltd": 5.25,
                "Federal Bank Ltd": 5.1,
                "HDFC Bank Ltd": 4.9,
                "ICICI Bank Ltd": 5,
                "Induslnd Bank Ltd": 6,
                "IDFC First Bank Ltd": 5.5,
                "Jammu & Kashmir Bank Ltd": 5.1,
                "Karnataka Bank Ltd": 5.2,
                "Karur Vysya Bank Ltd": 5.25,
                "Kotak Mahindra Bank Ltd": 4.8,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 5.5, 
                "Nainital Bank Ltd": 5.35,
                "RBL Bank Ltd": 6.1,
                "South Indian Bank Ltd": 5.4,
                "Tamilnad Mercantile Bank Ltd": 5.5,
                "YES Bank Ltd": 6,
                "IDBI Bank Ltd": 5,
            }
        },
        1095: {
            publicBank: {
                "Bank of Baroda": 5.1,
                "Bank of India": 5.15,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.4,
                "Central Bank of India": 5,
                "Indian Bank": 5.1,
                "Indian Overseas Bank": 5.25,
                "Punjab National Bank": 5.1,
                "State Bank of India": 5.1,
                "UCO Bank": 5,
                "Union Bank of India": 5.5,
            },
            privateBank: {
                "Axis Bank Ltd": 5.4,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5,
                "City Union Bank Ltd": 5.25,
                "DCB Bank Ltd": 6,
                "Dhanlaxmi Bank Ltd": 5.4,
                "Federal Bank Ltd": 5.35,
                "HDFC Bank Ltd": 5.15,
                "ICICI Bank Ltd": 5.15,
                "Induslnd Bank Ltd": 6.5,
                "IDFC First Bank Ltd": 5.75,
                "Jammu & Kashmir Bank Ltd": 5.2,
                "Karnataka Bank Ltd": 5.5,
                "Karur Vysya Bank Ltd": 5.5,
                "Kotak Mahindra Bank Ltd": 5,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 4.75, 
                "Nainital Bank Ltd": 5.35,
                "RBL Bank Ltd": 6.1,
                "South Indian Bank Ltd": 5.4,
                "Tamilnad Mercantile Bank Ltd": 5.5,
                "YES Bank Ltd": 6,
                "IDBI Bank Ltd": 5.1,
            }
        },
        1825: {
            publicBank: {
                "Bank of Baroda": 5.25,
                "Bank of India": 5.15,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.5,
                "Central Bank of India": 5.1,
                "Indian Bank": 5.15,
                "Indian Overseas Bank": 5.25,
                "Punjab National Bank": 5.25,
                "State Bank of India": 5.3,
                "UCO Bank": 5,
                "Union Bank of India": 5.55,
            },
            privateBank: {
                "Axis Bank Ltd": 5.4,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5.25,
                "City Union Bank Ltd": 5.25,
                "DCB Bank Ltd": 6.5,
                "Dhanlaxmi Bank Ltd": 5.5,
                "Federal Bank Ltd": 5.35,
                "HDFC Bank Ltd": 5.3,
                "ICICI Bank Ltd": 5.35,
                "Induslnd Bank Ltd": 6,
                "IDFC First Bank Ltd": 6,
                "Jammu & Kashmir Bank Ltd": 5.3,
                "Karnataka Bank Ltd": 5.5,
                "Karur Vysya Bank Ltd": 5.5,
                "Kotak Mahindra Bank Ltd": 5.1,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 5.5, 
                "Nainital Bank Ltd": 5.35,
                "RBL Bank Ltd": 6.3,
                "South Indian Bank Ltd": 5.5,
                "Tamilnad Mercantile Bank Ltd": 5.25,
                "YES Bank Ltd": 6.25,
                "IDBI Bank Ltd": 5.25,
            }
        },
        3650: {
            publicBank: {
                "Bank of Baroda": 5.25,
                "Bank of India": 5.15,
                "Bank of Maharashtra": 4.9,
                "Canara Bank": 5.5,
                "Central Bank of India": 5.1,
                "Indian Bank": 5.15,
                "Indian Overseas Bank": 5.25,
                "Punjab National Bank": 5.25,
                "State Bank of India": 5.4,
                "UCO Bank": 5,
                "Union Bank of India": 5.6,
            },
            privateBank: {
                "Axis Bank Ltd": 5.75,
                "Bandhan Bank Ltd": 5,
                "CSB Bank Ltd": 5.75,
                "City Union Bank Ltd": 5.25,
                "DCB Bank Ltd": 6.5,
                "Dhanlaxmi Bank Ltd": 5.6,
                "Federal Bank Ltd": 5.6,
                "HDFC Bank Ltd": 5.5,
                "ICICI Bank Ltd": 5.5,
                "Induslnd Bank Ltd": 6,
                "IDFC First Bank Ltd": 5.75,
                "Jammu & Kashmir Bank Ltd": 5.3,
                "Karnataka Bank Ltd": 5.6,
                "Karur Vysya Bank Ltd": 5.75,
                "Kotak Mahindra Bank Ltd": 5.3,
                "Lakshmi Vilas Bank Ltd (Now DBS)": 5.5, 
                "Nainital Bank Ltd": 5.35,
                "RBL Bank Ltd": 6,
                "South Indian Bank Ltd": 5.5,
                "Tamilnad Mercantile Bank Ltd": 5.25,
                "YES Bank Ltd": 6.5,
                "IDBI Bank Ltd": 5.25,
            }
        }
    },
    fixedDepositInterestLinks: {
        publicBanks: {
            "Bank of Baroda": "https://www.bankofbaroda.in/interest-rates-charges.htm",
            "Bank of India": "https://www.bankofindia.co.in/BaseRate",
            "Bank of Maharashtra": "https://www.bankofmaharashtra.in/interest_rates",
            "Canara Bank": "https://www.canarabank.com/User_page.aspx?othlink=9",
            "Central Bank of India": "https://www.centralbankofindia.co.in/en/interest-rates-on-deposit",
            "Indian Bank": "https://www.indianbank.in/departments/deposit-rates/#!",
            "Indian Overseas Bank":	"https://www.iob.in/Domestic_Rates",
            "Punjab National Bank":	"https://www.pnbindia.in/Interest-Rates-Deposit.html",
            "State Bank of India":	"https://sbi.co.in/web/interest-rates/deposit-rates/retail-domestic-term-deposits",
            "UCO Bank":	"https://www.ucobank.com/english/Interest-Rates.aspx",
            "Union Bank of India":	"https://www.unionbankofindia.co.in/english/interest-rate.aspx"
        },
        privateBanks: {
            "Axis Bank Ltd": "https://www.axisbank.com/interest-rate-on-deposits",
            "Bandhan Bank Ltd": "https://bandhanbank.com/rates-charges",
            "CSB Bank Ltd": "https://www.csb.co.in/interest-rates#domestic_deposites",
            "City Union Bank Ltd": "https://www.cityunionbank.com/deposit-interest-rate",
            "DCB Bank Ltd": "https://www.dcbbank.com/open-fixed-deposit-rates",
            "Dhanlaxmi Bank Ltd": "https://www.dhanbank.com/header/interest_rates.aspx",
            "Federal Bank Ltd": "https://www.federalbank.co.in/web/guest/deposit-rate",
            "HDFC Bank Ltd": "https://www.hdfcbank.com/personal/resources/rates",       
            "ICICI Bank Ltd": "https://www.icicibank.com/Personal-Banking/account-deposit/fixed-deposit/fd-interest-rates.page?#toptitle",
            "Induslnd Bank Ltd": "https://www.indusind.com/in/en/personal/rates.html#saving-bank-account-interest-rate",
            "IDFC First Bank Ltd": "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/interest-rate/Interest-Rate-Retail.pdf",
            "Jammu & Kashmir Bank Ltd": "https://www.jkbank.com/others/common/intrates.php",
            "Karnataka Bank Ltd": "https://karnatakabank.com/personal/term-deposits/interest-rates",
            "Karur Vysya Bank Ltd": "https://www.kvb.co.in/personal/deposits/fixed-deposits/",
            "Kotak Mahindra Bank Ltd": "https://www.kotak.com/en/rates/interest-rates.html",
            "Lakshmi Vilas Bank Ltd ( Now DBS)": "https://www.lvbank.com/interest-rate.aspx#",
            "Nainital Bank Ltd": "https://www.nainitalbank.co.in/english/interest_rate.aspx",
            "RBL Bank Ltd": "https://www.rblbank.com/interest-rates",
            "South Indian Bank Ltd": "https://www.southindianbank.com/interestRate/interestRateList.aspx",
            "Tamilnad Mercantile Bank Ltd": "https://www.tmb.in/deposit-interest-rates.aspx",
            "YES Bank Ltd": "https://www.yesbank.in/personal-banking/yes-individual/deposits/fixed-deposit-residents",
            "IDBI Bank Ltd": "https://www.idbibank.in/interest-rates.asp"
        }
    },
    fuelPrices: {
        petrolPrices: {
            "Andhra Pradesh": {
                price: 87.24
            },
            "Assam": {
                price: 96.70
            },
            "Bihar": {
                price: 103.18
            },
            "Chhattisgarh": {
                price: 98.92
            },
            "Gujarat": {
                price: 97.58
            },
            "Haryana": {
                price: 98.70
            },
            "Himachal Pradesh": {
                price: 95.85
            },
            "Jammu And Kashmir": {
                price: 101.99
            },
            "Jharkhand": {
                price: 95.94
            },
            "Karnataka": {
                price: 103.88
            },
            "Kerala": {
                price: 101.32
            },
            "Madhya Pradesh": {
                price: 109.28
            },
            "Maharashtra": {
                price: 107.09
            },
            "Odisha": {
                price: 101.72
            },
            "Punjab": {
                price: 99.80
            },
            "Rajasthan": {
                price: 107.74
            },
            "Tamil Nadu": {
                price: 102.08
            },
            "Telangana": {
                price: 104.86
            },
            "Uttar Pradesh": {
                price: 97.91
            },
            "Uttarakhand": {
                price: 97.37
            },
            "West Bengal": {
                price: 101.01
            },
            "NCT Of Delhi": {
                price: 100.91
            }
        },
        dieselPrices: {
            "Andhra Pradesh": {
                price: 80.21
            },
            "Assam": {
                price: 89.22
            },
            "Bihar": {
                price: 95.46
            },
            "Chhattisgarh": {
                price: 97.18
            },
            "Gujarat": {
                price: 96.66
            },
            "Haryana": {
                price: 90.60
            },
            "Himachal Pradesh": {
                price: 87.98
            },
            "Jammu And Kashmir": {
                price: 91.97
            },
            "Jharkhand": {
                price: 94.81
            },
            "Karnataka": {
                price: 94.87
            },
            "Kerala": {
                price: 95.02
            },
            "Madhya Pradesh": {
                price: 98.72
            },
            "Maharashtra": {
                price: 96.64
            },
            "Odisha": {
                price: 97.95
            },
            "Punjab": {
                price: 90.98
            },
            "Rajasthan": {
                price: 99.02
            },
            "Tamil Nadu": {
                price: 94.81
            },
            "Telangana": {
                price: 97.96
            },
            "Uttar Pradesh": {
                price: 90.17
            },
            "Uttarakhand": {
                price: 90.57
            },
            "West Bengal": {
                price: 92.97
            },
            "NCT Of Delhi": {
                price: 89.88
            }
        }
    },
    frequentlyAskedQuestions: {
        msmeLoans: [
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
        savingsAccount: [
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
        fixedDeposit: [
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
                question: "Is fixed deposit (FD) interest taxable?",
                answer: "Fixed Deposit interest is treated as any other earning and thus it is 100% taxable."
            }
        ],
        fuelPrices: [
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

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const middlerware = AppMiddleware(dispatch, state);

    return (
        <AppContext.Provider value={[state, middlerware, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext(initialState);

export default AppContextProvider