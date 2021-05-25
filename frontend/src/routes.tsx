import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVagas from './pages/CadastroVagas';
import Home from './pages/Home';

const Routes = () => {
    // CadastroUsuario ta quebrado, funciona se tirar rota para cadastro de vagas.
    // Apenas o estilo é afetado
    return (
        <BrowserRouter>
            <Route exact component={Home} path="/" />
            <Route exact component={CadastroUsuario} path="/cadastro-usuario" />
            <Route exact component={CadastroVagas} path="/cadastro-vagas" />
        </BrowserRouter>
    )
}

export default Routes;