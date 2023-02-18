import { useContext, useEffect, useState } from "react"
import { getPokemonPage, getURL } from "../Services/Api"
import pokemonContext from "../Context/PokemonContext"

//Get every pokemon data of page
//If page is null gets the first page of the api
export const useFetchPokemon = (page = undefined) => {
  const { contextState, setContextState } = useContext(pokemonContext)
  const [pokemonPage, setPokemonPage] = useState([])

  async function fetchPokemons(page = undefined) {
    setContextState({ ...contextState, loading: true })
    let pokemonPage = []

    pokemonPage = page ? await getURL(page) : await fetchPokemonPage()
    setPokemonPage(pokemonPage)
    const pokemonList = await getPokemonList(pokemonPage)
    setContextState({
      ...contextState,
      loading: false,
      pokemonList: pokemonList,
    })
  }

  const fetchPokemonPage = async (limit = 20, offset = 0) => {
    const pokemonPage = await getPokemonPage(limit, offset)
    setPokemonPage(pokemonPage)
    return pokemonPage
  }

  const getPokemonList = async (pokemonPage) => {
    let pokemonArray = []
    const promises = pokemonPage.results.map(async (element) => {
      return await getURL(element.url)
    })
    return await Promise.all(promises)
  }

  useEffect(() => {
    fetchPokemons(page)
  }, [page])

  return { pokemonPage }
}
