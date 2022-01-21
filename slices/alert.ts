
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import auth from './auth';

interface alertI {
        message: string,
        type: string
}
export const initialState: alertI = {
    message: '',
    type: '',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        alertSuccess: (state, action: PayloadAction<string>) => { 
            state.type = 'success'; 
            state.message = action.payload;
        },  
        alertError: (state, action: PayloadAction<string>) => {
            state.type = 'error';
            state.message = action.payload;
        },  
        'auth.reducer.authRequestFailed': (state, action: PayloadAction<string>) => {
            // console.log('alert', 'isAuthfailed', state, action);
            // state.type = 'error'
            // state.message = action.payload
        }, 
        alertInfo: (state, action: PayloadAction<string>) => {
            state.type = 'info';
            state.message = action.payload;
        },  
    },
});

export const getAlertState = (state: RootState) => state.alert;

export const { alertError, alertInfo, alertSuccess } = alertSlice.actions;

export default alertSlice.reducer;






