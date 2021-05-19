import React from "react";
import "../styles/cadastro_vagas.scss";

class Button extends React.Component {

	recrutador = { 
			label: 'Recrutador'	
	};
    candidato = { 
        label: 'Candidato'	
    };


  render() {
        return (

            <div className = "form-div">
                <h2>Cadastro de Vagas</h2>
                <form>
                    <label htmlFor="titulo">Título</label>
                    <input name="titutlo" id="titulo"/>
                    <label htmlFor="Descrição">Descrição da vaga</label>
                    <textarea rows={10} cols={50} name="descrição" id="descrição"/>
                    <label htmlFor="requisitos">Requisitos</label>
                    <textarea rows={5} cols={50} name="requisitos" id="requisitos"/>
                    <label htmlFor="tipo">Tipo</label>
                    <input name="tipo" id="tipo"/>
                    <label htmlFor="cargaHoraria">Carga horária</label>
                    <input name="cargaHoraria" id="cargaHoraria"/>
                    <label htmlFor="faixaSalarial">Faixa Salarial</label>
                    <input name="faixaSalarial" id="faixaSalarial"/>
                </form>
            </div>

        )
    }
}

export default Button