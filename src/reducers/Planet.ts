import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { PlanetT } from '../types/StarWars';

const initialState: PlanetT = {
    name: '',
    terrain: '',
    population: '',
    url: ''
};

const planetSlice = createSlice({
    name: 'planet',
    initialState: {
        value: initialState
    },
    reducers: {
        fetchPlanet: (state, action: PayloadAction<PlanetT>) => {
            state.value = { ...action.payload };
        }
    }
});

export const { fetchPlanet } = planetSlice.actions;

export default planetSlice.reducer;