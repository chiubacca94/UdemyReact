export default function Player({ name, symbol }) {
    return (
        <li>
            <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => onEdit(index)}>Edit</button>
        </li>
    )
}   