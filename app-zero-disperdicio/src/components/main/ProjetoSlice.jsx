import { createSlice/* , createAsyncThunk  */} from '@reduxjs/toolkit';

//const initialProjeto = [];
 const initialProjeto = [{ id: '1', nome: 'Sabão em pó', dataDeValidade: '25/05/2023', quantidade: '3L', comentarios: 'Usar para lavar roupas' },
{ id: '2', nome: 'Chocolate em pó em pó', dataDeValidade: '14/12/2022', quantidade: '3,0kg', comentarios: 'Usar para fazer brigadeiro, bolo e bebidas' }]; 

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
}

/* function fulfillProjetoReducer(projetoState, projetoFetched){
    return projetoFetched;
}

export const fetchProjeto = createAsyncThunk('projeto/fetchProjeto', async() => {
    return await fetch(await fetch(' http://localhost:3004/projeto')).json();
}) */

export const projetoSlice = createSlice({
    name: 'projeto',
    initialState: initialProjeto,
    reducers: {
        addProjeto: (state, action) => addProjetoReducer(state, action.payload),
        updateProjeto: (state, action) => updateProjetoReducer(state, action.payload),
        deleteProjeto: (state, action) => deleteProjetoReducer(state, action.payload)
    }/* ,
    extraReducers:{
        [fetchProjeto.fulfilled]: (state, action) => fulfillProjetoReducer(state, action.payload)
    } */

})

export const { addProjeto, updateProjeto, deleteProjeto } = projetoSlice.actions;
export default projetoSlice.reducer;