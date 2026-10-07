import { useState } from 'react';
import { TODOLISTA, type AllapotTipus, type TodoTipus } from './adat';
import './App.css'
import Feladatok from './components/Feladatok'

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const CIM = "Todo";

  const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA)
  function setAllapot(index: number, allapot: AllapotTipus) {
    console.log(index, allapot);
    /* 3 lépében módosítjuk a lista állapotát */
    const UJLISTA: TodoTipus[] = [...lista]
    UJLISTA[index].allapot = allapot
    setLista(UJLISTA)
  }


  return (
    <>
      <header><h1>{CIM}</h1></header>
      <article>
        <Feladatok lista={lista} setAllapot={setAllapot} />
      </article>
      <footer style={{ color: "pink" }}>&copy;{NEV}&trade;</footer>
    </>
  )
}

export default App
