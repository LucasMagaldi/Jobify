import React, { useState, useReducer, useContext } from "react";
import { DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '', 
    alertType: ''
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT})
    }

    return (
        <AppContext.Provider value={{...state, displayAlert }}>
            {children}
        </AppContext.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext)
}


export { AppProvider, initialState, useAppContext }