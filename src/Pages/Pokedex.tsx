import React from "react"
import Main from "../Components/ListOfPokemon/ListOfPokemon"
import PokemonLogo from "../Images/Logo-Pokemon-500x313.png"

const Pokedex = () => {
  return (
    <>
      <div>
        <img width="400px" src={PokemonLogo} alt="" />
      </div>
      <Main />
    </>
  )
}
export default Pokedex
