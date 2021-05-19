import React, { FormEvent, useState } from 'react';
import { Container } from '@material-ui/core';

import '../styles/cadastroUsuario.scss';

function SignUp() {

    // Dados Comum
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');

    const [address, setAddress] = useState({});
    const [cel, setCel] = useState('');


    // Dados Candidato
    const [matricula, setMatricula] = useState('');

    // Dados Recrutador Pessoa Jurídica
    const razaoSocial = "";
    const nameFantasia = "";
    const name = "";
    const cnpj = "";


    // Seleção tipo de pessoa
    const [candidato, setCandidato] = useState(false);
    const [recrutador, setRecrutador] = useState(false);

    function handleRecrutador() {
        setRecrutador(true);
        //console.log("Recrutador")
    }

    function handleCandidato() {
        setCandidato(true);
        //console.log("Candidato")
    }



    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        console.log({
            email,
            fullName,
            password,
            cpf
        });
    }



    return (

        <div>
            {!(recrutador || candidato) &&
                <div className="container select-user-type">
                    <h1 className="title" > Você é: </h1>
                    <div className="d-grid gap-2 absolute-center">
                            <button onClick={handleRecrutador} type="button" className="btn btn-lg btn-outline-secondary">Recrutador</button>
                            <button onClick={handleCandidato} type="button" className="btn btn-lg btn-outline-secondary">Candidato</button>
                    </div>
                </div>
            }

        {candidato &&  

        <div id="page-SignUp">
            <div className="content">
                <Container>
                    <h1>Cadastro de Candidato</h1>

                    <form onSubmit={handleSubmit}>

                    <div className="">
                        <div className="row row-cols-2">
                            <div className="col">
                            <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Nome Completo</label>
                            <input type="text" className="form-control" id="name" onChange={(e) => {setFullName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Número de Matrícula</label>
                            <input type="text" className="form-control" id="matricula" onChange={(e) => {setMatricula(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="cpf" onChange={(e) => {setCpf(e.target.value)}} />
                        </div>
                            </div>
                            <div className="col">
                            <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Endereço</label>
                            <input type="text" className="form-control" id="address" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Bairro</label>
                            <input type="text" className="form-control" />
                        </div>
                            
                        <div className="">
                            <div className="row row-cols-2">
                                <div className="col">
                                <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">UF</label>
                            <input type="text" className="form-control" />
                        </div>
                                </div>
                                <div className="col">
                                <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Cidade</label>
                            <input type="text" className="form-control" />
                        </div>
                                </div>
                                <div className="col">
                                <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">CEP</label>
                            <input type="text" className="form-control" />
                        </div>
                                </div>
                                <div className="col">
                                <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Telefone (Celular)</label>
                            <input type="text" className="form-control" />
                        </div>
                                </div>
                            </div>
                        </div>


                        <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label"> Salvar </label>
                            <button  type="submit" className="btn-submit form-control btn btn-primary">Salvar</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    </form>
                    
                </Container>
            </div>
        </div>
    
        }
        </div>
    );
}

export default SignUp;