import React, { useContext, useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import Loader from "./Loader/Loader"
import { useFetchPokemon } from "../Hooks/useFetchPokemon"
import { scrollTop } from "../Functions/functions"
import PokemonContext from "../Context/PokemonContext"
import { getPokemonByIdOrName } from "../Services/Api"
import forthButtonImage from "../Images/backButton.png"
import backButtonImage from "../Images/forth-button.png"
import { useFetcher } from "react-router-dom"

export default function ListOfPokemon() {
  const { contextState, setContextState } = useContext(PokemonContext)
  const { pokemonList, loading, searchedData } = contextState
  const [page, setPage] = useState(null)
  const { pokemonPage } = useFetchPokemon(page)

  const handleClickNextPage = async () => {
    console.log(pokemonList)
    const nextPage = pokemonPage?.next
    setPage(nextPage)
    scrollTop()
  }
  const handleClickPrevPage = async () => {
    const prevPage = pokemonPage?.previous
    setPage(prevPage)
    scrollTop()
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const searchString = ev.target.search.value.toLowerCase()
    const searchedData = await getPokemonByIdOrName(searchString)
    console.log(searchedData)
    setContextState({ ...contextState, searchedData: searchedData })
  }

  const getBackToPokemonList = () => {
    setContextState({ ...contextState, searchedData: undefined })
  }

  useEffect(() => console.log(searchedData), [searchedData])
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
              <>
                <div className="searched-card-input-container">
                  <button onClick={getBackToPokemonList}>
                    <img
                      width="70px"
                      height="70px"
                      src={backButtonImage}
                      alt=""
                    />
                  </button>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="search"
                      className="searcher-searched"
                    />
                  </form>
                </div>
                <div className="searched-card-container">
                  <PokemonCard
                    imageUrl={
                      searchedData?.sprites.other["official-artwork"]
                        .front_default
                    }
                    types={searchedData.types}
                    key={searchedData.id}
                    id={searchedData.id}
                    name={searchedData.name}
                  />
                </div>
              </>
            ) : (
              <>
                <form className="searcher-form" onSubmit={handleSubmit}>
                  <input type="text" name="search" className="searcher" />
                </form>
                <div className="list-of-pokemon-container">
                  <div className="list-of-pokemon">
                    {pokemonList?.map(({ id, sprites, name, types }) => {
                      return (
                        <PokemonCard
                          types={types}
                          imageUrl={
                            sprites?.other["official-artwork"].front_default
                          }
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
            )}
          </div>
        </>
      )}
    </>
  )
}
