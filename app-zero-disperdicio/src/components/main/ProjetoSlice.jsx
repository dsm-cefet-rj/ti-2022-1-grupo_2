import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {httpDelete, httpPut, httpGet, httpPost} from '../../utils';
import {baseUrl} from '../../baseUrl';

const projetoAdapter = createEntityAdapter();

  const initialState = projetoAdapter.getInitialState ({
    status: `not_loaded`,
    error: null
}); 
 
 export const fetchProjeto = createAsyncThunk('projeto/fetchProjeto', async() => {
    return await httpGet(`${baseUrl}/projeto`);
})

export const deleteProjetoServer = createAsyncThunk('projeto/deleteProjetoServer', async(idProduct) => {
    await httpDelete(`${baseUrl}/projeto/${idProduct}`);
    return idProduct;
})

export const addProjetoServer = createAsyncThunk('projeto/addProjetoServer', async(product) => {
    await httpPost(`${baseUrl}/projeto`, product);
})

export const updateProjetoServer = createAsyncThunk('projeto/updateProjetoServer', async(product) => {
    await httpPut(`${baseUrl}/projeto/${product.id}`, product);
}) 

/* const initialProjeto = [{ id: '1', nome: 'Sabão em pó', dataDeValidade: '25/05/2023', quantidade: '3L', comentarios: 'Usar para lavar roupas' },
{ id: '2', nome: 'Chocolate em pó', dataDeValidade: '14/12/2022', quantidade: '3,0kg', comentarios: 'Usar para fazer brigadeiro, bolo e bebidas' }];

function addProjetoReducer(projeto, product) {
    let proxId = 1 + projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
    return projeto.concat([{ ...product, id: proxId }]);
}



function updateProjetoReducer(projeto, product) {
    let index = projeto.map(p => p.id).indexOf(product.id);
    projeto.splice(index, 1, product);
    return projeto;
}

function deleteProjetoReducer(projeto, id) {
    return projeto.filter((p) => p.id !== id);
} */

/* export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialProjeto,
    reducers: {
        addProjeto: (state, action) => addProjetoReducer(state, action.payload),
        updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
        deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
    }
}); */

 export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialState, 
    extraReducers: {
        [fetchProjeto.pending]: (state) => {state.status = 'loading'},
        [fetchProjeto.fulfilled]: (state, action) => {state.status = 'loading'; projetoAdapter.setAll(state, action.payload);},
        [fetchProjeto.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updateProjetoServer.pending]: (state) => {state.status = 'loading'},
        [updateProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetoAdapter.upsertOne(state, action.payload);},
        [addProjetoServer.pending]: (state) => {state.status = 'loading'},
        [addProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetoAdapter.addOne(state, action.payload);},
        [deleteProjetoServer.pending]: (state) => {state.status = 'loading'},
        [deleteProjetoServer.fulfilled]: (state, action) => {state.status = 'deleted'; projetoAdapter.removeOne(state, action.payload);}
    }
}); 

/* export const { addProjeto, updateProjeto, deleteProjeto } = projetoSlice.actions; */
export default projetoSlice.reducer;

 export const {
    selectedAll: selectedAllProjeto,
    selectedById: selectedProjetoById,
    selectedIds: selectedProjetoIds
} = projetoAdapter.getSelectors(state => state.projeto) 