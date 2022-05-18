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

        return () => clearInterval(interval)
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