import { useState } from 'react'

function searchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value)
    }



    const handleFormSubmit = (event) => {
        event.preventDefault(); //need to watch this lecture #74 again why this is used here

        onSubmit('cars')
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
}

export default searchBar;


/**
 * 1. user types in input
 * 2. browser updates the text in the input
 * 3. browser triggers an event to say the input was updated
 * 4. we read the value from the input, update state
 * 5. state update! component rerenders
 * 6. we provide 'value' prop to input - react changes the input's value 
 * 
 */