import './Header.css'
import UserActions from './UserActions'
import NotificationsBell from './NotificationsBell'

function Header(){
    return (
        <header id="header">
            <div id="header-items" className="container">
                <h1>Logo</h1>
                <UserActions/>
                <NotificationsBell/>
            </div>
        </header>
    )
}

export default Header