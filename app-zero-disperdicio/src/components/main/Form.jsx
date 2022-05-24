import React, {useState} from 'react';
import './Form.css';

export default function Form(){
    const [product, setProduct] = useState({});
    const [validade, setValidade] = useState({});
    const [quantidade, setQuantidade] = useState({});

    function handleInputChange1(e){
        setProduct( {...product, [e.target.value]:e.target.value} );
    }

    function handleInputChange2(e){
        setValidade( {...validade, [e.target.value]:e.target.value} );
    }

    function handleInputChange3(e){
        setQuantidade( {...quantidade, [e.target.value]:e.target.value} );
    }

    return(
<form action="#" id="register-product" method="post">
            <div id="category-container">
                <label for="produtct-category">Categoria</label>                <select id="produtct-category" className="input" name="category">
                    <option selected disabled>Selecione</option>
                    <option value="geladeira">Geladeira</option>
                    <option value="armário">Armário</option>
                    <option value="suplementos">Suplementos</option>
                    <option value="remédios">Remédios</option>
                </select> 
            </div>
    
            <div id="name-container">
                <label for="name-product">Nome do produto</label>
                <input type="text" className="input" id="name-product" name="name" value={product.name} placeholder="Nome do produto" onChange={handleInputChange1} />
            </div>
    
            <div id="expiration-container">
                <label for="expiration-date">Data de validade</label>
                <input type="date" className="input" id="expiration-date" name="expirations" value={validade.expirations} onChange={handleInputChange2} />
            </div>
    
            <div id="quantity-container">
                <label for="quantity">Quantidade</label>
                <input type="text" className="input" id="quantity" name="quantity" placeholder="Quantidade" value={quantidade.quantity} onChange={handleInputChange3} />
            </div>
    
            <div id="comments-container">
                <label for="comments">Comentários</label>
                <textarea className="input" id="comments" name="comments" placeholder="Comentários"></textarea>
            </div>
    
            <button id="botao-cadastrar" className="button" type="submit">Cadastrar produto</button>
        </form>
    )
}   