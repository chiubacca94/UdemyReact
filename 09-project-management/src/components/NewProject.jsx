export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <p>
                    <label>Project Name</label>
                    <input />
                </p>
                <p>
                    <label>Project Description</label>
                    <textarea />
                </p>
            </div>
        </div>
    );    
}