import { useState, useCallback, useRef } from "react"
import QUESTIONS from '../questions.js'
import quizCompletePng from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx"

export default function Quiz() {
    const shuffledAnswers = useRef()
    const [answerState, setAnswerState] = useState('')
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setAnswerState('answered')
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }

            setTimeout(() => {
                setAnswerState('')
            }, 2000)
        }, 1000)
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])




    if (quizIsComplete) {
        return (<div id="summary">
            <img src={quizCompletePng} alt="quiz complete image" />
            <h2>Quiz Complete!</h2>
        </div>
        )
    }
    if (!shuffledAnswers) {
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }


    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={3000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer
                        let cssClasses = ''
                        if (answerState === 'answered' && isSelected) {
                            cssClasses = 'selected'
                        } if (answerState === 'correct' || answerState === 'wrong' && isSelected) {
                            cssClasses = answerState
                        }

                        return (<li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}
                                className={cssClasses}
                            >{answer}</button>
                        </li>)
                    })}
                </ul>
            </div>
        </div>

    )
}