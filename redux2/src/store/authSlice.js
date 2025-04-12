

import { createSlice } from '@reduxjs/toolkit'


const initialAuthState = { isAuthenticated: false, }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
        /// here there is no need to claim the old state to store the data to make it 
        // immutable because REdux toolkit is going to create that logic behind the scene
        // hence expression such as state.counter ++ is allowed to use in this format when
        // using redux toolkit 
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer