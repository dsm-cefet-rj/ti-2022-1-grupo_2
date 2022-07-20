import CadastroForm from '../../login/CadastroForm'
import LoginForm from '../../login/LoginForm'
import './style.css'
import React, { useState, useEffect } from 'react';

const LoginAndSingup = () => {
    const [activeTab, setActiveTab] = useState('login')
    function openTabLogin(e) {
        setActiveTab('login')
    }

    function openTabCadastro() {
        setActiveTab('cadastro')
    }
    return (
        <div id="login-singup-container">
            <div id="login-singup">
                <div id="tab-btn">
                    <button className={activeTab === "login" ? "active" : ""} onClick={(e) => openTabLogin(e)}>Login</button>
                    <button className={activeTab === "cadastro" ? "active" : ""} onClick={(e) => openTabCadastro(e)}>Cadastro</button>
                </div>
                <div id="form-container">
                    <CadastroForm active={activeTab === "cadastro" ? "active" : ""}/>
                    <LoginForm active={activeTab === "login" ? "active" : ""}/>
                </div>
            </div>
        </div>
    )
}

export default LoginAndSingup