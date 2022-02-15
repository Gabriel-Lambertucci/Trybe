import React from "react";
import './dadosPessoais.css'

class DadosPessoais extends React.Component {
   
    
    render() {
        const brasilState = ['Acre',
        'Alagoas',
       ' Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso do Sul',
        'Mato Grosso',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
       ' Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
        ]
        return (
            <fieldset id='dadosPessoaisFieldSet'> Dados Pessoais:
                <label htmlFor="input-name"> Nome
                    <input className='items' id='input-name' type="text" maxLength='40' name="name"></input>
                </label>
                <label htmlFor="input-email"> Email
                    <input className='items' id='input-email' type="text" maxLength='50' name="email"></input>
                </label>
                <label htmlFor="input-cpf"> CPF
                    <input className='items' id='input-cpf' type="text" maxLength='11' name="cpf"></input>
                </label>
                <label htmlFor="input-endereço"> Endereço
                    <input className='items' id='input-endereço' type="text" maxLength='200' name="endereço"></input>
                </label>
                <label htmlFor="input-cidade"> Cidade
                    <input className='items' id='input-cidade' type="text" maxLength='28' name="cidade"></input>
                </label>
                <label htmlFor="select-state"> Estado
                    <select placeholder='Selecione um Estado' className='items' id='select-state' type='comboBox' name="states">
                        {brasilState.map((item) => <option key={item}>{item}</option>)}
                    </select>
                </label>
                <label htmlFor=''> Casa ou Apartamento?
                    <input className='items' type='radio' name='moradia'></input>
                </label>
            </fieldset>
        );
    };
}

export default DadosPessoais;