import React from 'react';

// Routing
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home';
import People from './components/People';
import PersonDetail from './components/Detail/Person';
import Planets from './components/Planets';
import PlanetDetail from './components/Detail/Planet';
import Movies from './components/Movies';
import MovieDetail from './components/Detail/Movie';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People />} />
            <Route path='/people/:personId' element={<PersonDetail />} />
            <Route path='/planets' element={<Planets />} />
            <Route path='/planets/:planetId' element={<PlanetDetail />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:movieId' element={<MovieDetail />} />
        </Routes>
    </Router>
);

export default App;
