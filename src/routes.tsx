import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Study from './pages/Study';
import Teach from './pages/Teach';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/study" component={Study} />
            <Route path="/teach" component={Teach} />
        </BrowserRouter>
    );
}

export default Routes;
