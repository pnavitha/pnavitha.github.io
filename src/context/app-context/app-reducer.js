const AppReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BANK_STATEMENT_PHONENUMBER':
            return {
                ...state,
                newBankStatementForm: {
                    ...state.newBankStatementForm,
                    phoneNumber: action.payload
                },
                profile: {
                    phoneNumber: action.payload
                },
                error: {
                    bankStatementError: undefined 
                }
            }    
        case 'UPDATE_BANK_STATEMENT_PASSWORD':
            return {
                ...state,
                newBankStatementForm: {
                    ...state.newBankStatementForm,
                    bankStatementPassword: action.payload
                }
            }
        case 'UPDATE_BANK_NAME':
            return {
                ...state,
                newBankStatementForm:{
                    ...state.newBankStatementForm,
                    selectedBankName: action.payload
                }
            }
        case 'BANKSTATEMENT_ANALYSIS_IN_PROGRESS':
            return {
                ...state,
                bankStatementAnalysis: undefined,
                newBankStatementForm:{
                    ...state.newBankStatementForm,
                    inProgress: true,
                },
                error: {
                    bankStatementError: undefined 
                }
            }    
        case 'ADD_DETAILED_TRANSACTIONS':
            return {
                ...state,
                bankStatementAnalysis: action.payload
            }        
        case 'BANKSTATEMENT_ANALYSIS_FINISHED':
            return {
                ...state,
                newBankStatementForm: undefined
            }   
        case 'BANKSTATEMENT_ANALYSIS_FAILURE':
            return {
                ...state,
                error: {
                    bankStatementError: "Select valid bank statement pdf and phone number."
                }
            }         
        case 'UPDATE_FIXED_DEPOSIT_YEAR':
            return {
                ...state,
                fixedDepositDuration:{
                    ...state.fixedDepositDuration,
                    years: action.payload
                }
            }  
        case 'UPDATE_FIXED_DEPOSIT_MONTH':
            return {
                ...state,
                fixedDepositDuration:{
                    ...state.fixedDepositDuration,
                    months: action.payload
                }
            }  
        case 'UPDATE_FIXED_DEPOSIT_DAY':
            return {
                ...state,
                fixedDepositDuration:{
                    ...state.fixedDepositDuration,
                    days: action.payload
                }
            } 
        case 'ADD_FIXED_DEPOSIT_RATES_RESULT':
            return {
                ...state,
                fixedDepositRatesResult: action.payload
            } 
        case 'CLEAR_FIXED_DEPOSIT_RATES_RESULT':
            return {
                ...state,
                fixedDepositRatesResult: undefined
            }  
        case 'ADD_BANKWISE_FIXED_DEPOSIT_RESULT':
            return {
                ...state,
                bankwiseData: action.payload
            }                   
        default: return state;
    };
};

export default AppReducer;

