import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { PersonT } from '../types/StarWars';

export const usePersonFetch = ( personId: number ) => {
    const [state, setState] = useState<PersonT>({} as PersonT);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect( () => {
        const fetchPerson = async () => {
            try {
                setError(false);
                setLoading(true);

                const person = await API.fetchPerson(personId);

                setState({ ...person });

                setLoading(false);
            }
            catch(error) {
                setError(true);
            }
        };

        fetchPerson();
    }, [personId] );

    return { state, loading, error };
};
