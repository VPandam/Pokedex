import React, { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import { getPokemons, getURL } from "../Services/Api"

export default function ListOfPokemon() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonPage, setPokemonPage] = useState([])

  // function getPokemon(id) {
  //   callApi.pokemon.getPokemon(id).then((data) => {
  //     setPokemon([...pokemon, data])
  //   })
  // }

  async function fetchPokemons(page = undefined) {
    let pokemonPage = []
    //Page has a list with the urls of pokemon
    //We can pass a specific page by parameter or get the default one (number 0) by default
    page ? (pokemonPage = page) : (pokemonPage = await getPokemonPage(20))
    setPokemonPage(pokemonPage)
    console.log(pokemonPage)
    //Get the data of every url in the page and set the pokemonList state
    getPokemonList(pokemonPage)
  }

  const getPokemonPage = async (limit = 20, offset = 0) => {
    const pokemonPage = await getPokemons(limit, offset)
    setPokemonPage(pokemonPage)
    return pokemonPage
  }

  const getPokemonList = async (pokemonPage) => {
    let pokemonArray = []
    const promises = pokemonPage.results.map(async (element) => {
      return await getURL(element.url)
    })
    const data = await Promise.all(promises)
    pokemonArray = [...data]
    console.log(pokemonArray)
    setPokemonList([...pokemonArray])
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  const handleClickNextPage = async () => {
    const nextPage = pokemonPage?.next ? await getURL(pokemonPage.next) : null
    fetchPokemons(nextPage)
  }
  const handleClickPrevPage = async () => {
    const prevPage = pokemonPage?.previous
      ? await getURL(pokemonPage.previous)
      : null
    fetchPokemons(prevPage)
  }

  return (
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
  )
}
