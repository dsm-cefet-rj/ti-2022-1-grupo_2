import Alert from './Alert'
import Form from './Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from './Accordion'
import './Main.css'

function Routeamento(props){
    return( 
        <Routes>
            <Route path='forme/:id' element = {<Form projeto={props.projeto} setProjeto={props.setProjeto} />}/>
        </Routes>
    )
}

export default function Main(props){
    return(
        <BrowserRouter>
   
            <main className="container">
            
                <Form projeto={props.projeto} setProjeto={props.setProjeto} /> 
                <Routeamento />
                <Accordion/>
                <Alert/>
            </main>
        
        </BrowserRouter>
    )
}