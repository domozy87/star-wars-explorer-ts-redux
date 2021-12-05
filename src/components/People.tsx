import React from 'react';
import styled from 'styled-components';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// Hooks
import { usePeopleFetch } from '../hooks/usePeopleFetch';

// Image
import PersonImg from '../images/profile.png';

const Wrapper = styled.div`
    padding: 10px;
`;

const People: React.FC = () => {
    const { state, loading, error, setLoadingMore } = usePeopleFetch();

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="People" />
            <Wrapper>
                {state.results.map(person => (
                    <div key={person.name}>
                        <Button href={`/people/${state.results.indexOf(person) + 1}`} key={person.name}>
                            <AvatarComponent name={person.name} image_url={PersonImg} />
                        </Button>
                    </div>
                ))}
                {loading && <Spinner />}
                {state.next && !loading && (
                    <Button onClick={() => setLoadingMore(true)}>Load More</Button>
                )}
            </Wrapper>
        </>
    );
};

export default People;
