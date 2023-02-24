import { useContext, useEffect, useState } from "react"
import { getPokemonPage, getURL } from "../Services/Api"
import pokemonContext from "../Context/PokemonContext"

//Get every pokemon data of page and store it in the contextState
//If page is null gets the first page of the api
export const useFetchPokemon = (page = undefined) => {
  const { contextState, setContextState } = useContext(pokemonContext)
  const [useFetchPokemonPage, setFetchPokemonPage] = useState([])

  async function fetchPokemons(page = undefined) {
    setContextState({ ...contextState, loading: true })
    let localPokemonPage = []

    localPokemonPage = page ? await getURL(page) : await fetchPokemonPage()
    setFetchPokemonPage(localPokemonPage)
    const pokemonList = await getPokemonList(localPokemonPage)
    setContextState({
      ...contextState,
      loading: false,
      pokemonList: pokemonList,
    })
  }

  const fetchPokemonPage = async (limit = 20, offset = 0) => {
    const localPokemonPage = await getPokemonPage(limit, offset)
    return localPokemonPage
  }

  const getPokemonList = async (pokemonPage) => {
    const promises = pokemonPage.results.map(async (element) => {
      return await getURL(element.url)
    })
    return await Promise.all(promises)
  }

  useEffect(() => {
    fetchPokemons(page)
  }, [page])

  return { useFetchPokemonPage }
}
