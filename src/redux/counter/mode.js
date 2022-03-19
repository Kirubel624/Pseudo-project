import {createSlice} from '@reduxjs/toolkit'
import { Action } from 'history';


export const counterSlice  = createSlice({
    name:"mode",
    initialState:{
        light:true
    },
    reducers:{
        changeLight:(state)=>{
            state.light =!state.light;
        },
        decrement:(state)=>{
            // state.value -=1;
        },
        incrementByAmount:(state,action)=>{
            // state.value += action.payload;
        }
    }
});

export const {changeLight,decrement,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer;