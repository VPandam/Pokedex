import "./App.css"
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail"
import Pokedex from "./Pages/Pokedex.js"
import aas from "./Context/PokemonContext"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"

function App() {
  const [contextState, setContextState] = useState({})
  return (
    <div className="App">
      <aas.Provider value={{ contextState, setContextState }}>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </aas.Provider>
    </div>
  )
}
export default App
