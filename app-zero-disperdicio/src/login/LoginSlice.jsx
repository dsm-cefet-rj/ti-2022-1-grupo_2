import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpPost } from '../components/main/Utils';

const loginAdapter = createEntityAdapter();
const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const loginServer = createAsyncThunk('login/loginServer', async (login) => {
    const req = await httpPost('http://localhost:3004/login', login);
    return req
})

export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
        [loginServer.pending]: (state) => {
            state.status = 'trying_login'
        },
        [loginServer.fulfilled]: (state, action) => {
            state.status = 'logged_in';
            loginAdapter.addOne(state, action.payload);
            state.currentToken = action.payload.token
        }
    }
})

export default loginSlice.reducer;
export const {
    selectAll: selectAllLogin,
    selectById: selectLoginById
} = loginAdapter.getSelectors(state => state.login)