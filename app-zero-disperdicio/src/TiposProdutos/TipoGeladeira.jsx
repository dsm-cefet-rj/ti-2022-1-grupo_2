import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabee } from '../components/main/Table';
import { fetchProjeto, selectAllProjeto } from '../comoponents/main/ProjetoSlice';


export default function ListagemGeladeira() {
    const projeto = useSelector(selectAllProjeto);
    const status = useSelector(state => state.projeto.status);
    const error = useSelector(state => state.projeto.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProjeto());
        }
    }, [status, dispatch])

    let tabelag = '';
    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        tabelag = (<TabelaGeladeira projeto={projeto}  /> || <Tabee />);

    }
    else if (status === 'loading') {
        tabelag = <div>Carregando os produtos...</div>;
    }
    else if (status === 'failed') {
        tabelag = <div>Erro: {error}</div>;
    }

    
    return (
        {tabelag}
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