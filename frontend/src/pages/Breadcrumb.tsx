import React from 'react';

import '../styles/styles.scss';

function Breadcrumb() {

    return (
        <div className="container">
            <nav className="bredcrumb-container" >
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href="/cadastro-usuario">Novo Usuário</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href="/cadastro-vagas">Nova Vaga</a></li>
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;