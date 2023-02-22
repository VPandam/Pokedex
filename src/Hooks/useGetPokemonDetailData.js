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
    const data = pokemonList?.filter((pokemon) => pokemon.id === parseInt(id))
    const isDataInContext = data?.length > 0
    if (isDataInContext) setData(data[0])
    return isDataInContext
  }
  const fetchPokemonData = async () => {
    const response = await getPokemonByIdOrName(id)
    setData(response)
  }

  useEffect(() => {
    const isDataInContext = getDataFromContext()
    if (!isDataInContext) fetchPokemonData()
  }, [id])

  return { data }
}
