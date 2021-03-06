import axios from "axios";
import React, { useState, useReducer, useContext } from "react";
import mainApi from "../services/axiosApi";

import { DISPLAY_ALERT, CLEAR_ALERT,
     REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, 
     REGISTER_USER_ERROR  } 
     from "./actions";

import reducer from "./reducer";

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '', 
    alertType: '',
    user: null,
    token: null,
    userLocation: '',
    jobLocation: ''
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT});
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(()=>{
            dispatch({ type: CLEAR_ALERT })
        }, 3000)

    }


     const registerUser = async(currentUser) => {
         dispatch({type: REGISTER_USER_BEGIN});
         try {
            console.log(currentUser);
            //const response = await mainApi.post('/auth/register', currentUser);
            console.log("Register")
            //console.log(response);
           // const { user, token , location } = response.data;
            dispatch({

            })
         } catch (error) {
             
         }
     }

    return (
        <AppContext.Provider value={{...state, displayAlert, registerUser }}>
            {children}
        </AppContext.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext)
}


export { AppProvider, initialState, useAppContext }