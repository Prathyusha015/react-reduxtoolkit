import {configureStore} from '@reduxjs/toolkit';
// import { counterSlice } from '../features/counter/counterSlice';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../features/theme/themeSlice'
import authReducer from '../features/auth/authSlice'
import notificationReducer from '../features/notifications/notificationSlice';


export const store = configureStore({
    reducer:{
        auth: authReducer,
        counter: counterReducer,
        theme: themeReducer,
        notifications: notificationReducer,

    }
})