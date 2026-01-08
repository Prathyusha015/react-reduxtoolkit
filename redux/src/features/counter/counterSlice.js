import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0
    },
    reducers:{
        increment: (state) =>{
            state.count += 1;
        },
        incrementbyAmount: (state, action) =>{
            state.count += action.payload;
        },
        decrement: (state) =>{
            state.count -= 1;
        },
        decrementbyAmount: (state, action) =>{
            state.count -= action.payload;
        }
    }

});

export const { increment, decrement, incrementbyAmount, decrementbyAmount } = counterSlice.actions;
export default counterSlice.reducer;