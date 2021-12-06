import React from 'react';
import styled from 'styled-components';

// MUI
import { Typography } from '@mui/material';

// Components
import Spinner from '../Spinner';
import Header from '../Header';

// Hooks
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../../hooks/useMovieFetch';

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
    const { state: movie, loading, error } = useMovieFetch(Number(movieId));

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
                <Typography variant="h4" component="div" gutterBottom>{movie.title}</Typography>
                <FieldWrap>
                    <StyleLabel>Directors</StyleLabel>
                    <StyleValue>{movie.director}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Producers</StyleLabel>
                    <StyleValue>{movie.producer}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Release Date</StyleLabel>
                    <StyleValue>{movie.release_date}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default MovieDetail;