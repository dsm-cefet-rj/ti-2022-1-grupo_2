import React from 'react';

export default function ListagemGeladeira() {
    return (
        <TabelaGeladeira />
    )
} 

const LinhaGeladeira = (props) => {
    return (
        <tr>
            <td data-label="nome">
                <span>{props.projeto.nome/* nomeProduto */}</span>
            </td>
            <td data-label="validade">
                <span>{props.projeto.dataDeValidade/* dataValidade */}</span>
            </td>
            <td data-label="quantidade">
                <span>{props.projeto.quantidade}</span>
            </td>
            <td data-label="comentários">
                <span>{props.projeto.comentarios/* comentario */}</span>
            </td>
            <td className="check-container">
            <input type="checkbox" id="check" value="check" />
            </td>
        </tr>
    );
}

function TabelaGeladeira(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de validade</th>
                    <th>Quantidade</th>
                    <th>Comentários</th>
                    <th>Contém</th>
                </tr>
            </thead>
            <tbody>
                {props.projeto.map((projeto) => <LinhaGeladeira key={projeto.id} projeto={projeto} />)}
            </tbody>
        </table>
    );
}