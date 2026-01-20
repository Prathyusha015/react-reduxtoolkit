import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages : []
}

export const notificationSlice = createSlice({
    name : 'notifications',
    initialState,
    reducers: {
        addNotification:(state,action)=>{
            state.messages.push(action.payload);
        },
        removeNotification: (state,action)=>{
            state.messages = state.messages.filter((msg,index)=> index!== action.payload)
        }
        
        

    }
})

export const {addNotification, removeNotification} = notificationSlice.actions;

export default notificationSlice.reducer;
