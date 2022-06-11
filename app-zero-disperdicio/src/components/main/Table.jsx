import React from 'react';
import './Table.css';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProjeto,updateProjeto} from './ProjetoSlice';
import Form from './Form';

export default function ListagemTabela(props){

    const projeto = useSelector(state => state.projeto);
    const dispatch = useDispatch();
        
      
    function handleClickExcluirProjeto(id){
         dispatch(deleteProjeto(id));
    }

    function handleClickAtualizarProjeto(id){
        Form.handleSubmit(id);
    }


    return(
        <>
            
            <Tabela projeto={projeto} onClickAtualizarProjeto={handleClickAtualizarProjeto} onClickExcluirProjeto={handleClickExcluirProjeto} />
              
        </>
    );
    
}

 const LinhaTabela = (props) => {
    return(
        <tr>
            <td>{props.projeto.nome}</td>
            <td>{props.projeto.dataDeValidade}</td>
            <td>{props.projeto.quantidade}</td>
            <td>{props.projeto.comentarios}</td>
            <td><button id="update" className="button" onClick={() => props.onClickAtualizarProjeto(props.projeto.id)}>Atualizar</button></td>
            <td><button id="delete" className="button" onClick={() => props.onClickExcluirProjeto(props.projeto.id)}>Apagar</button></td>
        </tr>
    );
}

 function Tabela(props){
    return(
        <table border='1'>
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
                {props.projeto.map((projeto) => <LinhaTabela key={projeto.id} projeto={projeto} onClickAtualizarProjeto={props.onClickAtualizarProjeto} onClickExcluirProjeto={props.onClickExcluirProjeto} />)}
            </tbody>
        </table>
    );
} 

/* export default function Table() {
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
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
} */