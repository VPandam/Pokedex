import React, { useContext } from "react"
import Searcher from "./Searcher"
import PokemonCard from "../PokemonCard"
import forthButtonImage from "../../Images/backButton.png"
import backButtonImage from "../../Images/forth-button.png"
import { scrollTop } from "../../Functions/functions"

export default function List({ pokemonList, setPage, useFetchPokemonPage }) {
  const handleClickNextPage = async () => {
    const nextPage = useFetchPokemonPage?.next
    setPage(nextPage)
    scrollTop()
  }
  const handleClickPrevPage = async () => {
    const prevPage = useFetchPokemonPage?.previous
    setPage(prevPage)
    scrollTop()
  }
  return (
    <>
      <Searcher />
      <div className="list-of-pokemon-container">
        <div className="list-of-pokemon">
          {pokemonList?.map(({ id, sprites, name, types }) => {
            return (
              <PokemonCard
                types={types}
                imageUrl={sprites?.other["official-artwork"].front_default}
                key={id}
                id={id}
                name={name}
              />
            )
          })}
        </div>
      </div>
      <div className="pages-buttons-container">
        <button onClick={handleClickPrevPage}>
          <img src={backButtonImage} alt="" />
        </button>
        <button onClick={handleClickNextPage}>
          <img src={forthButtonImage} alt="" />
        </button>
      </div>
    </>
  )
}
