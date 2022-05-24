import './NotificationsBell.css'
import DropdownMenu from './DropdownMenu'
import { useState, useEffect } from 'react'

export default function NotificationsBell() {
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 10000);

        function closedMenu(e){ 
            const bell = document.querySelector("#bell")
            const notificationsCount = document.querySelector("#notifications-count")
            const notificationsList = document.querySelector("#notifications-list")

            console.log(e.target)

            if(e.target !== bell && e.target !== notificationsCount){
                if(!notificationsList.contains(e.target)){
                    setOpen(false)
                }
            }
        }

        document.addEventListener('click', closedMenu)

        return () => {
            clearInterval(interval)
            document.removeEventListener('click', closedMenu)
        }
    })

    function openMenuNotications(e) {
        setOpen(!open)
    }

    return (
        <div id="notifications-alert">
            <div id="bell-container" onClick={(e) => openMenuNotications(e)}>
                <i id="bell"></i>
                <span id="notifications-count">{count}</span>
            </div>
            <DropdownMenu open={open}/>
        </div>
    )
}