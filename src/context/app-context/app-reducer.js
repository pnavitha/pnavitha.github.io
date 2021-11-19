const AppReducer = (state, action) => {
    switch (action.type) { 
        case 'UPDATE_LINKEDIN_URL': 
            return {
                ...state,
                linkedInUrl: action.payload
            }; 
        case 'LINKEDIN_SUBMITTED': 
            console.log("LINKEDIN_SUBMITTED dispatched");
            return {
                ...state,
                linkedInUrl: undefined,
                linkedInSubmitted: true
            };    
        case 'UPDATE_PAYMENT_DESCRIPTION': 
            return {
                ...state,
                payment: {
                    ...state.payment,
                    description: action.payload
                } 
            }  

        default: return state;
    };
};

export default AppReducer;

