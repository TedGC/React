
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersReducer } from './slices/usersSlice'
import { albumsApi } from './apis/albumsApi'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        // if it is a diffuclt concept, need to check out #399
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
    }
});

setupListeners(store.dispatch)


export * from './thunks/fetchUsers'
export * from './thunks/addUsers'
export * from './thunks/removeUser'
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation
} from './apis/albumsApi'






/**
 * creating an ASYNC THUNK
 * 1. create a new file for your thunk. name it after the purpose of the request
 * 2. create the thunk. give it a base type that describes the purpose of the request
 * 3. in the thunk, make the requeset, return the data that you want to use in the reducer
 * 4. in the slcie, add extraReducers, watching for the action types made by the thunk 
 */