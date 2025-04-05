
import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"

export default function Results({ input }) {

    const resultsData = calculateInvestmentResults(input)

    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].annualInvestment -
        resultsData[0].interest



    console.log(resultsData)
    return (
        <table id="result">
            <thead className="thead">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital </th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(result => {
                    const totalInterest =
                        result.valueEndOfYear - result.annualInvestment * result.year

                    const totalAmountInvested = result.valueEndOfYear - totalInterest
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}                                                                                                           