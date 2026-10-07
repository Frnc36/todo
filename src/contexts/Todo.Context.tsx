/* itt fogjuk kezelni az állapotot
létrehizunk egy contextet és egy providert
a context az a környezet amin belül a provider adat 
1. context és a provider létrehozása
2. Provirber használt stitek és függvények meadása
3, szlülö komponens ölelgetése a providerrel
4. flhasználni a komponenskbn a provider value-ban*/

import { createContext, useContext, useState, type ReactNode } from "react";
import { TODOLISTA, type AllapotTipus, type TodoTipus } from "../adat";

export const TodoContext = createContext<FeladatokContextValue | undefined>(undefined)

interface FeladatokContextValue {
    lista: TodoTipus[];
    setAllapot: (index: number, allapot: AllapotTipus) => void
}

interface TodoProviderProps {
    children: ReactNode;
}
export function TodoProvider({ children }: TodoProviderProps) {

    const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA)
    function setAllapot(index: number, allapot: AllapotTipus) {
        console.log(index, allapot);
        /* 3 lépében módosítjuk a lista állapotát */
        const UJLISTA: TodoTipus[] = [...lista]
        UJLISTA[index].allapot = allapot
        setLista(UJLISTA)
    }

    return (
        <TodoContext.Provider value={{ lista, setAllapot }}>{/* {{}}=js kod, objektuj kerül bele */}
            {children}
        </TodoContext.Provider>
    )

}

/* saját hook az olyan függvény amit használhatunk a komponenbe */
export function userTodoContext() {
    const context = useContext(TodoContext)
    if (context === undefined) {
        throw new Error("Az App csak Provideren belül használahtó");
    }
    return context
}