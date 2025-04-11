

const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {


    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            conuter: state.counter - 1
        }
    }
    return state
}



const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}


store.subscribe(counterSubscriber)


store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })




//how redux works in general based on my understanding from the lecture


/**
 * 
 * there is one store that manages various states within redux and 
 * 
 * 1. componentn want to update hte state by changing some values or proprs or whatnot
 * 2. it sents a request to reducer. 
 * 3. reducer recevies a reqeust and pass it over to store 
 * 4. store receies the value and updates the value within Store 
 * 5. Store then subscribes it to component to be rendered 
 * 
 * in all things, there is a reaosn why certain configurations are set up that way 
 * 
 * for example in the previous project when formaulizing the logic for adding items to the cart
 * there is a return statement for 'state' at the end of the function which was a bit c
 * confusing to me at the time of writing that code. But it just give me back the old value
 * that falls back to the default value I set up in th case of failing other conditions 
 * I have set up before that statement 
 * 
 * 
 */