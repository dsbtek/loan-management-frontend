import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppDispatch } from 'app/store';
import { alertError, alertSuccess, alertInfo } from './alert';
import authService from '../services/auth';
import { userT } from './../constant/interface/auth';
import { ParsedUrlQuery } from 'querystring';
import { IRegisterFormValues, ILoginFormValues } from 'constant/interface/forms';


type authT = {
    user: userT,
    loading: boolean,
    hasErrors: boolean,
    error: string,
    message: string,
    type: string,
}
export const initialState: authT = {
    user: {},
    loading: false,
    hasErrors: false,
    error: '',
    message: '',
    type: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        'authRequestFailed': (state, {payload}) =>  { 
            state.loading = false; 
            state.hasErrors = true; 
            state.error = payload; 
        },
        authRequestInProgress: (state, {payload}) => { state.loading = true; state.type = payload; state.error= ''; },
        authRequestSuccessful: (state, {payload}) =>  { state.loading = false; state.hasErrors = false; state.message = payload; },
        userAuthenticated: (state, {payload}) => { state.user = payload;},
        userLoggedOut: (state) => { state.user = {};}
    },
});

export const getIsAuthenticated = (state: RootState) => !!(state.user.user && state.user.user.id);

export const getIsActivated = (state: RootState) => state.user.user && state.user.user.isActive;

export const getUser = (state: RootState) => state.user;

export const getAuthState = (state: RootState, payload: string) => { 
    const loading: boolean = state.user.loading && state.user.type === payload;
    const hasErrors: boolean = state.user.hasErrors && state.user.type === payload;
    const success: boolean = !hasErrors && !loading && state.user.type === payload;
    return { loading , success , hasErrors };
};

export const { authRequestFailed, authRequestInProgress, authRequestSuccessful, userAuthenticated, userLoggedOut} = authSlice.actions;

export default authSlice.reducer;

const handleAuthError = (dispatch: AppDispatch, error: any) => {
    const err = error?.response?.error || error.message;
    dispatch(alertError(error.toString()));
    return dispatch(authRequestFailed(err));
};

const handleAuthInProgress = (dispatch: AppDispatch, type:string) => {
    dispatch(alertInfo('Request in progress'));
    return dispatch(authRequestInProgress(type));
};
const handleAuthSuccess = (dispatch: AppDispatch, message: string) => {
    dispatch(alertSuccess(message));
    return dispatch(authRequestSuccessful(message));
};


export function login(login: ILoginFormValues) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'login');
        try {
            const data = await authService.login({ login });
            dispatch(userAuthenticated(data));
            return handleAuthSuccess(dispatch, 'Login successful');
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}



export function registerUser(data: IRegisterFormValues) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'register');
        try {
            const formData = await authService.register(data);
            return handleAuthSuccess(dispatch, formData.detail);
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}

export function logout() {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'logout');
        try {
            const data = await authService.logout();
            handleAuthSuccess(dispatch, data.statusText);
            return dispatch(userLoggedOut());
        } catch (error) {
            return dispatch(userLoggedOut());
        }
    }; 
}

export function requestPasswordReset(email: string) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'request password reset');
        try {
            const data = await authService.resetPassword({email});
            return handleAuthSuccess(dispatch, data.detail);
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}

export function resetPassword(userId: ParsedUrlQuery, newPassword: string) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'request password reset');
        try {
            const data = await authService.setPassword({userId, newPassword});
            return handleAuthSuccess(dispatch, data.detail);
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}

export function requestVerification(dataString: string) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'Request verification');
        try {
            const data = await authService.requestVerification(dataString);
            return handleAuthSuccess(dispatch, data.detail);
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}

export function verifyEmail(dataString: string) {
    return async ( dispatch: AppDispatch ) => {
        handleAuthInProgress(dispatch, 'verification in progress...');
        try {
            const data = await authService.getStarted(dataString);
            return handleAuthSuccess(dispatch, data.detail);
        } catch (error) {
            return handleAuthError(dispatch, error);
        }
    };
}


