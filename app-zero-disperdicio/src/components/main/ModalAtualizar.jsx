import './ModalAtualizar.css'
import Form from './Form'
import {useState, useEffect, useRef } from 'react'

export default function ModalAtualizar(props){
    // const [close, setClose] = useState(false)
    
    useEffect(() => {
        const modal = document.querySelector('#modal-atualizar')
        function closeModal(e){
            if(!modal.contains(e.target)){
                // open = false
                // console.log(e.target, open)
            }
        }
        document.addEventListener('click', closeModal)

        return () => document.addEventListener('click', closeModal)
    })

    return (
        <div id="modal-atualizar" className={'close'}>
            {/* <span className="closed-icon" onClick={closedAlert}></span> */}
            <Form projeto={props.projeto} setProjeto={props.setProjeto}/>
        </div>
    )
}