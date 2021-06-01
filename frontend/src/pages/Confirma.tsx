import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.scss';

function Confirma() {
    return (
        <div className="confirma-container">
            <div className="content confirma">
                <h1 className="confirma-text">Vaga Cadastrada com Sucesso!!</h1>
                <div className="row row-cols-2 confirma-buttom">
                        <div className="mb-3 ">
                            <Link to="/lista-vagas" > <button className="btn-submit form-control btn btn-secondary"> Todas as vagas </button> </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Confirma;