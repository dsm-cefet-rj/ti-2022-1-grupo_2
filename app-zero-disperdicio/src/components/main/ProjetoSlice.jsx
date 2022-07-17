import { createSlice , createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import {httpDelete, httpPut, httpGet, httpPost} from './Utils';
import {baseUrl} from './baseURL';

const projetoAdapter = createEntityAdapter();
const initialState = projetoAdapter.getInitialState({
    status: 'not_loaded',
    error: null
}); 
/* const initialState = {
    status: 'not_loaded',
    projeto: [],
    error: null
};  */

//const initialProjeto = [];
 /* const initialProjeto = [{ id: '1', nome: 'Sabão em pó', dataDeValidade: '25/05/2023', quantidade: '3L', comentarios: 'Usar para lavar roupas' },
{ id: '2', nome: 'Chocolate em pó em pó', dataDeValidade: '14/12/2022', quantidade: '3,0kg', comentarios: 'Usar para fazer brigadeiro, bolo e bebidas' }]; */ 

/* function addProjetoReducer(state, product) {
    let proxId = 1 + state.projeto.map(p => p.id).reduce((x, y) => Math.max(x, y, 0));
    return state.projeto.concat([{...product, id: proxId }]); 
}*/
/* function addProjetoReducer(projeto, product) {
    let proxId = 1 + projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
    return projeto.concat([{ ...product, id: proxId }]);
} */


/* function updateProjetoReducer(state, product) {
    let index = state.projeto.map(p => p.id).indexOf(product.id);
    state.projeto.splice(index, 1, product);
    return state.projeto;
} */
/* function updateProjetoReducer(projeto, product) {
    let index = projeto.map(p => p.id).indexOf(product.id);
    projeto.splice(index, 1, product);
    return projeto;
} */

/* function deleteProjetoReducer(state, id) {
    return state.projeto.filter((p) => p.id !== id);
} */
/* function deleteProjetoReducer(projeto, id) {
    return projeto.filter((p) => p.id !== id);
} */


/* function fullfillProjetoReducer(projetoState, projetoFetched){
    projetoState.status = 'loaded';
    projetoState.projeto = projetoFetched;
    return projetoFetched;
}  */

/* export const fetchProjeto = createAsyncThunk('projeto/fetchProjeto', async() => {
    return await fetch(await fetch('http://localhost:3004/projeto')).json();
}) */ 

export const fetchProjeto = createAsyncThunk('projeto/fetchProjeto', async({getState}) => {
    // return await httpGet(`${baseUrl}/projeto`);
    return await httpGet('http://localhost:3004/produtos', {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
})

export const deleteProjetoServer = createAsyncThunk('projeto/deleteProjetoServer', async(idProduct, {getState}) => {
    // await httpDelete(`${baseUrl}/projeto/${idProduct}`);
    await httpDelete(`http://localhost:3004/produtos/deletar/${idProduct}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idProduct;
})

export const addProjetoServer = createAsyncThunk('projeto/addProjetoServer', async(product, {getState}) => {
//    return await httpPost(`${baseUrl}/projeto`, product);
    console.log(getState().logins.entities.undefined)
   return await httpPost('http://localhost:3004/produtos/salvar', product, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
})

export const updateProjetoServer = createAsyncThunk('projeto/updateProjetoServer', async(product, {getState}) => {
    // return await httpPut(`${baseUrl}/projeto/${product.id}`, product);
    console.log(product)
    return await httpPut(`http://localhost:3004/produtos/atualizar/${product.id}`, product, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
})

export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialState,
    /* reducers: {
        addProjeto: (state, action) => addProjetoReducer(state, action.payload),
        updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
        deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
    } , */
    extraReducers:{
        [fetchProjeto.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchProjeto.fulfilled]: (state, action) => {
            state.status = 'loaded'; 
            projetoAdapter.setAll(state, action.payload);
            console.log(state, action)
        },
        [fetchProjeto.rejected]: (state, action) => {
            state.status = 'failed'; 
            state.error = action.error.message
        },
        [updateProjetoServer.pending]: (state) => {
            state.status = 'loading'
        },
        [updateProjetoServer.fulfilled]: (state, action) => {
            state.status= 'saved'; 
            projetoAdapter.upsertOne(state, action.payload);
        },
        [addProjetoServer.pending]: (state) => {
            state.status = 'loading'
        },
        [addProjetoServer.fulfilled]: (state, action) => {
            state.status = 'saved'; 
            projetoAdapter.addOne(state, action.payload);
        },
        [deleteProjetoServer.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteProjetoServer.fulfilled]: (state, action) => {
            state.status = 'deleted'; 
            projetoAdapter.removeOne(state, action.payload);
        }

    } 

})

/* export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialState,
    reducers: {
        addProjeto: (state, action) => addProjetoReducer(state, action.payload),
        updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
        deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
    } ,
    extraReducers:{
        [fetchProjeto.pending]: (state) => {state.status = 'loading'},
        [fetchProjeto.fulfilled]: (state, action) => fullfillProjetoReducer(state, action.payload),
        [fetchProjeto.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       // [updateProjetoServer.fulfilled]: (state, action) => {updateProjetoReducer(state, action.payload);}
    } 

}) */

//export const { addProjeto, updateProjeto, deleteProjeto } = projetoSlice.actions;
export default projetoSlice.reducer;
export const {
    selectAll: selectAllProjeto,
    selectById: selectProjetoById,
    selectIds: selectProjetoIds
} = projetoAdapter.getSelectors(state => state.projeto) 