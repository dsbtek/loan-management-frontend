import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import en from '../constant/languages/en.json';
import hausa from '../constant/languages/th.json';

export interface allLanguagesI {
    [key: string]: any;
}
const allLanguages: allLanguagesI  = {en, hausa };

export const initialState = {
    strings: allLanguages.en,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguages: (state, {payload}) => { state.strings = allLanguages[payload];},
    },
});

export const stringSelector = (state: RootState, payload: string) => state.languages.strings[payload];

export const { setLanguages } = languageSlice.actions;

export default languageSlice.reducer;