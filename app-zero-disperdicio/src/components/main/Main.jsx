import Alert from './Alert'
import Form from './Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from './Accordion'
import './Main.css'
import ModalAtualizar from './ModalAtualizar';
import {Storage} from './Context'

function Routeamento(props){
    return( 
        <Routes>
            <Route path='forme/:id' element = {<Form projeto={props.projeto} setProjeto={props.setProjeto} />}/>
        </Routes>
    )
}

export default function Main(props){
    return(
        // <BrowserRouter>
        <Storage>
            <main className="container">
                <br></br>
                <br></br>
                <h1>Cadastre seus produtos!</h1>
                <Form projeto={props.projeto} setProjeto={props.setProjeto} /> 
                <Routeamento /> 
                <Accordion/>
                {/* <Alert/> */}
                <ModalAtualizar/>
            </main>
        </Storage>
        /*  </BrowserRouter>  */
    )
}