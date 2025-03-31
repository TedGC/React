import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});


export * from './thunks/fetchUsers'











/**
 * creating an ASYNC THUNK
 * 1. create a new file for your thunk. name it after the purpose of the request
 * 2. create the thunk. give it a base type that describes the purpose of the request
 * 3. in the thunk, make the requeset, return the data that you want to use in the reducer
 * 4. in the slcie, add extraReducers, watching for the action types made by the thunk 
 */