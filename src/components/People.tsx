import React from 'react';

// Components
import Header from './Header';

// API
import API from '../API';

const People: React.FC = () => {
    const casts = API.fetchPeople(1);

    console.log(casts);

    return (
        <>
            <Header title="People" />
        </>
    );
};

export default People;
