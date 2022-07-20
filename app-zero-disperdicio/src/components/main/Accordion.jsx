import './Accordion.css'
import ListagemTabela from './Table';
import ListagemGeladeira from '../../TiposProdutos/TipoGeladeira'
import ListagemArmario from '../../TiposProdutos/TipoArmario'
import ListagemRemedio from '../../TiposProdutos/TipoRemedio'
import ListagemSuplementos from '../../TiposProdutos/TipoSuplemento'
import { Provider } from 'react-redux';
import store from './store';
  
const Accordion = () => {
    return (
        <Provider store={store}>
            <div id="accordion-container">             
                <details id="geladeira">
                    <summary>Listar Produtos</summary>
                    <ListagemTabela  />
                </details>
                <details id="geladeira">
                    <summary>Minha Geladeira</summary>
                    <ListagemGeladeira  />
                </details>
                <details id="armario">
                    <summary>Meu Armário</summary>
                    <ListagemArmario  />
                </details>
                <details id="suplementos">
                    <summary>Meus Suplementos</summary>
                    <ListagemSuplementos />
                </details>
                <details id="remedios">
                    <summary>Meus Remédios</summary>
                    <ListagemRemedio />
                </details>
            </div>
        </Provider>
    );
    }  
    export default Accordion;