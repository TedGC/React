import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from 'react'
import Results from "./components/Results.jsx"



function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12500,
    expectedReturn: 10,
    duration: 5,
  })

  function handleChange(userIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [userIdentifier]: +newValue
      }
    }
    )
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">change the value! </p>}
      {inputIsValid && <Results input={userInput} />}
    </>

  )
}


export default App
