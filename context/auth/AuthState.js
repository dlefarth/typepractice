import AuthContext from './authContext';
import React, { useReducer } from 'react';
import authReducer from './authReducer';
import { SET_TOKEN } from '../actions';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = props => {
    const initialState = {
        //token: localStorage.getItem('token'),
        username: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const setToken = token => {
        setAuthToken(token);
        dispatch({ type: SET_TOKEN, payload: token });
    };

    return (
        <AuthContext.Provider value={{
            token: state.token,
            setToken
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;