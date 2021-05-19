import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignUp from './pages/Cadastro';
import CadastroVagas from './pages/CadastroVagas';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact component={Home} path="/" />
            <Route exact component={CadastroVagas} path="/newvagas" />
            <Route exact component={SignUp} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;