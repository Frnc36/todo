import type { TodoTipus } from "../adat";
import { userTodoContext } from "../contexts/Todo.Context"

interface FeladatProps {
    elem: TodoTipus
    index: number
}

function Feladat({ elem, index }: FeladatProps) {
    /* a setAllapot() itt is közvetlen a contextből fogja megkapni */
    const {setAllapot} =userTodoContext();
    return (
        <div className="todo">
            <span className="szoveg">{elem.tennivalo}</span>
            <span className="allapot">{elem.allapot}</span>
            <button onClick={() => setAllapot(index, "kész")} title="kész">✅</button>
            <button onClick={() => setAllapot(index, "folyamatban")} title="folyamatban">👣</button>
            <button onClick={() => setAllapot(index, "törölve")} title="töröl">❌</button>
            <button onClick={() => setAllapot(index, "létrehozva")} title="alap">Alapállapot</button>
        </div>
    )
}

export default Feladat