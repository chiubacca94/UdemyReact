import { useState } from "react";

export default function NewTask({ onAdd }) {

    const [enteredTask, setEnteredTask] = useState();

    function handleTaskInput(event) {
        // will handle all keystrokes in the input field
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(!enteredTask || enteredTask.trim() === '') {
            return; // do not add empty tasks
        }
        
        onAdd(enteredTask); // pass the entered task to the onAdd function from props
        setEnteredTask('');
    }

    return (
        // flex to align input and button horizontally
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                placeholder="New Task" 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleTaskInput}
                value={enteredTask}
            />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}