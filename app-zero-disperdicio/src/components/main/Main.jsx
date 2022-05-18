import Alert from './Alert'
import Accordion from './Accordion'
import './Main.css'

export default function Main(){
    return(
        <main className="container">
            <Accordion/>
            <Alert/>
        </main>
    )
}