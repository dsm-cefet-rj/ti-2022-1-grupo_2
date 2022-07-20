import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cadastrarServer, selectCadastrarById } from './CadastrarSlice';

export default function CadastroForm({active}) {
    console.log(active)
    const dispatch = useDispatch();
    let naviga = useNavigate()
    let { id } = useParams();
    id = parseInt(id);

    const [cadastrar, setCadastrar] = useState();

    function handleInputChange(e) {
        setCadastrar({ ...cadastrar, [e.target.name]: e.target.value }
        )
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(cadastrarServer(cadastrar));
        naviga('/login');
    }

    // useEffect(() => {

    //     if (status === 'cadastrado') {

    //         naviga('/logar');

    //     }

    // }, [status])

    return (
        <form action="#" id="cadastro" className={active} onSubmit={handleSubmit} >
            <div>
                <label htmlFor="username-cadastro">Digite seu nome de usuário</label>
                <input type="text" className="input" id="username-cadastro" name="name" placeholder="username" onChange={handleInputChange} required />
            </div>

            <div>
                <label htmlFor="email-cadastro">Email</label>
                <input type="email" className='input' id="email-cadastro" name="email" placeholder='seuemail@email.com' onChange={handleInputChange} required />
            </div>

            <div>
                <label htmlFor="password-cadastro">Digite sua senha</label>
                <input type="password" className="input" id="password-cadastro" placeholder='Sua senha' name="password" onChange={handleInputChange} required />
            </div>

            <button id="botao-cadastro" className="button" type="submit">Cadastrar-se</button>
        </form>
    )
}