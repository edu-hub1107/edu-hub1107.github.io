import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './src/home.js';
import Songs from './src/songs.js';

const App = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/songs" component={Songs} /> 
    </Switch>
)

export default App