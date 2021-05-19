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

                    <div className = "center"> Você é:
                        <div> 
                            <button>{this.recrutador.label}</button><button>{this.candidato.label}</button>
                        </div>
                    </div>

        )
    }
}

export default Button
  
  