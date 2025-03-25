import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }

    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON???
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">

            <Panel
                className="flex justify-between items-center cursor-pointe"
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>

            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
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
 * 
 * Reusuasble presentaeiton components
 * 
 * 1. creawte a new component that shows a handful of JSX elements
 * 2. make sure the component accpets + uses the children prop
 * 3. allow extra classNames to be passsed in + merget them
 * 4. take extra props, pass them through to root element 
 * 
 * how to check whewther the rendering is working or not on my own 
 * 
 * 1. performance.now() 
 * -- figure out how long it takes to process it in console
 * 
 * window.timeTwo = performance.now() between the target functions and determine 
 * whether each component is working or not 
 */