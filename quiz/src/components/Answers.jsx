import { useRef } from "react"

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {


    //to use the function that has values that change when the app re-executed
    // you can use refs for managing values that ar estored and managed independently
    // from the component function lifecylce to which they belong
    // also useRef can be used to utilzie HTML functtinos 
    const shuffledAnswers = useRef()


    // the reason why [...QUESTIONS ]
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer
                let cssClass = ''
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected'
                } if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState
                }

                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}
                        >{answer}</button>
                    </li>
                )
            })}
        </ul>
    )
}
// the goal of having this separate component is to reshuffle as the question changes
// so as the active question index changes. Therefore it would be great if the 
//answers component would simply be recreated if the old one would be destroyed
// and a new instance would be created as the question index changes.
// if we could unmount and remount it, because then all that code here would exectue 
// again. And that's the advantage of putting this component separately from 'Quiz'
// component that it was originally located in 
// not unmounting and reacreating this component is now fairly eays with the help of 
// a key prop because that 'key' prop forces React to destroy the old instance
// and creates a new instance 