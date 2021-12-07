import { configureStore } from "@reduxjs/toolkit";

// Reducers
import PeopleReducer from '../reducers/People';
import PersonReducer from '../reducers/Person';
import PlanetsReducer from '../reducers/Planets';
import PlanetReducer from '../reducers/Planet';
import MoviesReducer from '../reducers/Movies';
import MovieReducer from '../reducers/Movie';

export const store = configureStore({
    reducer: {
        people: PeopleReducer,
        person: PersonReducer,
        planets: PlanetsReducer,
        planet: PlanetReducer,
        movies: MoviesReducer,
        movie: MovieReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;