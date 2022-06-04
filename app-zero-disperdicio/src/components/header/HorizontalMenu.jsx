import './HorizontalMenu.css'
import { useRef } from 'react'

export default function HorizontalMenu(){
    const listItems = document.querySelectorAll('.principal-menu > ul > li')
    const underline = useRef(null)

    function itemSelected(pos){
        console.log(underline.current)
        underline.current.style.transform = `translateX(${134 * pos}px)` 
    }
    listItems.forEach(listItem => listItem.addEventListener('click', itemSelected))

    // useEffect(() => {

    //     return () => listItems.forEach(listItem => listItem.removeEventListener('click', itemSelected))
    // })
    
    return(
        <nav className="principal-menu">
            <ul>
                <div className="underline" ref={underline}></div>
                <li onClick={() => itemSelected(0)}><a href="/">Home</a></li>
                <li onClick={() => itemSelected(1)}><a href="#geladeira">Geladeira</a></li>
                <li onClick={() => itemSelected(2)}><a href="#armario">Armário</a></li>
                <li onClick={() => itemSelected(3)}><a href="#suplementos">Suplementos</a></li>
                <li onClick={() => itemSelected(4)}><a href="#remedios">Remédios</a></li>
            </ul>
        </nav>
    )
}