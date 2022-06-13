import { /* createAsyncThunk, */ createSlice } from '@reduxjs/toolkit';

/* const initialState = {
    status: `not_loaded`,
    projeto: [],
    error: null
}; */

const initialProjeto = [{ id: '1', nome: 'Sabão em pó', dataDeValidade: '25/05/2023', quantidade: '3L', comentarios: 'Usar para lavar roupas' },
{ id: '2', nome: 'Chocolate em pó', dataDeValidade: '14/12/2022', quantidade: '3,0kg', comentarios: 'Usar para fazer brigadeiro, bolo e bebidas' }];

function addProjetoReducer(projeto, product) {
    let proxId = 1 + projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
    return projeto.concat([{ ...product, id: proxId }]);
}

/* function addProjetoReducer(state, product) {
    let proxId = 1 + state.projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
    return state.projeto.concat([{ ...product, id: proxId }]);
} */

/* export const updateProjetoServer = createAsyncThunk('projeto/updateProjetoServer',
  async (product) => {
    let response = await fetch('...' + product.id , 
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'plication/json;charset-utf8'
        },
        body: JSPN.stringfy(product) 
    });

    if(response.ok){
        return product;
    }
    else{
        throw new Error('Erro ao atualizar projeto');
    }
  }
); */

function updateProjetoReducer(projeto, product) {
    let index = projeto.map(p => p.id).indexOf(product.id);
    projeto.splice(index, 1, product);
    return projeto;
}

/* function updateProjetoReducer(state, product) {
    let index = state.projeto.map(p => p.id).indexOf(product.id);
    state.projeto.splice(index, 1, product);
    return state.projeto;
} */

function deleteProjetoReducer(projeto, id) {
    return projeto.filter((p) => p.id !== id);
}

/* function deleteProjetoReducer(state, id) {
    return state.projeto.filter((p) => p.id !== id);
} */


 /* export const fetchProjeto = createAsyncThunk(`projeto/fetchProjeto`, async() => {return await(await fetch(`...`)).json();
});  */

/* function fullfillProjetoReducer(ProjetoState, projetoFetched){
    projetoState status: 'loaded';
    projetoState.projeto: projetoFetched;
} */

export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialProjeto,
    reducers: {
        addProjeto: (state, action) => addProjetoReducer(state, action.payload),
        updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
        deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
    }/* ,
    extraReducers: {
        [fetchProjeto.pending]: (state, action) => {state.status = 'loading'},
        [fetchProjeto.fulfilled]: (state, action) => fullfillProjetoReducer(state, action.payload),
        [fetchProjeto.rejected]: (state, action) => {state.status = 'failed', state.error = action.error.message},
        [updateProjetoServer.fulfilled]: (state, action) => {updateProjetoReducer(state, action.payload)},
    }*/
});

export const { addProjeto, updateProjeto, deleteProjeto } = projetoSlice.actions;
export default projetoSlice.reducer;