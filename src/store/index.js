import { configureStore } from '@reduxjs/toolkit';
import listSlice  from './slice/listslice';

const store = configureStore({
    reducer:{
        list: listSlice.reducer
    },
})

export default store;