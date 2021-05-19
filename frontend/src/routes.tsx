import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/Cadastro';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact component={Home} path="/" />
            <Route exact component={SignUp} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;