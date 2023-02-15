import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { getPokemonByIdOrName } from "../../Services/Api"
import { capitalizeWord } from "../../Functions/functions"
import "./PokemonDetail.css"

function PokemonDetail() {
  const { id } = useParams()
  const [data, setData] = useState()

  const fetchPokemonData = async () => {
    const response = await getPokemonByIdOrName(id)
    console.log(response)
    setData(response)
  }
  useEffect(() => {
    fetchPokemonData()
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
