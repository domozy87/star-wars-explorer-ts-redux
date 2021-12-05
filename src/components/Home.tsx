import React from 'react';
import styled from 'styled-components';

// MUI
import { Button } from '@mui/material';

// Conponents
import Header from './Header'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
`;

const StyleButton = styled(Button)`
    min-width: 150px;
    margin: 10px 0;
`;

const Home: React.FC = () => {
    return (
        <>
            <Header title="Star Wars Explorer" />
            <ButtonContainer>
                <StyleButton variant="contained" href="/people" size="large">People</StyleButton>
                <StyleButton variant="contained" href="/movies" size="large">Movies</StyleButton>
                <StyleButton variant="contained" href="/planets" size="large">Planets</StyleButton>
            </ButtonContainer>
        </>
    );
};

export default Home;