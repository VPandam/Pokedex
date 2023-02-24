import React, { useContext, useState } from "react"
import Loader from "../Loader/Loader"
import { useFetchPokemon } from "../../Hooks/useFetchPokemon"
import PokemonContext from "../../Context/PokemonContext"

import SearchedPokemon from "./SearchedPokemon"
import "./ListOfPokemon.css"
import List from "./List"

export default function ListOfPokemon() {
  const [page, setPage] = useState(null)
  const { contextState } = useContext(PokemonContext)
  const { pokemonList, loading, searchedData } = contextState
  const { useFetchPokemonPage } = useFetchPokemon(page)
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="external-container">
            {searchedData ? (
              <SearchedPokemon />
            ) : (
              <List
                pokemonList={pokemonList}
                useFetchPokemonPage={useFetchPokemonPage}
                setPage={setPage}
              />
            )}
          </div>
        </>
      )}
    </>
  )
}
