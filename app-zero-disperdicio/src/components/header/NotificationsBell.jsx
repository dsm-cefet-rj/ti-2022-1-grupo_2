import './NotificationsBell.css'
import DropdownMenu from './DropdownMenu'
import { useState, useEffect } from 'react'
import { io } from "socket.io-client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:3004');

socket.on('connect', () => console.log('[IO] Connect => New Connection'))


export default function NotificationsBell() {   
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)
    const [notifications, setNotifications] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:3004/notificacao')
            .then(data => data.json())
            .then(notification => {
                setNotifications(notification)
            })
        
        socket.on('server:notificacao', () => {
            fetch('http://localhost:3004/notificacao')
            .then(data => data.json())
            .then(notification => {
                setNotifications(notification)
                toast.warn(`Faltam 7 dias para a validade da(o) ${notification[0].nomeProduto} expirar.`, {
                    theme: 'colored',
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                toast.clearWaitingQueue()
                setCount(count + 1)
            })
        })

        function closedMenu(e){ 
            const bell = document.querySelector("#bell")
            const notificationsCount = document.querySelector("#notifications-count")
            const notificationsList = document.querySelector("#notifications-list")

            if(e.target !== bell && e.target !== notificationsCount){
                if(!notificationsList.contains(e.target)){
                    setOpen(false)
                }
            }
        }

        document.addEventListener('click', closedMenu)

        return () => {
            document.removeEventListener('click', closedMenu)
        }
    }, [count])

    function openMenuNotications(e) {
        setCount(0)
        setOpen(!open)
    }

    return (
        <div id="notifications-alert">
            <div id="bell-container" onClick={(e) => openMenuNotications(e)}>
                <i id="bell"></i>
                <span id="notifications-count">{count}</span>
            </div>
            <DropdownMenu open={open} notifications={notifications}/>
            <ToastContainer
            theme='colered'
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
            />
        </div>
    )
}