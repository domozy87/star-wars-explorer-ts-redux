import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store/Store';

// Reducers
import { fetchMovies } from '../reducers/Movies';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// API
import API from '../API';

// Image
import MovieImg from '../images/movie.png';

// Types
import { MovieT } from '../types/StarWars';

const Wrapper = styled.div`
    padding: 10px;
`;

const Movies: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoadingMore, setLoadingMore] = useState<boolean>(false);

    const dispatch = useDispatch();

    const MoviesState = useSelector((state: RootState) => state.movies.value);

    const handleFetchMovies = useCallback(async (page: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_movies = await API.fetchMovies(page);
            dispatch(fetchMovies({ ...sw_movies, page }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleFetchMovies(1);
    }, [handleFetchMovies]);

    useEffect(() => {
        if (!isLoadingMore) {
            return;
        }

        handleFetchMovies(MoviesState.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, MoviesState, handleFetchMovies] );

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="Movies" />
            <Wrapper>
                {MoviesState.results.map((movie: MovieT) => {
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
                {MoviesState.next && !loading && (
                    <Button onClick={() => setLoadingMore(true)}>Load More</Button>
                )}
            </Wrapper>
        </>
    );
};

export default Movies;
