import React from "react"
import ListOfPokemon from "../Components/ListOfPokemon"
import PokemonLogo from "../Images/Logo-Pokemon-500x313.png"

const Pokedex = () => {
  return (
    <div>
      <div className="pokedex">
        <div>
          <img width="400px" src={PokemonLogo} alt="" />
        </div>
        <ListOfPokemon />
      </div>
    </div>
  )
}
export default Pokedex
