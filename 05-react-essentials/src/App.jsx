import { useState } from "react"

import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {

   const [userInput, setUserInput] = useState(
        {
            "initialInvestment": 1000,
            "annualInvestment": 1200,
            "expectedReturn": 6,
            "duration": 10
        }
    ); 
    const isInputValid = userInput.duration >= 1; 

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} userInput={userInput} />
      {isInputValid &&<Results userInput={userInput} />}
      {!isInputValid && <p className="center">Please enter a valid duration (at least 1 year).</p>}
    </>
  )
}

export default App
