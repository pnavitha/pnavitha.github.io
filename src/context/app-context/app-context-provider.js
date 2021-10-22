import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';
import { AppMiddleware } from './app-middleware';

const initialState = {
    profile: {},
    payment: {}
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