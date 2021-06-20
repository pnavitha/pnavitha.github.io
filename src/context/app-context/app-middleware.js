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
            if (state.registerForm && 
                state.registerForm.phoneNumber && 
                state.registerForm.phoneNumber.trim().length == 10 &&
                state.registerForm.email && 
                state.registerForm.email.trim().length > 5) {
                (async () => {

                    dispatch({ type: 'LOADING_IN_PROGRESS' });
                    const payload = {
                        member: {
                            username: state.registerForm.username,
                            email: state.registerForm.email.toLowerCase(),
                            passcode: state.registerForm.passcode,
                        },
                        action: "REGISTER"
                    }
                    // const response = await fetch('https://i5870mwfv5.execute-api.ap-southeast-1.amazonaws.com/prod/members', {
                    //     method: 'POST',
                    //     body: JSON.stringify(payload)
                    // });
                    // const responseJson = await response.json();
                    dispatch({ type: 'LOADING_SUCCESS' });
                    // if (responseJson.statusCode === 200) {
                        dispatch({ type: 'REGISTER_SUCCESS' });
                    // }
                })();
            }
            break;
        case 'LOGIN':
            if (state.loginForm && 
                state.loginForm.phoneNumber && 
                state.loginForm.phoneNumber.trim().length == 10 &&
                state.loginForm.passcode && 
                state.loginForm.passcode.trim().length > 0) {
                (async () => {

                    dispatch({ type: 'LOADING_IN_PROGRESS' });
                    const payload = {
                        member: {
                            username: state.registerForm.username,
                            passcode: state.registerForm.passcode,
                        },
                        action: "LOGIN"
                    }
                    // const response = await fetch('https://i5870mwfv5.execute-api.ap-southeast-1.amazonaws.com/prod/members', {
                    //     method: 'POST',
                    //     body: JSON.stringify(payload)
                    // });
                    // const responseJson = await response.json();
                    dispatch({ type: 'LOADING_SUCCESS' });
                    // if (responseJson.statusCode === 200) {
                        dispatch({ type: 'LOGIN_SUCCESS' });
                    // }
                })();
            }
            break; 
        case 'UPLOAD_PDF_AND_ANALYZE':
            console.log("in middleware with action: ", action);
            (async () => {

                dispatch({ type: 'LOADING_IN_PROGRESS' });
                // const payload = {
                //     base64Pdf: action.payload,
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
        default: {
            dispatch(action);
            break;
        }
    };
};

function similarity(s1, s2) {
    if(!s1 || !s2) {
        return 0;
    }
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return ((longerLength - editDistance(longer, shorter)) * 100 / parseFloat(longerLength)).toFixed(4);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = [];
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i === 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}