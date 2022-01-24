import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];


class Content extends React.Component {
    render() {
        
        return (
            conteudos.map(item => {
            return(
            <sections className = 'content'>
            <p>O conteúdo é: {item.conteudo}</p>
            <p>Status: {item.status}</p>
            <p>Bloco do conteúdo: {item.bloco}</p>
            </sections>);
            })
        );
    }
}

export default Content;