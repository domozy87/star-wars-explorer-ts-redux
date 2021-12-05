import { PEOPLE_URL, PLANET_URL, MOVIE_URL } from './config';
import * as Types from './types/StarWars';

export default {
    fetchPeople: async (page: number): Promise<Types.PeopleT> => {
        const endpoint: string = `${PEOPLE_URL}?page=${page}`;

        return await (await fetch(endpoint)).json();
    },

    fetchPerson: async ( personId: number ): Promise<Types.PersonT> => {
        const endpoint: string = `${PEOPLE_URL}${personId}`;

        return await (await fetch(endpoint)).json();
    },

    fetchPlanets: async (page: number): Promise<Types.PlanetsT> => {
        const endpoint: string = `${PLANET_URL}?page=${page}`;

        return await (await fetch(endpoint)).json();
    },

    fetchPlanet: async ( planetId: number ): Promise<Types.PlanetT> => {
        const endpoint: string = `${PLANET_URL}${planetId}`;

        return await (await fetch(endpoint)).json();
    },

    fetchMovies: async (page: number): Promise<Types.MoviesT> => {
        const endpoint: string = `${MOVIE_URL}?page=${page}`;

        return await (await fetch(endpoint)).json();
    },

    fetchMovie: async ( movieId: number ): Promise<Types.MovieT> => {
        const endpoint: string = `${MOVIE_URL}${movieId}`;

        return await (await fetch(endpoint)).json();
    },
}
