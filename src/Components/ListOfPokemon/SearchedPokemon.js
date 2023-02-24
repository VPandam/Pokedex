import React, { useContext } from "react"
import PokemonCard from "../PokemonCard"
import backButtonImage from "../../Images/forth-button.png"
import PokemonContext from "../../Context/PokemonContext"
import Searcher from "./Searcher"
export default function SearchedPokemon() {
  const { contextState, setContextState } = useContext(PokemonContext)
  const { searchedData } = contextState

  const getBackToPokemonList = () => {
    setContextState({ ...contextState, searchedData: undefined })
  }

  return (
    <>
      <div className="searched-card-input-container">
        <button className="searcher-back-button" onClick={getBackToPokemonList}>
          <img src={backButtonImage} alt="" />
        </button>
        <Searcher />
      </div>
      <div className="searched-card-container">
        <PokemonCard
          imageUrl={
            searchedData?.sprites.other["official-artwork"].front_default
          }
          types={searchedData.types}
          key={searchedData.id}
          id={searchedData.id}
          name={searchedData.name}
        />
      </div>
    </>
  )
}
