import { useState } from "react";

export default function UserInput() {  
    const [UserInput, setUserInput] = useState(
        {
            "initialInvestment": 1000,
            "annualInvestment": 1200,
            "expectedReturn": 6,
            "duration": 10
        }
    ); 

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={UserInput.initialInvestment} required onChange={(event) => handleChange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={UserInput.annualInvestment} required onChange={(event) => handleChange("annualInvestment", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={UserInput.expectedReturn} required onChange={(event) => handleChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={UserInput.duration} required onChange={(event) => handleChange("duration", event.target.value)}/>
                </p>
            </div>
        </section>
    );
}