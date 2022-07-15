import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cadastrarServer, selectCadastrarById} from './CadastrarSlice';

export default function CadastroForm() {
    const dispatch = useDispatch();
    let naviga = useNavigate()
    let { id } = useParams();
    id = parseInt(id);

    const[cadastrar, setCadastrar] = useState();

    function handleInputChange(e) {
        setCadastrar({ ...cadastrar, [e.target.name]: e.target.value }
    )};

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(cadastrarServer(cadastrar));
        naviga('/logar');
    }

    // useEffect(() => {

    //     if (status === 'cadastrado') {

    //         naviga('/logar');

    //     }

    // }, [status])

    return (

        <form action="#" id="cadastrar-product" onSubmit={handleSubmit} >

            <div id="cadastrar-container">
                <label htmlFor="name-product">Criar nome de usuário</label>
                <input type="text" className="username" id="usernameCadastro" name="name" placeholder="username"  onChange={handleInputChange} required />

            </div>



            <div name="email" id="emailcadastrar" className="campo">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" name="email"onChange={handleInputChange}  required />
            </div>

            <div>
                <label htmlFor="expiration-date">Criar Senha</label>
                <input type="password" className="password" id="passwordCadastro" name="password"  onChange={handleInputChange} required />
            </div>

            <input id="botao-cadastrarUsuario" className="button-cadastrarUsuario" type="submit" value="cadastrar" />

        </form>
    )
}