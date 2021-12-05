import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { PersonT } from '../types/StarWars';

const initialState = {
    page: 0,
    results: [] as PersonT[],
    next: '1',
    total_pages: 0,
    count: 0,
};

export const usePeopleFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setLoadingMore] = useState(false);

    const fetchPeople = async (page: number) => {
        try {
            setError(false);
            setLoading(true);

            const people = await API.fetchPeople(page);

            setState(prev => ({
                ...people,
                page,
                results: page > 1 ? [...prev.results, ...people.results] : [...people.results]
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
        fetchPeople(1);
    }, []);

    // Load more
    useEffect( () => {
        if (!isLoadingMore) {
            return;
        }

        fetchPeople(state.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, state.page] );

    return { state, loading, error, isLoadingMore, setLoadingMore };
};
