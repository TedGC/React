import counterSlice from './counterSlice';
import authSlice from './authSlice'


import { configureStore } from '@reduxjs/toolkit'




// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggleCounter') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }


//     return state
// }

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
    //  { counter: counterSlice.reducer}
    // this is for when we have multiple reducers that have multiple 
    // state change related functions
    // here the key is 'reducer' singular because it will map through
    // all the methods in each reducer and merge them behind the scene
    // it shoudl be labeled as such 
});




export default store







// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber)


// store.dispatch({ type: 'increment'})



/**
 * 
 * 1. create a store
 * 2. create a reducer as a pointer for the store
 * 3. within the Reducer, set up an initial value, if necesary, anad 
 * 4. write down action.types 
 * 5. make a subscriber constant to execute and store data 
 * 6. connect store to that subscriber
 * 7. execute dispath for the actions with the defined types 
 */