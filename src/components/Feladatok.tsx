import type { AllapotTipus, TodoTipus } from '../adat';
import Feladat from './Feladat';

interface FeladatokProps {
    lista: TodoTipus[];
    setAllapot: (index: number, allapot: AllapotTipus) => void
}

function Feladatok({ lista, setAllapot }: FeladatokProps) {
    return (
        <div>
            {
                lista.map((elem, index) => {
                    return (
                        <Feladat elem={elem} setAllapot={setAllapot} index={index} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Feladatok