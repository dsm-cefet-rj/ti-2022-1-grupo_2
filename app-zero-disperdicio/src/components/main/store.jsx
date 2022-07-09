import {configureStore} from '@reduxjs/toolkit';

import ProjetoReducer from './ProjetoSlice';
import loginReducer from '../../login/LoginSlice';
import cadastrarReducer from '../../login/CadastrarSlice';

 const store = configureStore ({
    reducer: {
    projeto: ProjetoReducer,
    logins: loginReducer,
    cadastrars: cadastrarReducer
    }
})
export default store; 