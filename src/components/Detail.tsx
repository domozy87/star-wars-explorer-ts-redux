import React from 'react';

// Components
import Spinner from './Spinner';
import Header from './Header';

// Hooks
import { useParams } from 'react-router-dom';
import { usePersonFetch } from '../hooks/usePersonFetch';

type DetailT = {
    category: string;
};

const Detail: React.FC<DetailT> = (props) => {
    const { category } = props;
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
            <Header title={category} />
            {person.name}
        </>
    );
};

export default Detail;