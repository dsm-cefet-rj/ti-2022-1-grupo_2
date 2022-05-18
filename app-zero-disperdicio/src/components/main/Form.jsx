import './Form.css';

export default function Form(){
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
                 
            </div>
    
            <div id="expiration-container">
                <label for="expiration-date">Data de validade</label>
                
            </div>
    
            <div id="quantity-container">
                <label for="quantity">Quantidade</label>
                
            </div>
    
            <div id="comments-container">
                <label for="comments">Comentários</label>
                <textarea className="input" id="comments" name="comments" placeholder="Comentários"></textarea>
            </div>
    
            <button id="botao-cadastrar" className="button" type="submit">Cadastrar produto</button>
        </form>
    )
}   