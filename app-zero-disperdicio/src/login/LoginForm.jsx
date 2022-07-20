import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginServer, loginSlice, selectLoginById } from './LoginSlice';
import './FormLoginCadastro.css'

import { AuthContext } from '../authContext/auth';

export default function LoginForm({active}) {
    const dispatch = useDispatch();
    let naviga = useNavigate();
    let { id } = useParams();
    id = parseInt(id);
    
    const [login, setLogin] = useState();
    
    function handleInputChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const {authenticated, setAuthenticated} = useContext(AuthContext)
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginServer(login))
            .then(data => {
                const erro = data.payload.erro
                setAuthenticated(!erro)
                naviga('/');
            })
            .catch(e => {
                setAuthenticated(false)
                alert(e)
            })
    }

    // useEffect(() => {

    //     if (status === 'logged_in') {

    //         naviga('/success');

    //     }

    // }, [status])

    return (
        <form action="#" id="login" className={active} onSubmit={handleSubmit} >
            <div>
                <label htmlFor="username-login">Digite seu nome de usuário</label>
                <input type="text" className="input" id="username-login" name="name" placeholder="username" onChange={handleInputChange} required />
            </div>

            <div>
                <label htmlFor="email-login">Email</label>
                <input type="email" className='input' id="email-login" name="email" placeholder='seuemail@email.com' onChange={handleInputChange} required />
            </div>

            <div>
                <label htmlFor="password-login">Digite sua senha</label>
                <input type="password" className="input" id="password-login" placeholder='Sua senha' name="password" onChange={handleInputChange} required />
            </div>

            <button id="botao-login" className="button" type="submit">Login</button>
        </form>
    )

}