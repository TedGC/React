import { useState } from 'react'

function searchBar({ onSubmit }) {
    const [term, setTerm] = useState('');



    const handleFormSubmit = (event) => {
        event.preventDefault(); //need to watch this lecture #74 again why this is used here

        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
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
 * 
 * the purpose of this seeming stupid iteration of processes is that we can now 
 * refer to the value for 'term' instead of going through a hassle of 
 * "document.querySelect.('input').value to identify the value the use input into
 * the input box. Also, we can just simply update the value of the input by calling
 * 'setTerm'. Component re-renders with every keypress - super easy to add in 
 * more advanced features now 
 */