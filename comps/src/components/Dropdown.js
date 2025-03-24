
import { useState } from "react";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)


    //refer to #202 
    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    // refer to #205 
    const handleOptionClick = (option) => {
        setIsOpen(false)

        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })

    let content = 'select... '
    if (value) {
        content = value.label
    }

    return <div>
        <div onClick={() => handleClick(options)}> {value?.label || 'select...'} </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}


export default Dropdown;

/**
 * how to think about all the user interactions that would happend for a single 
 * action of clicking the button and opening up the dropdown menu 
 * 
 * 1. clicking the dropdown
 * 2. list of operations appears
 * 3. clicks an option
 * 4. list of options disappears
 * 5. itme clicked appears in the box 
 * 
 *  refer to lecture #201 for how I should go through each step and come up with
 * function to represent each step in detail 
 */