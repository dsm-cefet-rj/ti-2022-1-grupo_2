import { createSlice , createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import {httpPost} from '../components/main/Utils';

const cadastrarAdapter = createEntityAdapter();
const initialState = cadastrarAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const cadastrarServer = createAsyncThunk('cadastrar/cadastrarServer', async(cadastrar) => {
  // return await httpPost(`${baseUrl}/projeto`, product);
  return await httpPost('http://localhost:3004/signup', cadastrar);
})

export const cadastrarSlice = createSlice({
   name: 'cadastrars',
   initialState: initialState,
   /* reducers: {
       addProjeto: (state, action) => addProjetoReducer(state, action.payload),
       updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
       deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
   } , */
   extraReducers:{
       [cadastrarServer.pending]: (state) => {
           state.status = 'loading'
       },
       [cadastrarServer.fulfilled]: (state, action) => {
           state.status = 'saved'; 
           cadastrarAdapter.addOne(state, action.payload);
       }
   }   
})

export default cadastrarSlice.reducer;
export const {
    selectAll: selectAllCadastrar,
    selectById: selectCadastrarById
} = cadastrarAdapter.getSelectors(state => state.cadastrar)