import Alert from './Alert'
import Form from './Form';
import Accordion from './Accordion'
import './Main.css'

export default function Main(props){
    return(
        <main className="container">
            <Form projeto={props.projeto} setProjeto={props.setProjeto} />
            <Accordion/>
            <Alert/>
        </main>
    )
}