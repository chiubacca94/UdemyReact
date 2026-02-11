import { createPortal } from "react-dom";
import { useImperativeHandle } from "react"; 
import { useRef } from "react";
import Button from "./Button";
// Need forward Ref to use useImperativeHandle if using old react 18

export default function Modal({ ref, children, buttonCaption }) { // children so Modal is a wrapper component
    const dialogRef = useRef();

    useImperativeHandle(ref, () => ({
        open: () => { // open now a method available on the ref to other components
            dialogRef.current.showModal();
        },
        close: () => {
            dialogRef.current.close();
        }
    }))

    return createPortal( // to make the modal render outside the normal DOM hierarchy and flexible
        
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 rounded-md p-4 bg-stone-50 shadow-lg">
            {children}
            <form method="dialog" className="mt-4 text-right">
                {/* to close the modal */}
                <Button>{buttonCaption}</Button> 
            </form>
        </dialog>, 
        
        document.getElementById("modal-root")
    )
}