import React from "react"
import { Outlet, useParams } from "react-router-dom"

function PokemonDetail() {
  const { id } = useParams()

  return (
    <div>
      PokemonDetail {id}
      {<Outlet />}
    </div>
  )
}

export default PokemonDetail
