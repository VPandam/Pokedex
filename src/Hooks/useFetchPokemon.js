import { useEffect, useState } from "react"
import { getPokemonPage, getURL } from "../Services/Api"

//Get every pokemon data of page in pokemonList
//If page is null gets the first page of the api
export const useFetchPokemon = (page = undefined) => {
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonPage, setPokemonPage] = useState([])

  async function fetchPokemons(page = undefined) {
    setLoading(true)
    let pokemonPage = []

    pokemonPage = page ? await getURL(page) : await fetchPokemonPage()
    setPokemonPage(pokemonPage)
    getPokemonList(pokemonPage)
    setLoading(false)
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
    const data = await Promise.all(promises)
    pokemonArray = [...data]
    console.log(pokemonArray)
    setPokemonList([...pokemonArray])
  }

  useEffect(() => {
    fetchPokemons(page)
  }, [page])

  return { loading, pokemonList, pokemonPage }
}
