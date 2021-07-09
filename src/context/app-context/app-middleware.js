export const AppMiddleware = (dispatch, state) => (action) => {
    switch (action.type) {
        case 'NAVIGATE_TO_HOME_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_HOME' });
            break;
        case 'NAVIGATE_TO_ABOUT_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_ABOUT' });
            break;
        case 'NAVIGATE_TO_HOW_IT_WORKS':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_HOW_IT_WORKS' });
            break;
        case 'NAVIGATE_TO_PROJECT_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_PROJECT' });
            break;
        case 'NAVIGATE_TO_REGISTER_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_REGISTER' });
            break;
        case 'NAVIGATE_TO_BLOGS_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_BLOGS' });
            break;
        case 'NAVIGATE_TO_HELP_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_CONTACTUS' });
            break;
        case 'NAVIGATE_TO_LETSCONNECT_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_LETSCONNECT' });
            break;   
        case 'NAVIGATE_TO_LOGIN_PAGE':
            dispatch({ type: 'CHANGE_ACTIVE_MENU_TO_LOGIN' });
            break;
        case 'REGISTER':
            if (state.profilesForm && 
                (state.profilesForm.phoneNumber && 
                state.profilesForm.phoneNumber.trim().length >= 10 &&
                state.profilesForm.email && 
                state.profilesForm.email.trim().length > 5)) {
                (async () => {

                    dispatch({ type: 'LOADING_IN_PROGRESS' });
                    const payload = {
                        member: {
                            phoneNumber: state.profilesForm.phoneNumber,
                            email: state.profilesForm.email.toLowerCase(),
                        },
                        action: "REGISTER"
                    }
                    const response = await fetch('https://i5870mwfv5.execute-api.ap-southeast-1.amazonaws.com/prod/members', {
                        method: 'POST',
                        body: JSON.stringify(payload)
                    });
                    const responseJson = await response.json();
                    dispatch({ type: 'LOADING_SUCCESS' });
                    if (responseJson.statusCode === 200) {
                        dispatch({ type: 'REGISTER_SUCCESS' });
                    }
                })();
            }
            break; 
        case 'UPLOAD_PDF_AND_ANALYZE':
            (async () => {

                dispatch({ type: 'LOADING_IN_PROGRESS' });
                //  const payload = {
                //     base64Pdf: action.payload,
                //     bankName: state.newBankStatementForm.selectedBankName  
                //     openCode: state.newBankStatementForm.bankStatementPassword 
                //     action: "UPLOAD_FILE"
                // }
                // console.log("payload: ", payload);
                // const response = await fetch('https://i5870mwfv5.execute-api.ap-southeast-1.amazonaws.com/prod/notes', {
                //     method: 'POST',
                //     body: JSON.stringify(payload),
                // });

                // const responseJson = await response.json();
                // console.log("response: ", responseJson);
                dispatch({ type: 'LOADING_SUCCESS' });
                // if (responseJson.statusCode === 200) {
                //     dispatch({ type: 'LOGIN_SUCCESS' });
                // }
            })(); 
        case 'CALCULATE_FIXED_DEPOSIT_RATES':
            dispatch({ type: 'CLEAR_FIXED_DEPOSIT_RATES_RESULT' , payload: banksRates});
            const totalFixedDepositDays = getTotalDays(state.fixedDepositDuration);
            if(totalFixedDepositDays <= 0)
                return;

            let bankFdDayMap = 999999999;
            Object.keys(state.fixedDeposit).forEach((maxDaysCount) => {
                if(Number(maxDaysCount) >= Number(totalFixedDepositDays) && Number(maxDaysCount) < Number(bankFdDayMap))
                {   
                    bankFdDayMap = maxDaysCount;
                }
            });
            if(bankFdDayMap == 999999999) {
                return;
            }
            
            var banksRates = Object.entries(state.fixedDeposit[bankFdDayMap]);
            banksRates.sort((bank1, bank2) => { return bank2[1] - bank1[1];});
            dispatch({ type: 'ADD_FIXED_DEPOSIT_RATES_RESULT' , payload: banksRates});
            return;
        case 'UPDATE_BANKWISE_FIXED_DEPOSIT':
            const result = {};
            Object.entries(state.fixedDeposit).map(([duration, banksInterest]) => {
                Object.entries(banksInterest).map(([bankName, interestRate]) => {
                    if(result[bankName] == undefined) {
                        result[bankName] = {};
                    }
                    console.log("bank data: ", bankName + " " + duration);

                    result[bankName][duration] = interestRate;
                })
            });   
            dispatch({ type: 'ADD_BANKWISE_FIXED_DEPOSIT_RESULT' , payload: result}); 
        default: {
            dispatch(action);
            break;
        }
    };
};

const getTotalDays = (fixedDepositDuration) => {
    let result = 0;
    if(fixedDepositDuration.years !== "")
        result += Number(365 * fixedDepositDuration.years);
    if(fixedDepositDuration.months !== "")    
        result += Number(30 * fixedDepositDuration.months);
    if(fixedDepositDuration.days != "")     
        result += Number(fixedDepositDuration.days);

    console.log("result days: " + result);        
    return result;    
}