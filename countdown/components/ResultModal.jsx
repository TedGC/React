import { useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom'


export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {

    const dialog = useRef()

    const userLost = remainingTime <= 0;

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / targetTime * 1000) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className='result-modal' >
            {userLost && <h2> you lost </h2>}
            {!userLost && <h2>your score: {socre}</h2>}
            <p> The target timw was <strong>{targetTime} seconds</strong></p>
            <p>
                you stopedd the timer with <strong>  {formattedRemainingTime}seconds left</strong>
            </p>
            <form method="dialog" onClose={onReset}>
                <button>Close</button>
            </form>
        </dialog>, document.getElementById('modal')
    )
}