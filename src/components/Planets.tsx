import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store/Store';

// Reducers
import { fetchPlanets } from '../reducers/Planets';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// API
import API from '../API';

// Image
import PlanetImg from '../images/planet.png';

// Types
import { PlanetT } from '../types/StarWars';

const Wrapper = styled.div`
    padding: 10px;
`;

const Planets: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoadingMore, setLoadingMore] = useState<boolean>(false);

    const dispatch = useDispatch();

    const PlanetsState = useSelector((state: RootState) => state.planets.value);

    const handleFetchPlanets = useCallback(async (page: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_planets = await API.fetchPlanets(page);
            dispatch(fetchPlanets({ ...sw_planets, page }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleFetchPlanets(1);
    }, [handleFetchPlanets]);

    useEffect(() => {
        if (!isLoadingMore) {
            return;
        }

        handleFetchPlanets(PlanetsState.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, PlanetsState, handleFetchPlanets] );

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="Planets" />
            <Wrapper>
                {PlanetsState.results.map((planet: PlanetT) => {
                    const url = planet.url.split('/');
                    const id = url[url.length - 2];
                    
                    return (
                        <div key={planet.name}>
                            <Button href={`/planets/${id}`}>
                                <AvatarComponent name={planet.name} image_url={PlanetImg} />
                            </Button>
                        </div>
                    );
                })}
                {loading && <Spinner />}
                {PlanetsState.next && !loading && (
                    <Button onClick={() => setLoadingMore(true)}>Load More</Button>
                )}
            </Wrapper>
        </>
    );
};

export default Planets;
