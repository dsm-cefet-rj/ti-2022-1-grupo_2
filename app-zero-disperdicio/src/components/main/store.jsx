import {configureStore} from '@reduxjs/toolkit';

import ProjetoReducer from './ProjetoSlice';

 const store = configureStore ({
    reducer: {
    projeto: ProjetoReducer
    }
});

export default store;
 