import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { PersonT } from '../types/StarWars';

const initialState: PersonT = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    gender: '',
    birth_year: '',
    url: ''
};

const personSlice = createSlice({
    name: 'person',
    initialState: {
        value: initialState
    },
    reducers: {
        fetchPerson: (state, action: PayloadAction<PersonT>) => {
            state.value = { ...action.payload };
        }
    }
});

export const { fetchPerson } = personSlice.actions;

export default personSlice.reducer;