import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { PersonT, PeopleT } from '../types/StarWars';

const initialState: PeopleT = {
    page: 0,
    results: [] as PersonT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        value: initialState
    },
    reducers: {
        addPeople: (state, action: PayloadAction<PeopleT>) => {
            state.value = {
                ...action.payload,
                page: action.payload.page,
                results: action.payload.page > 1 ? [...state.value.results, ...action.payload.results] : [...action.payload.results]
            };
        }
    }
});

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;