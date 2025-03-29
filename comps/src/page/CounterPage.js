import { useReducer } from "react";
import Button from '../components/Button'
import Panel from '../components/Panel'


const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const DECREMENT_COUNT = 'derement'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

//ANOTHER ALTERNATIVE TO THE SCRIPT BELOW 


// #299 
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state
    }
}






// const reducer = (state, action) => {
//     if (action.type === INCREMENT_COUNT) {
//         return {
//             ...state,
//             count: state.count + 1
//         }
//     }

//     if (action.type === SET_VALUE_TO_ADD) {
//         return {
//             ...state,
//             valueToAdd: action.payload
//         }
//     }
// }

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })
    console.log(state)


    const increment = () => {
        // setCount(count + 1)
        dispatch({
            type: INCREMENT_COUNT

        })
    }

    const decrement = () => {
        // setCount(count - 1)

        dispatch({
            type: DECREMENT_COUNT,

        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        // setCount(count + valueToAdd)
        // setValueToAdd(0)

        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
    }


    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}> Increment</Button>
            <Button onClick={decrement}> Decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input
                value={state.valueToAdd || ""}
                type="number"
                onChange={handleChange}
                className="p-1 m-3 bg-gray-50 border border-gray-300" />
            <Button>Add it !</Button>
        </form>
    </Panel>
}

export default CounterPage



/**
 * 
 * 1. make a function called "useSomething"
 * 2. find all the non-JSX expressions that refer to 1-2 related pieces of state
 * 3. cut them all oujt, paste htem into 'useSomething'
 * 4. find 'not defined' errors in your component
 * 5. in your hook, return an object that onctains that variables the component needs
 * 6. in the component, call your hook. Destructure the 
 * 
 */





/**
 * 
 * 1. the store is an object that will hold all of our state
 * 2. we usually do not have to interact with it directly. The 'react-redux 
 * library will handle the store for us 
 * 3. to dispatch an action
 * 4. to see what state exists in the store 
 * 
 */


/**
 * 
 * 
 * changing state using Redux
 * 
 * 1. add a reducer to one of your slices that changes state in some particular
 * way
 * 2. export the action creator that the slice automatically creates
 * 3. find the component that you want to dispatch from
 * 4. import the action creator function and 'useDispatch' from react-redux
 * 5. call the 'useDispatch' hook to get access to the dispatch function 
 * 6. when the user does something ,call the action creator to get an action, 
 * then dispatch it 
 */


/**
 * accessing state
 * 
 * 1. find the component that needs to access some state
 * 2. import the 'useSelector' hook from 'react-redux'
 * 3. call the hook, passing in a selector function
 * 4. use the state! anaytime state changes, the component will automatically
 * rerender 
 */