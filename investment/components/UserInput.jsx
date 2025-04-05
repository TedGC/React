


export default function UserInput({ userInput, onChange }) {


    return (
        <section id="user-input">
            <div className="input-group center">
                <p>
                    <label className="user-input">Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label className="user-input">Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label className="user-input">Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p >
                    <label className="user-input">Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
                </p>

            </div>
        </section>
    )
}