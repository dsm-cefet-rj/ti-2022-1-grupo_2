import React, { useState, createContext } from "react"

export const Context = createContext()

export const Storage = ({children}) => {
    const [open, setOpen] = useState(false)
    const [projeto, setProjeto] = useState([])
    const [target, setTarget] = useState(null)
    return (
        <Context.Provider value={{open, setOpen, projeto, setProjeto, target, setTarget}}>
            {children}
        </Context.Provider>
    )
}