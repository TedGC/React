import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        const handleClick = (nextIndex) => {
            setExpandedIndex(nextIndex)
        }
        return (
            <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {icon}
                    {item.label}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
}

export default Accordion;