import Feladat from './Feladat';
import { userTodoContext } from '../contexts/Todo.Context';



function Feladatok() {
    /* listát a contextből fogjuk megkapni */
    const {lista} = userTodoContext();
    
    return (
        <div>
            {
                lista.map((elem, index) => {
                    return (
                        <Feladat elem={elem} index={index} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Feladatok