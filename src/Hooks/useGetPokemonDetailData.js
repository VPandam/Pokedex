import { useContext, useState, useEffect } from "react"
import PokemonContext from "../Context/PokemonContext"
import { getPokemonByIdOrName } from "../Services/Api"

//Try to get the data of the pokemon with the id passed by parameter from context
//If it is not in context fetch it
export const useGetPokemonDetailData = (id) => {
  const { contextState } = useContext(PokemonContext)
  const { pokemonList } = contextState
  const [data, setData] = useState()

  const getDataFromContext = () => {
    console.log(pokemonList)
    const data = pokemonList?.filter((pokemon) => pokemon.id === parseInt(id))
    const isDataInContext = data?.length > 0
    console.log(data)
    if (isDataInContext) setData(data[0])
    return isDataInContext
  }
  const fetchPokemonData = async () => {
    console.log("data is not in contextState, call api")
    const response = await getPokemonByIdOrName(id)
    setData(response)
  }

  useEffect(() => {
    const isDataInContext = getDataFromContext()
    console.log(isDataInContext)
    if (!isDataInContext) fetchPokemonData()
  }, [id])

  return { data }
}
