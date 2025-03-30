import { createSlice } from '@reduxjs/toolkit'
import { addCar } from './carsSlice'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    },

    // # 345
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0
        })
    }
})

// # 332 for some explanation around why there is 's' at the end of formSlice 
// and there is no 's' at the end of 'reducer' right below 
export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer 