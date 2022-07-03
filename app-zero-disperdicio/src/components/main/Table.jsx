import React, {useState, useEffect } from 'react';
import './Table.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProjetoServer, fetchProjeto, selectAllProjeto } from './ProjetoSlice';
import { Link, Route, Routes } from 'react-router-dom';

export default function ListagemTabela() {
    const projeto = useSelector(selectAllProjeto);
    const status = useSelector(state => state.projeto.status);
    const error = useSelector(state => state.projeto.error);

    /* const projetoState = useSelector(state => state.projeto);
    const projeto = projetoState.projeto;
    const status = projetoState.status;
    const error = projetoState.error; */
    //const projeto = useSelector(state => state.projeto.projeto);
    const dispatch = useDispatch();

    function handleClickExcluirProjeto(id) {
        dispatch(deleteProjetoServer(id));
    }

    function Tabee() {
        return (
            <Routes>
                <Route path='/success' element={<Tabela projeto={projeto} onClickExcluirProjeto={handleClickExcluirProjeto} />} />
            </Routes>
        );
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProjeto());
        }
    }, [status, dispatch])

    let tabela = '';
    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        tabela = (<Tabela projeto={projeto} onClickExcluirProjeto={handleClickExcluirProjeto} /> || <Tabee />);

    }
    else if (status === 'loading') {
        tabela = <div>Carregando os produtos...</div>;
    }
    else if (status === 'failed') {
        tabela = <div>Erro: {error}</div>;
    }

    return (
        <>
            {tabela}
            {/* <Tabela projeto={projeto} onClickExcluirProjeto={handleClickExcluirProjeto} /> */}
        </>
    );

}

const LinhaTabela = (props) => {
     /* const [open, setOpen] = useState(false)
    function atualizarProduto(e) {
        setOpen(!open)
        console.log(open)
    }  */
    return (
        <tr>
            <td data-label="nome">
                <button><Link to={`/forme/${props.projeto.id}`}><span>{props.projeto.nome/* nomeProduto */}</span></Link></button>
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
            <td className="btn-container">
                {/* <button id="update" className="button" onClick={(e) => atualizarProduto(e)}>Atualizar</button> */}
                <button id="delete" className="button" onClick={() => props.onClickExcluirProjeto(props.projeto.id)}>Apagar</button>
            </td>
        </tr>
    );
}

function Tabela(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de validade</th>
                    <th>Quantidade</th>
                    <th>Comentários</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.projeto.map((projeto) => <LinhaTabela key={projeto.id} projeto={projeto} onClickExcluirProjeto={props.onClickExcluirProjeto} />)}
            </tbody>
        </table>
    );
}