import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name : 'users',
    initialState : {
        user : [{name: 'demo', email : 'demo@gmail.com', password : 'demo123'}]
    },
    reducers : {
        addItem : (state, action)=>{
            state.user.push(action.payload)
        },
        removeItem : (state, action)=>{
            state.user.pop();
        },
        clearCart : (state)=>{
            state.user = []
        }
    }
});

export var {addItem, removeItem, clearCart} = userSlice.actions;

export default userSlice.reducer;