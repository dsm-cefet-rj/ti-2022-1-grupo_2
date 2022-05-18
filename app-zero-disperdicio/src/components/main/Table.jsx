import './Table.css';

export default function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de validade</th>
                    <th>Quantidade</th>
                    <th>Comentários</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="nome"><span>Queijo Minas</span></td>
                    <td data-label="validade"><span>20/06/2022</span></td>
                    <td data-label="quantidade"><span>1 u.n.</span></td>
                    <td data-label="comentários"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nobis qui.</span></td>
                    <td class="btn-container">
                        <button id="update" class="button">Atualizar</button>
                        <button id="delete" class="button">Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}