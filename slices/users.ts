import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

export const initialState = {
    user: [],
    loading: false,
    hasErrors: false,
    error: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
});

export default usersSlice.reducer;
