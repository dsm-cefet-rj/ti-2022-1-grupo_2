import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginServer, selectLoginById} from './LoginSlice';

export default function LoginForm() {
    //const login = useSelector(state => selectLoginById(state, id));
    const [login, loginState] = useState();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);


    function handleSubmit(e) {
        dispatch(loginServer(login));
    }

    return (
        <form action="#" id="login-product" onSubmit={handleSubmit} >
            

            <div id="login-container">
                <label htmlFor="name-product">Digite seu nome de usuário</label>
                <input type="text" className="username" id="usernameLogin" name="username" placeholder="username" required />
            </div>

            <div>
                <label htmlFor="expiration-date">Digite sua senha</label>
                <input type="password" className="password" id="passwordLgin" name="password" required />
            </div>

            <input id="botao-login" className="button-login" type="submit" value="login" />
        </form>
    )
} 