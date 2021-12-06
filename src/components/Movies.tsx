import React from 'react';
import styled from 'styled-components';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// Hooks
import { useMoviesFetch } from '../hooks/useMoviesFetch';

// Image
import MovieImg from '../images/movie.png';

const Wrapper = styled.div`
    padding: 10px;
`;

const People: React.FC = () => {
    const { state, loading, error, setLoadingMore } = useMoviesFetch();

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="Movies" />
            <Wrapper>
                {state.results.map(movie => {
                    const url = movie.url.split('/');
                    const id = url[url.length - 2];
                    
                    return (
                        <div key={movie.title}>
                            <Button href={`/movies/${id}`} key={movie.title}>
                                <AvatarComponent name={movie.title} image_url={MovieImg} />
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
