import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.scss';
import Breadcrumb from './Breadcrumb';

function CadastroVagas() {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');


    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        console.log({
            titulo,
            descricao,
            email,
            telefone
        });

    }

    return (
        <div className="content">
            <Breadcrumb></Breadcrumb>
            <div className="container">

                <h1>Cadastro de Vagas</h1>

                <form onSubmit={handleSubmit} >

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Título</label>
                        <input className="form-control" type="text" placeholder="" onChange={(e) => { setTitulo(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={(e) => { setDescricao(e.target.value) }} ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="(99) 99999-9999" onChange={(e) => { setTelefone(e.target.value) }} />
                    </div>

                    <div className="row row-cols-2">
                        <div className="mb-3">
                            <button type="submit" className="btn-submit form-control btn btn-primary">Salvar</button>
                        </div>
                        <div className="mb-3">
                            <Link to="/" > <button className="btn-submit form-control btn btn-secondary"> Cancelar</button> </Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );

}

export default CadastroVagas;