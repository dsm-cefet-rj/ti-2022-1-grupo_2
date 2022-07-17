import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjeto, selectAllProjeto } from '../components/main/ProjetoSlice';

export default function ListagemRemedio() {
    const projeto = useSelector(selectAllProjeto);
    const status = useSelector(state => state.projeto.status);
    const error = useSelector(state => state.projeto.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProjeto());
        }
    }, [status, dispatch])

    let tabelar = '';
    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        tabelar = (<TabelaRemedio projeto={projeto}  /> || <Tabee />);

    }
    else if (status === 'loading') {
        tabelar = <div>Carregando os produtos...</div>;
    }
    else if (status === 'failed') {
        tabelar = <div>Erro: {error}</div>;
    }

    
    return (
        {tabelar}
    )
} 

const LinhaRemedio = (props) => {
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
        </tr>
    );
}

function TabelaRemedio(props) {
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
                {props.projeto.map((projeto) => <LinhaRemedio key={projeto.id} projeto={projeto} />)}
            </tbody>
        </table>
    );
}