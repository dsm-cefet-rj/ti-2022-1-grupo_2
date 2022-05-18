import './UserActions.css'
import loginIcon from '../../img/user-check-solid.svg'

export default function UserActions() {
    return (
        <div id="user-actions">
            <div id="login-icon">
                <img src={loginIcon} width="50" height="50" />
            </div>
            <ul id="user-options" class="list-items">
                <li><a href="#">Configurar usuário</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    )
}