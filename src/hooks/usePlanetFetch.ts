import { useState, useEffect } from 'react';

// API
import API from '../API';

// Types
import { PlanetT } from '../types/StarWars';

export const usePlanetFetch = ( planetId: number ) => {
    const [state, setState] = useState<PlanetT>({} as PlanetT);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect( () => {
        const fetchPlanet = async () => {
            try {
                setError(false);
                setLoading(true);

                const planet = await API.fetchPlanet(planetId);

                setState({ ...planet });

                setLoading(false);
            }
            catch(error) {
                setError(true);
            }
        };

        fetchPlanet();
    }, [planetId] );

    return { state, loading, error };
};
