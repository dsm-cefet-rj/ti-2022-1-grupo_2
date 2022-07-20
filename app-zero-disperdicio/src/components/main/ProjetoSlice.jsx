import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpPut, httpGet, httpPost } from './Utils';
import { baseUrl } from './baseURL';

const projetoAdapter = createEntityAdapter();
const initialState = projetoAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchProjeto = createAsyncThunk('projeto/fetchProjeto', async ({ getState }) => {
    // return await httpGet(`${baseUrl}/projeto`);
    return await httpGet('http://localhost:3004/produtos', { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
})

export const deleteProjetoServer = createAsyncThunk('projeto/deleteProjetoServer', async (idProduct, { getState }) => {
    // await httpDelete(`${baseUrl}/projeto/${idProduct}`);
    await httpDelete(`http://localhost:3004/produtos/deletar/${idProduct}`, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
    return idProduct;
})

export const addProjetoServer = createAsyncThunk('projeto/addProjetoServer', async (product, { getState }) => {
    //return await httpPost(`${baseUrl}/projeto`, product);
    // console.log(getState().logins.entities.undefined)
    return await httpPost('http://localhost:3004/produtos/salvar', product, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
})

export const updateProjetoServer = createAsyncThunk('projeto/updateProjetoServer', async (product, { getState }) => {
    // return await httpPut(`${baseUrl}/projeto/${product.id}`, product);
    console.log(product)
    return await httpPut(`http://localhost:3004/produtos/atualizar/${product.id}`, product, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
})

export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialState,
    extraReducers: {
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
            state.status = 'saved';
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

export default projetoSlice.reducer;
export const {
    selectAll: selectAllProjeto,
    selectById: selectProjetoById,
    selectIds: selectProjetoIds
} = projetoAdapter.getSelectors(state => state.projeto) 