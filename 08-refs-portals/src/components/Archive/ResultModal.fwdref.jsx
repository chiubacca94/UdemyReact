import { forwardRef } from "react";

// const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
export default forwardRef(function ResultModal({ result, targetTime }, ref) {
    // forwardRef allows us to pass a ref to the dialog element and its old
    // This is the adjusted version of the original ResultModal component
   return <dialog ref={ref} className="result-modal">
        {/* Forcing open (adding the open attribute) dialog will not allow the dimmed bg */}
        <h2>You {result === "lost" ? "lost!" : "won!"}</h2>
        <p>Target time: {targetTime} seconds</p>
        <p>Your time: <strong>{result}</strong> seconds</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
});