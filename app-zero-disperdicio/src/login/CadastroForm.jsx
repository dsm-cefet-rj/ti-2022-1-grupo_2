import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cadastrarServer, selectCadastrarById} from './CadastrarSlice';

export default function CadastroForm() {
    //const cadastrar = useSelector(state => selectCadastrarById(state, id));
    const [cadastrar, cadastrarState] = useState();
    const dispatch = useDispatch();
    let { id } = useParams();
    //id = parseInt(id);


    function handleSubmit(e) {
            dispatch(cadastrarServer(cadastrar));
    }

    return (
        <form action="#" id="cadastrar-product" onSubmit={handleSubmit} >
            

            <div id="cadastrar-container">
                <label htmlFor="name-product">Criar nome de usuário</label>
                <input type="text" className="username" id="usernameCadastro" name="username" placeholder="username" required />
            </div>

            <div>
                <label htmlFor="expiration-date">Criar Senha</label>
                <input type="password" className="password" id="passwordCadastro" name="password" required />
            </div>

            <input id="botao-cadastrarUsuario" className="button-cadastrarUsuario" type="submit" value="cadastrar" />
        </form>
    )
}  