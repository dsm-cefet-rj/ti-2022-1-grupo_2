import { createSlice , createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import {httpPost} from '../components/main/Utils';

const cadastrarAdapter = createEntityAdapter();
const initialState = cadastrarAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const cadastrarServer = createAsyncThunk('cadastrar/cadastrarServer', async(cadastrar) => {
  return await httpPost('http://localhost:3004/cadastrar', cadastrar);
})

export const cadastrarSlice = createSlice({
   name: 'cadastrars',
   initialState: initialState,
   extraReducers:{
       [cadastrarServer.pending]: (state) => {
           state.status = 'trying_cadastrar'
       },
       [cadastrarServer.fulfilled]: (state, action) => {
           state.status = 'cadastrado'; 
           cadastrarAdapter.addOne(state, action.payload);
       }
   }   
})

export default cadastrarSlice.reducer;
export const {
    selectAll: selectAllCadastrar,
    selectById: selectCadastrarById
} = cadastrarAdapter.getSelectors(state => state.cadastrar)