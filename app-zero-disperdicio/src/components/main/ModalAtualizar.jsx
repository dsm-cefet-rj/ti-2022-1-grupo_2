import './ModalAtualizar.css'
import FormModal from './FormModal'
import {useState, useEffect, useRef, useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Context } from './Context';

export default function ModalAtualizar(){
    const {open, setOpen, projeto, setProjeto, target, setTarget} = useContext(Context)
    
    useEffect(() => {
        const modal = document.querySelector('#modal-atualizar')
        const buttonUpdate = document.querySelectorAll('#update')
        // console.log(target)
        function closeModal(e){
            if(e.target !== target && !modal.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener('click', closeModal)

        return () => document.removeEventListener('click', closeModal)
    })

    return (
        <div id="modal-atualizar" className={open ? '' : 'close'}>
            {/* <span className="closed-icon" onClick={closedAlert}></span> */}
            <FormModal open={open} setOpen={setOpen} projeto={projeto} setProjeto={setProjeto}/>
        </div>
    )
}