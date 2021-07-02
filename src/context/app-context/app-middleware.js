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
        default: {
            dispatch(action);
            break;
        }
    };
};
