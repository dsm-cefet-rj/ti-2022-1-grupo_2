import './App.css'; 
import Header from './header/Header';
import Main from './main/Main'
import { BrowserRouter } from "react-router-dom";
import CadastroForm from '../login/CadastroForm';
import LoginForm from '../login/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Cadastre-se caso não esteja cadastrado! Do contrário, entre no campo de login! </h1>
      <CadastroForm/>
      <h1>Login!</h1>
      <LoginForm/>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
