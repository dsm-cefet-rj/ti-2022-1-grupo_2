import { createSlice , createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import {httpPost} from '../components/main/Utils';

const loginAdapter = createEntityAdapter();
const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const loginServer = createAsyncThunk('login/loginServer', async(login) => {
  // return await httpPost(`${baseUrl}/projeto`, product);
  return await httpPost('http://localhost:3004/login', login);
})

export const loginSlice = createSlice({
   name: 'logins',
   initialState: initialState,
   /* reducers: {
       addProjeto: (state, action) => addProjetoReducer(state, action.payload),
       updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
       deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
   } , */
   extraReducers:{
       [loginServer.pending]: (state) => {
           state.status = 'loading'
       },
       [loginServer.fulfilled]: (state, action) => {
           state.status = 'saved'; 
           loginAdapter.addOne(state, action.payload);
       }
   }   
})

export default loginSlice.reducer;
export const {
    selectAll: selectAllLogin,
    selectById: selectLoginById
} = loginAdapter.getSelectors(state => state.login)