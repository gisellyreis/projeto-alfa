import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';

import api from '../services/api';

//import '../styles/styles.scss';

function ListaVagas() {

    const [vagas, setVagas] = useState([{
        title: '',
        description: '',
        requirements: '',
        contact_email: '',
        provider: '',
    }]);

    useEffect(() => {
       api.get('vagas')
       .then(response => {
            setVagas(response.data);
       })
    }, [])

  
/* 
    // Lista de vagas estática - para testes sem integração com api
    const vagas = [
        {
            titulo: 'Vaga desenvolvedor júnior',
            descricao: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            email: 'exemplo@exemplo.com',
            telefone: '(99) 99999-9999'
        },
        {
            titulo: 'Vaga desenvolvedor pleno',
            descricao: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            email: 'exemplo@exemplo.com',
            telefone: '(99) 99999-9999'
        },
        {
            titulo: 'Vaga desenvolvedor senior',
            descricao: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            email: 'exemplo@exemplo.com',
            telefone: '(99) 99999-9999'
        }
    ] */

    return (
        <div id="page-ListaVagas">
            <div className="content">
                <Breadcrumb></Breadcrumb>
                <main>
                    <div className="container">
                        <h1>Lista de Vagas</h1>

                        <div className="row row-cols-3">
                        {vagas.map((vaga) => {
                            return (
                                <div className="card" style= {
                                    {'width': '24rem'}
                                }>
                                    <div className="card-body">
                                        <h5 className="card-title"> {vaga.title} </h5>
                                       {/*  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                        <p className="card-text"> {vaga.description} </p>
                                        <p  className="card-text"> {vaga.requirements} </p>
                                        <p  className="card-text"> {vaga.provider} </p>
                                        <a href="#" className="card-link"> {vaga.contact_email} </a>
                                    </div>
                                </div>
                            )
                        })}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default ListaVagas;