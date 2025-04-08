import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from '../questions.js'

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer
}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })


    // we are creating this timer so that we don't create and operate two different
    // situations 1) when the timer expires and 2) we answer too late and the answer
    // prop gets sent to the parent component after the time expries

    // hence we should ask ourselves whether the question is moved on to the next one 
    // because the timer expired or we selected the question?
    let timer = 10000

    if (answer.selectedAnswer) {
        timer = 1000
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }



    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }
    return (
        <div id="question" >

            <QuestionTimer
                key={timer}
                mode={answerState}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers

                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div >
    )
}