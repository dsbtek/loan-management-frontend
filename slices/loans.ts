import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState, AppDispatch } from 'app/store';
import { alertError, alertSuccess, alertInfo } from './alert';
import loanService from '../services/loan';

export const initialState = {
    records: [],
    loading: false,
    hasErrors: false,
    total: 0,
    type: 'fetch loans',
};



const loanSlice = createSlice({
    name: 'loans',
    initialState,
    reducers: {
        'loanRequestFailed': (state, {payload}) =>  { 
            state.loading = false; 
            state.hasErrors = true; 
        },
        loanRequestInProgress: (state, {payload}) => { 
            state.loading = true;
            state.type = payload;
        },
        fetchLoansSuccessful: (state, {payload}) =>  { 
            state.loading = false; 
            state.hasErrors = false; 
            state.records = payload.records;
            state.total = payload.count;
        },
    },
});


export const getLoans = (state: RootState) => state.loans;

export const getLoanState = (state: RootState, payload: string) => { 
    const loading: boolean = state.loans.loading && state.loans.type === payload;
    const hasErrors: boolean = state.loans.hasErrors && state.loans.type === payload;
    const success: boolean = !hasErrors && !loading && state.loans.type === payload;
    return { loading , success , hasErrors };
};
export const { loanRequestFailed, loanRequestInProgress, fetchLoansSuccessful,} = loanSlice.actions;

export default loanSlice.reducer;

const handleLoanError = (dispatch: AppDispatch, error: any) => {
    const err = error?.response?.error || error.message;
    dispatch(alertError(error.toString()));
    return dispatch(loanRequestFailed(err));
};

const handleLoanInProgress = (dispatch: AppDispatch, type:string) => {
    dispatch(alertInfo('Request in progress'));
    return dispatch(loanRequestInProgress(type));
};

const handleLoanSuccess = (dispatch: AppDispatch, message: string) => dispatch(alertSuccess(message));


export function fetchLoans(query: any, type: string ) {
    return async ( dispatch: AppDispatch ) => {
        dispatch(loanRequestInProgress(type));
        try {
            const data = await loanService.getLoans(query);
            return dispatch(fetchLoansSuccessful(data));
        } catch (error) {
            return handleLoanError(dispatch, error);
        }
    };
}

export function createUser(firstName: string, lastName: string, newLoanUserNumbers: string[], newLoanUserEmails: string[]) {
    return async ( dispatch: AppDispatch ) => {
        handleLoanInProgress(dispatch, 'create new loan user');
        const user = {
            firstName,
            lastName,
            newLoanUserEmails,
            newLoanUserNumbers
        };
        try {
            const data = await loanService.createLoanUser(user);
            return handleLoanSuccess(dispatch, data.detail);
        } catch (error) {
            return handleLoanError(dispatch, error);
        }
    };
}

export function createLoan(user: string[]) {
    return async ( dispatch: AppDispatch ) => {
        handleLoanInProgress(dispatch, 'create a loan');
        try {
            const data = await loanService.createLoan(user);
            return handleLoanSuccess(dispatch, data.detail);
        } catch (error) {
            return handleLoanError(dispatch, error);
        }
    };
}

export function deleteLoan(userId:string) {
    return async ( dispatch: AppDispatch ) => {
        handleLoanInProgress(dispatch, 'Deleting a loan user');
        try {
            const data = await loanService.deleteLoan(userId);
            return handleLoanSuccess(dispatch, data.detail);
        } catch (error) {
            return handleLoanError(dispatch, error);
        }
    };
}

export function updateLoan(userId:string) {
    return async ( dispatch: AppDispatch ) => {
        handleLoanInProgress(dispatch, 'Updating a loan user');
        try {
            const data = await loanService.updateLoan(userId);
            return handleLoanSuccess(dispatch, data.detail);
        } catch (error) {
            return handleLoanError(dispatch, error);
        }
    };
}


