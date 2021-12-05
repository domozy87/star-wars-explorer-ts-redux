import React from 'react';

// Routing
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home';
import People from './components/People';
import Detail from './components/Detail';
import Planets from './components/Planets';
import Movies from './components/Movies';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People />} />
            <Route path='/people/:personId' element={<Detail category="People" />} />
            <Route path='/planets' element={<Planets />} />
            <Route path='/movies' element={<Movies />} />
        </Routes>
    </Router>
);

export default App;
