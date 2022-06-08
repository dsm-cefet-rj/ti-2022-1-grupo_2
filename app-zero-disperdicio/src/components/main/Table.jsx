import React from 'react';
import './Table.css';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProjeto} from './ProjetoSlice';

//import {Link} from "react-router-dom";

export default function ListagemTabela(){

    const projeto = useSelector(state => state.projeto);
    const dispatch = useDispatch();
        
      
    function handleClickExcluirProjeto(id){
         dispatch(deleteProjeto(id));
    }

    return(
        <>
              
            <Tabela projeto={projeto} dispatch={dispatch} onClickExcluirProjeto={handleClickExcluirProjeto} />
              
        </>
    );
    
}

 const LinhaTabela = (props) => {
    return(
        <tr>
           {/* <Link to= {"/projeto/${props.product.id}"}><button></button></Link>  */}
            <td>{props.product.nome}</td>
            <td>{props.product.dataDeValidade}</td>
            <td>{props.product.quantidade}</td>
            <td>{props.product.comentarios}</td>
            <td><button id="update" className="button">Atualizar</button></td>
            <td><button id="delete" className="button" onClick={() => props.onClickExcluirProjeto(props.product.id)}>Apagar</button></td>
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
                {props.projeto.map((product) => <LinhaTabela key={product.id} product={product} onClickExcluirProjeto={props.onClickExcluirProjeto} />)}
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