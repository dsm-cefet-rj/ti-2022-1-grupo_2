import Alert from './Alert'
import Form from './Form';
import Accordion from './Accordion'
import './Main.css'

export default function Main(){
    return(
        <main className="container">
            <Form/>
            <Accordion/>
            <Alert/>
        </main>
    )
}