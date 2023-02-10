import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Features/Users/userSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})