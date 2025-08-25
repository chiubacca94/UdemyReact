Can also do this

export default function TabButton({children}) {
    
    function handleClick({children}) {
        console.log("Clicked on" + children)
    }

    return (
        <li>
            <button onClick={() => {handleClick({children})}}>{children}</button>
        </li>
    )
}