import React, { useState } from 'react';
import './Form.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProjeto, updateProjeto } from './ProjetoSlice';

export default function Form() {
    const projeto = useSelector(state => state.projeto);

    // const history = useHistory();

    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

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
        setProduct({ ...product, [e.target.nome]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (actiontype === 'projeto/addProjeto') {
            dispatch(addProjeto(product));
        } else {
            dispatch(updateProjeto(product));
        }
        // history.push('/projeto');
    }

    return (
        <form action="#" id="register-product" onSubmit={handleSubmit} >
            <div id="category-container">
                <label for="produtct-category">Categoria</label>
                <select id="produtct-category" className="input" name="category">
                    <option selected disabled>Selecione</option>
                    <option value="geladeira">Geladeira</option>
                    <option value="armário">Armário</option>
                    <option value="suplementos">Suplementos</option>
                    <option value="remédios">Remédios</option>
                </select>
            </div>

            <div id="name-container">
                <label for="name-product">Nome do produto</label>
                <input type="text" className="input" id="name-product" name="nome" value={product.nome} placeholder="Nome do produto" onChange={handleInputChange} />
            </div>

            <div id="expiration-container">
                <label for="expiration-date">Data de validade</label>
                <input type="date" className="input" id="expiration-date" name="dataDeValidade" value={product.dataDeValidade} onChange={handleInputChange} />
            </div>

            <div id="quantity-container">
                <label for="quantity">Quantidade</label>
                <input type="text" className="input" id="quantity" name="quantidade" placeholder="Quantidade" value={product.quantidade} onChange={handleInputChange} />
            </div>

            <div id="comments-container">
                <label for="comments">Comentários</label>
                <textarea className="input" id="comments" name="comentarios" placeholder="Comentários" value={product.comentarios} onChange={handleInputChange}></textarea>
            </div>

            <input id="botao-cadastrar" className="button" type="submit" value="salvar" />
        </form>
    )
}   