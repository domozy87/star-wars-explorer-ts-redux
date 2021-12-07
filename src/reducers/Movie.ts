import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { MovieT } from '../types/StarWars';

const initialState: MovieT = {
    title: '',
    director: '',
    producer: '',
    release_date: '',
    url: ''
};

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        value: initialState
    },
    reducers: {
        fetchMovie: (state, action: PayloadAction<MovieT>) => {
            state.value = { ...action.payload };
        }
    }
});

export const { fetchMovie } = movieSlice.actions;

export default movieSlice.reducer;