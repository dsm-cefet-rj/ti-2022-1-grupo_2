import './HorizontalMenu.css'
import {useState, useEffect, useRef } from 'react'

export default function HorizontalMenu(){
    const listItems = document.querySelectorAll('.principal-menu > ul > li')
    const underline = useRef(null)
    const [open, setOpen] = useState(false)

    function openMenu(e){
        setOpen(!open)
    }

    function itemSelected(pos){
        underline.current.style.transform = `translateX(${100 * pos}%)` 
    }
    listItems.forEach(listItem => listItem.addEventListener('click', itemSelected))

    useEffect(() => {
        function closedMenu(e){
            const menu = document.querySelector('.principal-menu')
            if(!menu.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener('click', closedMenu)

        return () => document.removeEventListener('click', closedMenu)
    })
    
    return(
        <nav className="principal-menu">
            <div class={open ? "icon-menu icon-menu-closed" : "icon-menu"} onClick={(e) => openMenu(e)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={open ? "openMenu" : ""}>
                <div className="underline" ref={underline}></div>
                <li onClick={() => itemSelected(0)}><a href="#home">Home</a></li>
                <li onClick={() => itemSelected(1)}><a href="#geladeira">Geladeira</a></li>
                <li onClick={() => itemSelected(2)}><a href="#armario">Armário</a></li>
                <li onClick={() => itemSelected(3)}><a href="#suplementos">Suplementos</a></li>
                <li onClick={() => itemSelected(4)}><a href="#remedios">Remédios</a></li>
            </ul>
        </nav>
    )
}