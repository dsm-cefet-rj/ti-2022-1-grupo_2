import './UserActions.css'
import loginIcon from '../../img/user-check-solid.svg'
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { AuthContext } from '../../authContext/auth';

export default function UserActions() {
    const {authenticated, setAuthenticated} = useContext(AuthContext)
    function logout(e) {
        fetch('http://localhost:3004/logout').then(console.log('logout'))
        setAuthenticated(false)
    }

    return (
        <div id="user-actions">
            <div id="login-icon">
                <img src={loginIcon} width="50" height="50" />
            </div>
            <ul id="user-options" className="list-items">
                {/* <li><a href="#">Configurar usuário</a></li> */}
                <li><Link to="/login" onClick={(e) => logout(e)}>Logout</Link></li>
            </ul>
        </div>
    )
}