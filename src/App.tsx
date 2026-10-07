import './App.css'
import Feladatok from './components/Feladatok'

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const CIM = "Todo";

  return (
    <>
      <header><h1>{CIM}</h1></header>
      <article>
        <Feladatok  />
      </article>
      <footer style={{ color: "pink" }}>&copy;{NEV}&trade;</footer>
    </>
  )
}

export default App
