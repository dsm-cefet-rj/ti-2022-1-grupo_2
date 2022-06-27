import React, { useState } from 'react';
import './Form.css';
import { useParams , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProjetoServer, updateProjetoServer, selectAllProjeto } from './ProjetoSlice';

export default function Form() {
    const projeto = useSelector(selectAllProjeto);
    //const projeto = useSelector(state => state.projeto.projeto);
  //  const projeto = useSelector(state => state.projeto);
    const dispatch = useDispatch();
     let { id } = useParams();
    id = parseInt(id);
    let navigate = useNavigate();

    const [product, setProduct] = useState(
        id ? projeto.filter((p) => p.id === id)[0] ?? {} : {});

    const [actiontype,] = useState(
        id ?
            projeto.filter((p) => p.id === id)[0]
                ? 'projeto/updateProjeto'
                : 'projeto/addProjeto'
                : 'projeto/addProjeto'
    );

    

    function handleInputChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (actiontype === 'projeto/addProjeto') {
            dispatch(addProjetoServer(product));
        } else {
            dispatch(updateProjetoServer(product));
            
        }
         navigate('/success'/* , { replace: true } */);
    }

    return (
        <form action="#" id="register-product" onSubmit={handleSubmit} >
            <div id="category-container">
                <label htmlFor="produtct-category">Categoria</label>
                <select id="produtct-category" className="input" name="category" required >
                    <option value="disabled">Selecione</option>
                    <option value="geladeira">Geladeira</option>
                    <option value="armário">Armário</option>
                    <option value="suplementos">Suplementos</option>
                    <option value="remédios">Remédios</option>
                </select>
            </div>

            <div id="name-container">
                <label htmlFor="name-product">Nome do produto</label>
                <input type="text" className="input" id="name-product" name="nome" value={product.nome || ''} placeholder="Nome do produto" onChange={handleInputChange} required />
            </div>

            <div id="expiration-container">
                <label htmlFor="expiration-date">Data de validade</label>
                <input type="date" className="input" id="expiration-date" name="dataDeValidade" value={product.dataDeValidade || ''} onChange={handleInputChange} required />
            </div>

            <div id="quantity-container">
                <label htmlFor="quantity">Quantidade</label>
                <input type="text" className="input" id="quantity" name="quantidade" placeholder="Quantidade" value={product.quantidade || ''} onChange={handleInputChange} required />
            </div>

            <div id="comments-container">
                <label htmlFor="comments">Comentários</label>
                <textarea className="input" id="comments" name="comentarios" placeholder="Comentários" value={product.comentarios || ''} onChange={handleInputChange}></textarea>
            </div>

            <input id="botao-cadastrar" className="button" type="submit" value="salvar"/>
        </form>
    )
}   