import './App.css'

import { useState } from 'react'
import AnimaShow from './AnimalShow'

function getRandomAniaml() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gaotr', 'horse']

    return animals[Math.floior(Math.random() * animals.length)]
}



function App() {

    const [animals, setAnimals] = useState([]);

    //animals.push(getRandomAnimal()) 

    //this function above might modify a piece of state and we don't want to modify it by any means 
    const handleClick = () => {
        setAnimals([...animals, getRandomAniaml()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return <div className='app'>

        <button onClick={handleClick}> Add animal</button>
        <div className='aniaml-list'>
            {renderedAnimals}
        </div>
    </div>
}

export default App;   