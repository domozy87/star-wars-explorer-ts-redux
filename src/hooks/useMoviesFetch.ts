import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { MovieT, MoviesT } from '../types/StarWars';

const initialState = {
    page: 0,
    results: [] as MovieT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

export const useMoviesFetch = () => {
    const [state, setState] = useState<MoviesT>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoadingMore, setLoadingMore] = useState<boolean>(false);

    const fetchMovies = async (page: number) => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(page);

            setState(prev => ({
                ...movies,
                page,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    };

    // Initialize rendering
    useEffect(() => {
        setState(initialState);
        fetchMovies(1);
    }, []);

    // Load more
    useEffect( () => {
        if (!isLoadingMore) {
            return;
        }

        fetchMovies(state.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, state.page] );

    return { state, loading, error, isLoadingMore, setLoadingMore };
};
