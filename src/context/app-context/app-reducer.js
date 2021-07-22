const AppReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER_PHONE_NUMBER':
            return {
                ...state,
                profilesForm:{
                    ...state.profilesForm,
                    phoneNumber: action.payload
                }
            }
        case 'UPDATE_USER_PHONE_EMALID':
            return {
                ...state,
                profilesForm: {
                    ...state.profilesForm,
                    email: action.payload
                }
            }     
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                profilesForm: {},
                profileAdded: true
            }
        case 'UPDATE_BANK_STATEMENT_PHONENUMBER':
            return {
                ...state,
                newBankStatementForm: {
                    ...state.newBankStatementForm,
                    phoneNumber: action.payload
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

