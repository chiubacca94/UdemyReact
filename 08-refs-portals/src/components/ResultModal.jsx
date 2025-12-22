import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
    const dialogRef = useRef();
    const didUserTimeout = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const userScore = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); // *1000 to convert from milliseconds to seconds

    useImperativeHandle(ref, () => {
       return {
        open() {
         dialogRef.current.showModal()   
        }
       };
    });

   return createPortal(<dialog ref={dialogRef} className="result-modal">
        {didUserTimeout && <h1>You lost!</h1>}
        {!didUserTimeout && <h1>Your score: {userScore}</h1>}


        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        { didUserTimeout && <p>You ran out of time!</p>}    
        { !didUserTimeout && <p>You stopped the timer was {' '} <strong>{formattedRemainingTime}</strong> seconds.</p> }
        { !didUserTimeout && <p>Remaining time: {formattedRemainingTime} seconds</p>}
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>, document.getElementById('modal')); // HTML JSX CODE, 
};