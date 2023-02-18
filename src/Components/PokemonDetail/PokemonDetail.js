import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonByIdOrName } from "../../Services/Api"
import { capitalizeWord } from "../../Functions/functions"
import "./PokemonDetail.css"
import pokemonContext from "../../Context/PokemonContext"

function PokemonDetail() {
  const { id } = useParams()
  const [data, setData] = useState()
  const { contextState } = useContext(pokemonContext)
  const { pokemonList } = contextState

  const getDataFromContext = () => {
    console.log(pokemonList)
    const data = pokemonList?.filter((pokemon) => pokemon.id === parseInt(id))
    const isDataInContext = data !== undefined
    if (isDataInContext) setData(data[0])
    return isDataInContext
  }
  const fetchPokemonData = async () => {
    console.log('data is not in contextState, call api')
    const response = await getPokemonByIdOrName(id)
    setData(response)
  }

  useEffect(() => {
    if (!getDataFromContext()) fetchPokemonData()
  }, [])

  return (
    <div className="pokemon-detail">
      <h1>
        {data?.name ? capitalizeWord(data.name) : null}
        {id}
      </h1>
      <div className="abilities-container">
        <h2> Abilities: </h2>
        <div className="abilities">
          {data?.abilities?.map((ability, index) => {
            console.log(ability.ability.name)
            return <h3 key={index}>· {capitalizeWord(ability.ability.name)}</h3>
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
