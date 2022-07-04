export default function DropdownMenu({ open, notifications }) {
    return (
        <ul id="notifications-list" className={open ? 'list-items open' : 'list-items'}>
            {notifications.map(notification => (
                <li key={notification._id}>
                    A validade da(o) {notification.nomeProduto} vai expirar no dia {
                        new Date(`${notification.dataValidade.substr(0, 10)}T00:00`).toLocaleDateString()
                    }
                    <i className="delete-notification"></i>
                </li>
            ))}
        </ul>
    )
}