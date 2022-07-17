import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabee } from '../components/main/Table';
import { fetchProjeto, selectAllProjeto } from '../comoponents/main/ProjetoSlice';

export default function ListagemSuplementos() {
    const projeto = useSelector(selectAllProjeto);
    const status = useSelector(state => state.projeto.status);
    const error = useSelector(state => state.projeto.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProjeto());
        }
    }, [status, dispatch])

    let tabelas = '';
    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        tabelas = (<TabelaSuplementos projeto={projeto}  /> || <Tabee />);

    }
    else if (status === 'loading') {
        tabelas = <div>Carregando os produtos...</div>;
    }
    else if (status === 'failed') {
        tabelas = <div>Erro: {error}</div>;
    }

    
    return (
        {tabelas}
    )
} 

const LinhaSuplementos = (props) => {
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

function TabelaSuplementos(props) {
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
                {props.projeto.map((projeto) => <LinhaSuplementos key={projeto.id} projeto={projeto} />)}
            </tbody>
        </table>
    );
}