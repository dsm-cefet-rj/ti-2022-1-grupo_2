import React from 'react';
import './Table.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProjeto } from './ProjetoSlice';
import {Link} from 'react-router-dom';

export default function ListagemTabela(props) {

    const projeto = useSelector(state => state.projeto);
    const dispatch = useDispatch();


    function handleClickExcluirProjeto(id) {
        dispatch(deleteProjeto(id));
    }

    return (
        <>
            <Tabela projeto={projeto} onClickExcluirProjeto={handleClickExcluirProjeto} />
        </>
    );

}

const LinhaTabela = (props) => {
    return (
        <tr>
            <td data-label="nome">
               {/* <button> <span>{props.projeto.nome}</span></button> */}
               <button><Link to="/forme"><span>{props.projeto.nome}</span></Link> </button>
            </td>
            <td data-label="validade">
                <span>{props.projeto.dataDeValidade}</span>
            </td>
            <td data-label="quantidade">
                <span>{props.projeto.quantidade}</span>
            </td>
            <td data-label="comentários">
                <span>{props.projeto.comentarios}</span>
            </td>
            <td className="btn-container">
                <button id="update" className="button">Atualizar</button>
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

// export default function Table() {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Nome</th>
//                     <th>Data de validade</th>
//                     <th>Quantidade</th>
//                     <th>Comentários</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td data-label="nome"><span>Queijo Minas</span></td>
//                     <td data-label="validade"><span>20/06/2022</span></td>
//                     <td data-label="quantidade"><span>1 u.n.</span></td>
//                     <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
//                     <td class="btn-container">
//                         <button id="update" class="button">Atualizar</button>
//                         <button id="delete" class="button">Apagar</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td data-label="nome"><span>Queijo Minas</span></td>
//                     <td data-label="validade"><span>20/06/2022</span></td>
//                     <td data-label="quantidade"><span>1 u.n.</span></td>
//                     <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
//                     <td class="btn-container">
//                         <button id="update" class="button">Atualizar</button>
//                         <button id="delete" class="button">Apagar</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td data-label="nome"><span>Queijo Minas</span></td>
//                     <td data-label="validade"><span>20/06/2022</span></td>
//                     <td data-label="quantidade"><span>1 u.n.</span></td>
//                     <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
//                     <td class="btn-container">
//                         <button id="update" class="button">Atualizar</button>
//                         <button id="delete" class="button">Apagar</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     )
// }