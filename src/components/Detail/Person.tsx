import React from 'react';
import styled from 'styled-components';

// MUI
import { Typography } from '@mui/material';

// Components
import Spinner from '../Spinner';
import Header from '../Header';

// Hooks
import { useParams } from 'react-router-dom';
import { usePersonFetch } from '../../hooks/usePersonFetch';

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
    const { state: person, loading, error } = usePersonFetch(Number(personId));

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
                <Typography variant="h4" component="div" gutterBottom>{person.name}</Typography>
                <FieldWrap>
                    <StyleLabel>Height</StyleLabel>
                    <StyleValue>{person.height}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Mass</StyleLabel>
                    <StyleValue>{person.mass}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Hair Color</StyleLabel>
                    <StyleValue>{person.hair_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Eye Color</StyleLabel>
                    <StyleValue>{person.eye_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Skin Color</StyleLabel>
                    <StyleValue>{person.skin_color}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Birth Year</StyleLabel>
                    <StyleValue>{person.birth_year}</StyleValue>
                    <DashLine />
                </FieldWrap>
                <FieldWrap>
                    <StyleLabel>Gender</StyleLabel>
                    <StyleValue>{person.gender}</StyleValue>
                    <DashLine />
                </FieldWrap>
            </Wrapper>
        </>
    );
};

export default PersonDetail;