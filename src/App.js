import "./App.css"
import PokemonDetail from "./Components/PokemonDetail"
import Pokedex from "./Pages/Pokedex.js"
import { Route, Routes, Outlet } from "react-router-dom"

const DetailPocho = () => {
  return <div>detailPocho</div>
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />}>
          <Route path="detail" element={<DetailPocho />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  )
}
export default App
