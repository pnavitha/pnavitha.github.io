const AppReducer = (state, action) => {
    switch (action.type) { 
        case 'UPDATE_PAYMENT_AMOUNT': 
            return {
                ...state,
                payment: {
                    ...state.payment,
                    amount: parseInt(action.payload)
                }
            }; 
        case 'UPDATE_PAYMENT_CURRENCY': 
            return {
                ...state,
                payment: {
                    ...state.payment,
                    currency: action.payload
                }
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

