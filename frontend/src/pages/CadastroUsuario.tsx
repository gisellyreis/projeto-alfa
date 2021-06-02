import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.scss';
import Breadcrumb from './Breadcrumb';

function CadastroUsuario() {

    // Dados Comum
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');

    const [address, setAddress] = useState({

    });
    const [cel, setCel] = useState('');


    // Dados Candidato
    const [matricula, setMatricula] = useState('');

    // Dados Recrutador Pessoa Jurídica
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nameFantasia, setNomeFantasia] = useState('');
    const [nameFuncionario, setNomeFuncionario] = useState('');
    const [cnpj, setCnpj] = useState('');


    // Seleção tipo de pessoa
    const [candidato, setCandidato] = useState(false);
    const [recrutador, setRecrutador] = useState(false);
    const [recrutadorPF, setRecrutadorPF] = useState(false);
    const [recrutadorPJ, setRecrutadorPJ] = useState(false);

    function handleRecrutador() {
        setRecrutador(true);
    }

    function handleRecrutadorPF() {
        setRecrutadorPF(true);
        //console.log("Recrutador Pessoa Física")
    }

    function handleRecrutadorPJ() {
        setRecrutadorPJ(true);
        //console.log("Recrutador Pessoa Jurídica")
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
            {(!(recrutador || candidato) && !(recrutadorPF || recrutadorPJ)) &&
                <div className="container select-user-type">
                    <h1 className="title" > Você é: </h1>
                    <div className="d-grid gap-2 absolute-center">
                        <button onClick={handleRecrutador} type="button" className="btn btn-lg btn-outline-secondary">Recrutador</button>
                        <button onClick={handleCandidato} type="button" className="btn btn-lg btn-outline-secondary">Candidato</button>
                    </div>
                </div>
            }

            {(recrutador && !(recrutadorPF || recrutadorPJ)) &&
                <div className="container select-user-type">
                    <h1 className="title" > Você é: </h1>
                    <div className="d-grid gap-2 absolute-center">
                        <button onClick={handleRecrutadorPF} type="button" className="btn btn-lg btn-outline-secondary">Pessoa Física</button>
                        <button onClick={handleRecrutadorPJ} type="button" className="btn btn-lg btn-outline-secondary">Pessoa Jurídica</button>
                    </div>
                </div>
            }


            {/* Formulário de cadastro do usuário tipo candidato */}
            {candidato &&

                <div id="page-CadastroUsuario">
                    <div className="content">
                        <Breadcrumb></Breadcrumb>
                        <div className="container">
                            <h1>Cadastro de Candidato</h1>

                            <form onSubmit={handleSubmit}>

                                <div className="">
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                                <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                                <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Nome Completo</label>
                                                <input type="text" className="form-control" id="name" onChange={(e) => { setFullName(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Número de Matrícula</label>
                                                <input type="text" className="form-control" id="matricula" onChange={(e) => { setMatricula(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">CPF</label>
                                                <input type="text" className="form-control" id="cpf" onChange={(e) => { setCpf(e.target.value) }} />
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


                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn-submit form-control btn btn-primary">Salvar</button>
                                        </div>
                                        <div className="mb-3">
                                            <Link to="/" > <button className="btn-submit form-control btn btn-secondary"> Cancelar</button> </Link>
                                        </div>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            }

            {/* Formulário de cadastro do usuário do tipo recrutador pessoas física */}
            {recrutadorPF &&

                <div id="page-CadastroUsuario">
                    <div className="content">
                        <Breadcrumb></Breadcrumb>
                        <div className="container">
                            <h1>Cadastro de Recrutador - Pessoa Física</h1>

                            <form onSubmit={handleSubmit}>

                                <div className="">
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                                <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                                <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Nome Completo</label>
                                                <input type="text" className="form-control" id="name" onChange={(e) => { setFullName(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">CPF</label>
                                                <input type="text" className="form-control" id="cpf" onChange={(e) => { setCpf(e.target.value) }} />
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


                                            <div className="row row-cols-2">
                                                <div className="mb-3">
                                                    <button type="submit" className="btn-submit form-control btn btn-primary">Salvar</button>
                                                </div>
                                                <div className="mb-3">
                                                    <Link to="/" > <button className="btn-submit form-control btn btn-secondary"> Cancelar</button> </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            }

            {/* Formulário de cadastro do usuário do tipo recrutador pessoas jurídica */}
            {recrutadorPJ &&
                <div id="page-CadastroUsuario">
                    <div className="content">
                        <Breadcrumb></Breadcrumb>

                        <div className="container">
                            <h1>Cadastro de Recrutador - Pessoa Jurídica</h1>

                            <form onSubmit={handleSubmit}>

                                <div className="">
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                                <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                                <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Razão Social</label>
                                                <input type="text" className="form-control" id="razaoSocial" onChange={(e) => { setRazaoSocial(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Nome Fantasia</label>
                                                <input type="text" className="form-control" id="nomeFantasia" onChange={(e) => { setNomeFantasia(e.target.value) }} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">CNPJ</label>
                                                <input type="text" className="form-control" id="cnpj" onChange={(e) => { setCnpj(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputText1" className="form-label">Nome do Funcionário</label>
                                                <input type="text" className="form-control" id="nomeFuncionario" onChange={(e) => { setNomeFuncionario(e.target.value) }} />
                                            </div>
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


                                            <div className="row row-cols-2">
                                                <div className="mb-3">
                                                    <button type="submit" className="btn-submit form-control btn btn-primary">Salvar</button>
                                                </div>
                                                <div className="mb-3">
                                                    <Link to="/" > <button className="btn-submit form-control btn btn-secondary"> Cancelar</button> </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            }

        </div>
    );
}

export default CadastroUsuario;
