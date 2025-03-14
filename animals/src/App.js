import { useState } from 'react'

function getRandomAniaml() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gaotr', 'horse']

    return animals[Math.floior(Math.random() * animals.length)]
}



function App() {

    const [count, setCount] = useState(0);


    const handleClick = () => {
        setCount(count + 1);
    }
    return <div>

        <button onClick={handleClick}> Add animal</button>
        <div>
            number of animals: {count}
        </div>
    </div>
}

export default App;   