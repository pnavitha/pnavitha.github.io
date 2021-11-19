export const AppMiddleware = (dispatch, state) => (action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            (async () => {
                const payload = {
                    feedback: {
                        button: action.payload
                    },
                    action: "SUBMIT_FEEDBACK"
                };

                await fetch('https://q44f17qqyi.execute-api.ap-south-1.amazonaws.com/prod/users', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });
            })();
            break;
        case 'SUBMIT_LINKEDIN_URL':
            console.log("linkedInUrl: ", state.linkedInUrl);
            if(state.linkedInUrl && state.linkedInUrl.length > 0){
            (async () => {
                const payload = {
                    feedback: {
                        linkedInUrl: state.linkedInUrl
                    },
                    action: "SUBMIT_FEEDBACK"
                };

                await fetch('https://q44f17qqyi.execute-api.ap-south-1.amazonaws.com/prod/users', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });
                dispatch({ type: "LINKEDIN_SUBMITTED" })
            })();
            }
            break;    
        default: {
            dispatch(action);
            break;
        }
    };
};
