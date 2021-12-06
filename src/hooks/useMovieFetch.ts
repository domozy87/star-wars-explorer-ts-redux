import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { MovieT } from '../types/StarWars';

export const useMovieFetch = ( movieId: number ) => {
    const [state, setState] = useState<MovieT>({} as MovieT);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect( () => {
        const fetchMovie = async () => {
            try {
                setError(false);
                setLoading(true);

                const movie = await API.fetchMovie(movieId);

                setState({ ...movie });

                setLoading(false);
            }
            catch(error) {
                setError(true);
            }
        };

        fetchMovie();
    }, [movieId] );

    return { state, loading, error };
};
