import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <h2 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h2>
            </header>
            <NewTask onAdd={onAdd} />
            {/* p ad ul should be shown conditionally */}
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project doesn't have any tasks yet.</p>}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 bg-stone-100 rounded-md">
                    {tasks.map(task => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button className="text-stone-700 hover:text-red-550" onClick={() => onDelete(task.id)}>Clear</button>
                        </li>
                    ))}
                    {/* () => onDelete(task.id) need full control and can send id via this way */}
                </ul>
            )}  
        </section>
    );
}