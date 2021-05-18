import React from "react";
import "../styles/selecaodetipo.scss";

class Button extends React.Component {

	recrutador = { 
			label: 'Recrutador'	
	};
    candidato = { 
        label: 'Candidato'	
    };

  render() {
        return (

                    <div class="center"><center>Você é:</center><padding></padding>
                        <div>
                            <button>{this.recrutador.label}</button><padding></padding><padding></padding><button>{this.candidato.label}</button>
                        </div>
                    </div>

        )
    }
}

export default Button
  
  