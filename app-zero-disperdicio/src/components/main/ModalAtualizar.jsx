import './ModalAtualizar.css'
import Form from './Form'
import {useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from "react-router-dom";


export default function ModalAtualizar(props){
    //let navega = useNavigate()
     const [close, setClose] = useState(false)
    
    useEffect(() => {
        // navega('/success')
        const modal = document.querySelector('#modal-atualizar')
        function closeModal(e){
            if(!modal.contains(e.target)){
                 //open = false
                 //console.log(e.target, open)
            }
        }
        document.addEventListener('click', closeModal)

        return () => document.addEventListener('click', closeModal)
    })

    return (
        <div id="modal-atualizar" className={'close'}>
             {/* <span className="closed-icon" onClick={closedAlert}></span> */} 
            
        </div>
    )
}