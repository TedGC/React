import { createSlice, nanoid } from '@reduxjs/toolkit'


const carsSlice = createSlice({
    name: 'car',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },

        // quick reminder: 
        // carsSlice has nothing to do with formSlice in terms of receving
        // the data such name and cost that are input into the search engine 
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCar(state, action) {
            //Assumption: 
            // action.payload === the id of the car we want to remove 

            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated;

        }

    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer