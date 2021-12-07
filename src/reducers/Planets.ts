import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { PlanetT, PlanetsT } from '../types/StarWars';

const initialState: PlanetsT = {
    page: 0,
    results: [] as PlanetT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

const planetsSlice = createSlice({
    name: 'planets',
    initialState: {
        value: initialState
    },
    reducers: {
        fetchPlanets: (state, action: PayloadAction<PlanetsT>) => {
            state.value = {
                ...action.payload,
                page: action.payload.page,
                results: action.payload.page > 1 ? [...state.value.results, ...action.payload.results] : [...action.payload.results]
            };
        }
    }
});

export const { fetchPlanets } = planetsSlice.actions;

export default planetsSlice.reducer;