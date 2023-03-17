import { useContext } from "react"
import { getPokemonPage, getURL } from "../Services/Api"
import { Page } from "../types"
import PokemonContext from "../Context/PokemonContext"

//Get every pokemon data of page and store it in the contextState
//If page is null gets the first page of the api
export const useFetchPokemon = () => {
  const { globalState, setGlobalState } = useContext(PokemonContext)
  const {pokemonPage: globalPage} = globalState

  const fetchPokemons = async() => {
    console.log('fetchPokemons')
    //Set loading true.
    if(setGlobalState)
    setGlobalState({ ...globalState, loading: true })
    
    //If page is passed by parameter use it, else fetch it.
    let localPokemonPage:Page|undefined = undefined
    if(globalPage?.results?.length > 1)localPokemonPage = {...globalPage}
    else localPokemonPage = await fetchPokemonPage()
    if(setGlobalState && localPokemonPage){
      
      //Get the list of pokemon with the local page.
      //Set loading false
      const pokemonList = await getPokemonList(localPokemonPage)
      setGlobalState({
        ...globalState,
        pokemonPage: localPokemonPage,
        loading: false,
        pokemonList: pokemonList,
      })

        
    }
  }

  const fetchPokemonPage = async (limit = 20, offset = 0) => {
    const localPokemonPage = await getPokemonPage(limit, offset)
    return localPokemonPage
  }

  const getPokemonList = async (pokemonPage: Page) => {
    const promises = pokemonPage.results.map(async (element) => {
      return await getURL(element.url)
    })
    return await Promise.all(promises)
  }

  return fetchPokemons
}