import React, { useState } from "react"
import PokemonCard from "./PokemonCard"
import Loader from "./Loader/Loader"
import { useFetchPokemon } from "../Hooks/useFetchPokemon"
import { scrollTop } from "../Functions/functions"

export default function ListOfPokemon() {
  const [page, setPage] = useState(null)
  const { loading, pokemonList, pokemonPage } = useFetchPokemon(page)

  const handleClickNextPage = async () => {
    const nextPage = pokemonPage?.next
    setPage(nextPage)
    scrollTop()
  }
  const handleClickPrevPage = async () => {
    const prevPage = pokemonPage?.previous
    setPage(prevPage)
    scrollTop()
  }

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="list-of-pokemon-container">
            <div className="list-of-pokemon">
              {pokemonList?.map(({ id, sprites, name }) => {
                return (
                  <PokemonCard
                    imageUrl={sprites?.front_default}
                    key={id}
                    id={id}
                    name={name}
                  />
                )
              })}
            </div>
          </div>
          <button onClick={handleClickNextPage}>nextPage</button>
          <button onClick={handleClickPrevPage}>PrevPage</button>
        </>
      )}
    </>
  )
}
