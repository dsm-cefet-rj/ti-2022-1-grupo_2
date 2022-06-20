import Alert from './Alert'
import Form from './Form';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from './Accordion'
import './Main.css'
//import { Provider } from 'react-redux';
//import store from './store';
function Routeamento(){
    return(
        <BrowserRouter>
            <Routes>  
                <Route path="forme" element = {<Form />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default function Main(props){
    return(
        <main className="container">
            <Form projeto={props.projeto} setProjeto={props.setProjeto} />
            {/* <Provider store={store}> */}
            <Routeamento />
            <Accordion/>
            <Alert/>
        </main>
    )
}