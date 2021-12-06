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
                {state.results.map(person => {
                    const url = person.url.split('/');
                    const id = url[url.length - 2];
                    
                    return (
                        <div key={person.name}>
                            <Button href={`/people/${id}`} key={person.name}>
                                <AvatarComponent name={person.name} image_url={PersonImg} />
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

export default People;
