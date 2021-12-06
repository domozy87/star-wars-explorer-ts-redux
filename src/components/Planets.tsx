import React from 'react';
import styled from 'styled-components';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// Hooks
import { usePlanetsFetch } from '../hooks/usePlanetsFetch';

// Image
import PlanetImg from '../images/planet.png';

const Wrapper = styled.div`
    padding: 10px;
`;

const Planets: React.FC = () => {
    const { state, loading, error, setLoadingMore } = usePlanetsFetch();

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="Planets" />
            <Wrapper>
                {state.results.map(planet => {
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
                {state.next && !loading && (
                    <Button onClick={() => setLoadingMore(true)}>Load More</Button>
                )}
            </Wrapper>
        </>
    );
};

export default Planets;
