import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Store
import { RootState } from '../../store/Store';

// Reducers
import { fetchPerson } from '../../reducers/Person';

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

const PersonDetail: React.FC = () => {
    const { personId } = useParams();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();

    const PersonState = useSelector((state: RootState) => state.person.value);

    const handleFetchPerson = useCallback(async (pid: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_person = await API.fetchPerson(pid);
            dispatch(fetchPerson({ ...sw_person }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleFetchPerson(Number(personId));
    }, [handleFetchPerson, personId]);

    if ( loading ) {
        return <Spinner />
    }

    if ( error ) {
        return <div>Something went wrong...!</div>
    }

    return (
        <>
            <Header title="People" />
            <Wrapper>
                <Typography variant="h4" component="div" gutterBottom>{PersonState.name}</Typography>
                <FieldWrap>
                    <StyleLabel>Height</StyleLabel>
                    <StyleValue>{PersonState.height}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Mass</StyleLabel>
                    <StyleValue>{PersonState.mass}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Hair Color</StyleLabel>
                    <StyleValue>{PersonState.hair_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Eye Color</StyleLabel>
                    <StyleValue>{PersonState.eye_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Skin Color</StyleLabel>
                    <StyleValue>{PersonState.skin_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Birth Year</StyleLabel>
                    <StyleValue>{PersonState.birth_year}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Gender</StyleLabel>
                    <StyleValue>{PersonState.gender}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default PersonDetail;