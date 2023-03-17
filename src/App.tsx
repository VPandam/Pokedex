import "./App.css"
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail"
import Pokedex from "./Pages/Pokedex"
import { Route, Routes } from "react-router-dom"
import PokemonContextProvider from "./Context/PokemonContextProvider"

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <div className="pokedex">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </div>
      </PokemonContextProvider>
    </div>
  )
}
export default App
