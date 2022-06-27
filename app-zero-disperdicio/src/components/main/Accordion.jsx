import './Accordion.css'
import ListagemTabela from './Table';
import { Provider } from 'react-redux';
import store from './store';
  
const Accordion = () => {
    return (
        <Provider store={store}>
            <div id="accordion-container">
                <details id="geladeira">
                    <summary>Geladeira</summary>
                    <ListagemTabela  />
                </details>
                <details id="armario">
                    <summary>Armário</summary>
                    <ListagemTabela  />
                </details>
                <details id="suplementos">
                    <summary>Suplementos</summary>
                    <ListagemTabela />
                </details>
                <details id="remedios">
                    <summary>Remédios</summary>
                    <ListagemTabela  />
                </details>
            </div>
        </Provider>
    );
    }  
    export default Accordion;