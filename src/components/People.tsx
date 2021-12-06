import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Store
import { RootState } from '../store/Store';

// Reducers
import { addPeople } from '../reducers/People';

// MUI
import { Button } from '@mui/material';

// Components
import Header from './Header';
import AvatarComponent from './Avatar';
import Spinner from './Spinner';

// API
import API from '../API';

// Image
import PersonImg from '../images/profile.png';

const Wrapper = styled.div`
    padding: 10px;
`;

const People: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoadingMore, setLoadingMore] = useState<boolean>(false);

    const dispatch = useDispatch();

    const PeopleState = useSelector((state: RootState) => state.people.value);

    const handleAddPeople = useCallback(async (page: number) => {
        try {
            setLoading(true);
            setError(false);

            const sw_people = await API.fetchPeople(page);
            dispatch(addPeople({ ...sw_people, page }));
        }
        catch(error) {
            setError(true);
        }

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        handleAddPeople(1);
    }, [handleAddPeople]);

    useEffect(() => {
        if (!isLoadingMore) {
            return;
        }

        handleAddPeople(PeopleState.page + 1);
        setLoadingMore(false);
    }, [isLoadingMore, PeopleState, handleAddPeople] );

    if ( error ) {
        return (
            <div>Something went wrong...!</div>
        );
    }

    return (
        <>
            <Header title="People" />
            <Wrapper>
                {PeopleState.results.map(person => {
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
                {PeopleState.next && !loading && (
                    <Button onClick={() => setLoadingMore(true)}>Load More</Button>
                )}
            </Wrapper>
        </>
    );
};

export default People;
