import './App.css';
import Header from './header/Header';
import Main from './main/Main'
import CadastroForm from '../login/CadastroForm';
import LoginForm from '../login/LoginForm';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from 'react';

import Home from '../pages/home'
import LoginAndSingup from '../pages/loginAndSingup';

import {AuthProvider, AuthContext} from '../authContext/auth'

function App() {
	const Private = ({ children }) => {
		const { authenticated } = useContext(AuthContext)

		if(!authenticated){
			return <Navigate to="/login"/>
		}

		return children
	}
	return (
		<BrowserRouter>
			<div className="App">
				<AuthProvider>
					<Routes>
						<Route exact path='/login' element={<LoginAndSingup/>}></Route>
						<Route exact path='/' element={<Private><Home/></Private>}></Route>
					</Routes>
				</AuthProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;