import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { PlanetT } from '../types/StarWars';

const initialState = {
    page: 0,
    results: [] as PlanetT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

export const usePlanetsFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setLoadingMore] = useState(false);

    const fetchPlanets = async (page: number) => {
        try {
            setError(false);
            setLoading(true);

            const planets = await API.fetchPlanets(page);

            setState(prev => ({
                ...planets,
                page,
                results: page > 1 ? [...prev.results, ...planets.results] : [...planets.results]
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
        fetchPlanets(1);
    }, []);

    // Load more
    useEffect( () => {
        if (!isLoadingMore) {
            return;
        }

        fetchPlanets(state.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, state.page] );

    return { state, loading, error, isLoadingMore, setLoadingMore };
};
