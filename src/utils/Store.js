import {configureStore} from '@reduxjs/toolkit';
import userSlice from './UserSlice.js';

const store = configureStore({
    reducer : {
        users : userSlice
    }
})

export default store;