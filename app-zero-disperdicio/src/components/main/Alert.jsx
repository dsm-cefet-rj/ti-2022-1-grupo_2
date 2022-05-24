import './Alert.css'

export default function Alert(){
    function closedAlert(){
        document.querySelector('.alert').remove()
    }

    return (
        <div className="alert">
            <h4>Alerta!!!</h4>
            <p>Faltam N dias para a validade do produto X expirar.</p>
            <span class="closed-icon" onClick={closedAlert}></span>
        </div>
    )
}