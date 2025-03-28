import { useState, useEffect } from "react";
import Button from '../components/Button'
import Panel from '../components/Panel'
function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        setValueToAdd(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setCount(count + valueToAdd)
        setValueToAdd(0)
    }


    return <Panel className="m-3">
        <h1 className="text-lg">Count is {count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}> Increment</Button>
            <Button onClick={decrement}> Decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input
                value={valueToAdd || ""}
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