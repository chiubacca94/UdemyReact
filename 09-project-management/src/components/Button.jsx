export default function Button({children, ...props}) {
    // The content between the button tags should be flexible so pass in chilren props
    return (
        <button 
            className="px-4 py-2 text-xs md:text-base rounded-b-md bg-stone-700 text-stone-400 hover:bg-stone hover:text-stone-100" {...props}> {children} </button>
    )
}