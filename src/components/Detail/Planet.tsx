import React from 'react';
import styled from 'styled-components';

// MUI
import { Typography } from '@mui/material';

// Components
import Spinner from '../Spinner';
import Header from '../Header';

// Hooks
import { useParams } from 'react-router-dom';
import { usePlanetFetch } from '../../hooks/usePlanetFetch';

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
    const { state: planet, loading, error } = usePlanetFetch(Number(planetId));

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
                <Typography variant="h4" component="div" gutterBottom>{planet.name}</Typography>
                <FieldWrap>
                    <StyleLabel>Terrain</StyleLabel>
                    <StyleValue>{planet.terrain}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Population</StyleLabel>
                    <StyleValue>{planet.population}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default PlanetDetail;