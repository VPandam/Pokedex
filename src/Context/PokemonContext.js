import React, { createContext, useState } from "react"

const PokemonContext = createContext()

// export function PokemonContextProvider({ children }) {
//   const [pokemonList, setPokemonList] = useState([])

//   return (
//     <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
//       {children}
//     </PokemonContext.Provider>
//   )
// }
export default PokemonContext
