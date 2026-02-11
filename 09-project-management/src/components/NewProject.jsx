import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancelAddProject }) {
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modalRef = useRef();

    function handleSave() {
        // get the entered value from the input fields
        const enteredTitle = titleRef.current.value; 
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        console.log(enteredTitle, enteredDescription, enteredDueDate);

        // validation...
        if (enteredTitle.trim() == "" || 
            enteredDescription.trim() == "" || 
            enteredDueDate.trim() == "") { // .trim() Remove excess whitespace at beginning and end
                // show error modal
                modalRef.current.open();
                return; // stop further execution
            }

        // save the data
        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
            <p className="text-stone-800 mb-4">Please fill in all fields</p>   
        </Modal> 
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancelAddProject}>Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Project Name" />
                <Input type="text" ref={descriptionRef} label="Project Description" textarea />
                <Input type="date" ref={dueDateRef} label="Due Date" />
            </div>
        </div>
        </>
    );    
}