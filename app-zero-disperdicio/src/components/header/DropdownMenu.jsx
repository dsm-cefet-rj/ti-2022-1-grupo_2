export default function DropdownMenu({ open }) {
    return (
        <ul id="notifications-list" className={open ? 'list-items open' : 'list-items'}>
            <li>
                A validade do Produto X vai expirar no dia 20/06/2022
                <i className="delete-notification"></i>
            </li>
            <li>
                A validade do Produto X vai expirar no dia 17/09/2022
                <i className="delete-notification"></i>
            </li>
            <li>
                A validade do Produto X vai expirar no dia 12/07/2022
                <i className="delete-notification"></i>
            </li>
            <li>
                A validade do Produto X vai expirar no dia 21/08/2022
                <i className="delete-notification"></i>
            </li>
            <li>
                A validade do Produto X vai expirar no dia 12/08/2022
                <i className="delete-notification"></i>
            </li>
            <li>
                A validade do Produto X vai expirar no dia 06/11/2022
                <i className="delete-notification"></i>
            </li>
        </ul>
    )
}