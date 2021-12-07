import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Store
import { RootState } from '../../store/Store';

// Reducers
import { fetchMovie } from '../../reducers/Movie';

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

const MovieDetail: React.FC = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();

    const MovieState = useSelector((state: RootState) => state.movie.value);

    const handleFetchMovie = useCallback(async (mid: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_movie = await API.fetchMovie(mid);
            dispatch(fetchMovie({ ...sw_movie }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleFetchMovie(Number(movieId));
    }, [handleFetchMovie, movieId]);

    if ( loading ) {
        return <Spinner />
    }

    if ( error ) {
        return <div>Something went wrong...!</div>
    }

    return (
        <>
            <Header title="Movies" />
            <Wrapper>
                <Typography variant="h4" component="div" gutterBottom>{MovieState.title}</Typography>
                <FieldWrap>
                    <StyleLabel>Directors</StyleLabel>
                    <StyleValue>{MovieState.director}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Producers</StyleLabel>
                    <StyleValue>{MovieState.producer}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Release Date</StyleLabel>
                    <StyleValue>{MovieState.release_date}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default MovieDetail;