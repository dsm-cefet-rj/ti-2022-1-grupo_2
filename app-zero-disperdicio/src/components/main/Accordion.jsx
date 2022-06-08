import './Accordion.css'
import ListagemTabela from './Table';
import {Provider}  from 'react-redux';
import store from './store';
//import ProjetoReducer from './ProjetoSlice';
//import Table from './Table';


  /*  const projeto = [
    {nome:'Sabão em pó', dataDeValidade:'25/05/2023', quantidade:'3L', comentarios:'Usar para lavar roupas'},
    {nome:'Chocolate em pó em pó', dataDeValidade:'14/12/2022', quantidade:'3,0kg', comentarios:'Usar para fazer brigadeiro, bolo e bebidas'}
]    */
const Accordion = () => {

    /* (
        [{nome:'Sabão em pó', dataDeValidade:'25/05/2023', quantidade:'3L', comentarios:'Usar para lavar roupas'},
        {nome:'Chocolate em pó em pó', dataDeValidade:'14/12/2022', quantidade:'3,0kg', comentarios:'Usar para fazer brigadeiro, bolo e bebidas'}]
    );   */

    return(
        <Provider store={store}>
        <div id="accordion-container">
            <details>
                <summary>Geladeira</summary>
                <ListagemTabela />
                
            </details>
            <details>
                <summary>Armário</summary>
                <ListagemTabela />
            </details>
            <details>
                <summary>Suplementos</summary>
                <ListagemTabela />
            </details>
            <details>
                <summary>Remédios</summary>
                <ListagemTabela  />
            </details>
            
        </div>
        </Provider>
    )
    } 
    export default Accordion;