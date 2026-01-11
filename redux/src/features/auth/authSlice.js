import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    isLoggedIn : false,
    user : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action)=>{
        state.isLoggedIn = true;
        state.user = action.payload;
    },
    logout : (state)=>{
        state.isLoggedIn = false;
        state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;