import React, { useState, useEffect } from 'react';
import './Form.css';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProjetoServer, updateProjetoServer, selectProjetoById } from './ProjetoSlice';

export default function Form({projeto, setProjeto}) {
    // if(!projeto){
    //     setProjeto('')
    // }
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);
    // // let navigate = useNavigate();

    const projetoFound = useSelector(state => selectProjetoById(state, id));

    // const [product, setProduct] = useState(
    //     id ? projetoFound ?? {} : {}
    // );

    const [actiontype] = useState(
        id ?
            projetoFound
                ? 'projeto/updateProjeto'
                : 'projeto/addProjeto'
                : 'projeto/addProjeto'
    );
    function handleInputChange(e) {
        console.log(e.target.value)
        setProjeto({ ...projeto, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (actiontype === 'projeto/updateProjeto') {
            dispatch(addProjetoServer(projeto));
        } else {
            dispatch(updateProjetoServer(projeto));
        }
        // navigate('/success', { replace: true });
    }

    return (
        <form action="#" id="register-product" onSubmit={handleSubmit} >
            <div id="category-container">
                <label htmlFor="product-category">Categoria</label>
                <select id="product-category" className="input" name="category" value={projeto.categoria} onChange={handleInputChange} required >
                    <option value="disabled">Selecione</option>
                    <option value="geladeira">Geladeira</option>
                    <option value="armário">Armário</option>
                    <option value="suplementos">Suplementos</option>
                    <option value="remédios">Remédios</option>
                </select>
            </div>

            <div id="name-container">
                <label htmlFor="name-product">Nome do produto</label>
                <input type="text" className="input" id="name-product" name="nome" value={projeto.nomeProduto} placeholder="Nome do produto" onChange={handleInputChange} required />
            </div>

            <div id="expiration-container">
                <label htmlFor="expiration-date">Data de validade</label>
                <input type="date" className="input validade" id="expiration-date" name="dataValidade" 
                value={projeto.dataValidade ? projeto.dataValidade.substr(0, 10) : ''} 
                onChange={handleInputChange} required />
            </div>

            <div id="quantity-container">
                <label htmlFor="quantity">Quantidade</label>
                <input type="text" className="input" id="quantity" name="quantidade" placeholder="Quantidade" value={projeto.quantidade} onChange={handleInputChange} required />
            </div>

            <div id="comments-container">
                <label htmlFor="comments">Comentários</label>
                <textarea className="input" id="comments" name="comentario" placeholder="Comentários" value={projeto.comentario} onChange={handleInputChange}></textarea>
            </div>

            <input id="botao-cadastrar" className="button" type="submit" value="Cadastrar" />
        </form>
    )
}   