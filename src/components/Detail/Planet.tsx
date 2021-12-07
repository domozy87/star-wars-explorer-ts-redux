import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Store
import { RootState } from '../../store/Store';

// Reducers
import { fetchPlanet } from '../../reducers/Planet';

// MUI
import { Typography } from '@mui/material';

// Components
import Spinner from '../Spinner';
import Header from '../Header';

// Hooks
import { useParams } from 'react-router-dom';

// API
import API from '../../API';

const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const FieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;
`;

const StyleLabel = styled.div`
    font-size: 14px;
    color: Grey;
`;

const StyleValue = styled.div`
    font-size: 18px;
    color: Grey;
`;

const DashLine = styled.div`
    width: calc(100% - 40px);
    margin-top: 5px;
    border-bottom: 1px dotted grey;
`;

const PlanetDetail: React.FC = () => {
    const { planetId } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();

    const PlanetState = useSelector((state: RootState) => state.planet.value);

    const handleFetchPlanet = useCallback(async (pid: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_planet = await API.fetchPlanet(pid);
            dispatch(fetchPlanet({ ...sw_planet }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleFetchPlanet(Number(planetId));
    }, [handleFetchPlanet, planetId]);

    if ( loading ) {
        return <Spinner />
    }

    if ( error ) {
        return <div>Something went wrong...!</div>
    }

    return (
        <>
            <Header title="Planets" />
            <Wrapper>
                <Typography variant="h4" component="div" gutterBottom>{PlanetState.name}</Typography>
                <FieldWrap>
                    <StyleLabel>Terrain</StyleLabel>
                    <StyleValue>{PlanetState.terrain}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Population</StyleLabel>
                    <StyleValue>{PlanetState.population}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default PlanetDetail;