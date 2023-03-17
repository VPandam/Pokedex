import React, { useContext, useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import { useFetchPokemon } from "../../Hooks/useFetchPokemon"
import PokemonContext from "../../Context/PokemonContext"
import SearchedPokemon from "./SearchedPokemon"
import "./ListOfPokemon.css"
import List from "./List"
import { Page, initialContextState } from "../../types.d"

export default function Main() {

  const { globalState } = useContext(PokemonContext)
  const { pokemonList, loading, searchedData, pokemonPage:globalPage } = globalState
  const [actualPage, setActualPage] = useState<Page|undefined>(initialContextState.pokemonPage)
  const fetchPokemons = useFetchPokemon()
  useEffect(()=> {
    fetchPokemons()
  },[actualPage])

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="external-container">
            {searchedData?.id? (
              <SearchedPokemon />
            ) : (
              <List
                pokemonList={pokemonList}
                setActualPage={setActualPage}
              />
            )}
          </div>
        </>
      )}
    </>
  )
}
