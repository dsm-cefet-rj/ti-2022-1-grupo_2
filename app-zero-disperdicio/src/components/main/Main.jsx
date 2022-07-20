import Alert from './Alert'
import Form from './Form';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from './Accordion'
import './Main.css'
import ModalAtualizar from './ModalAtualizar';
import {Storage} from './Context'

export default function Main(props){
    return(
        // <BrowserRouter>
        <Storage>
            <main className="container">
                <Form projeto={props.projeto} setProjeto={props.setProjeto} /> 
                <Accordion/>
                {/* <Alert/> */}
                <ModalAtualizar/>
            </main>
        </Storage>
        /*  </BrowserRouter>  */
    )
}