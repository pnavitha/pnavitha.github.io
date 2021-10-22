const AppReducer = (state, action) => {
    switch (action.type) { 
        case 'UPDATE_PAYMENT_AMOUNT': 
            return {
                ...state,
                payment: {
                    ...state.payment,
                    amount: action.payload
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
            
        default: return state;
    };
};

export default AppReducer;

