import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { MovieT, MoviesT } from '../types/StarWars';

const initialState: MoviesT = {
    page: 0,
    results: [] as MovieT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        value: initialState
    },
    reducers: {
        fetchMovies: (state, action: PayloadAction<MoviesT>) => {
            state.value = {
                ...action.payload,
                page: action.payload.page,
                results: action.payload.page > 1 ? [...state.value.results, ...action.payload.results] : [...action.payload.results]
            };
        }
    }
});

export const { fetchMovies } = moviesSlice.actions;

export default moviesSlice.reducer;