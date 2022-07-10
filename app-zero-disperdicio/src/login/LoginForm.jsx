import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginServer, selectLoginById} from './LoginSlice';

export default function LoginForm() {
    const dispatch = useDispatch();
    let naviga = useNavigate();
    let { id } = useParams();
    id = parseInt(id);
    // const status = useSelector(state => state.login.status);


    function handleSubmit(login) {
        dispatch(loginServer(login));
        naviga('/success');
    }
    
    // useEffect(() => {
    //     if (status === 'logged_in') {
    //         naviga('/success');
    //     }
    // }, [status])

    return (
        <form action="#" id="login-product" onSubmit={handleSubmit} >

            <div id="login-container">
                <label htmlFor="name-product">Digite seu nome de usuário</label>
                <input type="text" className="username" id="usernameLogin" name="username" placeholder="username" required />
            </div>

            <div name="email" id="emaillogin" className="campo">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" name="email" required/>
            </div>

            <div>
                <label htmlFor="expiration-date">Digite sua senha</label>
                <input type="password" className="password" id="passwordLgin" name="password" required />
            </div>

            <input id="botao-login" className="button-login" type="submit" value="login" />
        </form>
    )
}