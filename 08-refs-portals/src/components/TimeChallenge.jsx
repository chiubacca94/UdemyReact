import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {

    // Use ref to hold mutable timer ID across renders (doesn't trigger re-renders)
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // 1000 for ms to seconds

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    function handleStart() { 
        // execute the following code after 10ms
        timer.current = setInterval(() => {;
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);
    }

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">Target time: {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running' : 'Timer is inactive'}
                </p>
            </section>
        </>
    )
}