import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { capitalizeWord } from "../Functions/functions"

function PokemonCard({ name, imageUrl, id }) {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-card-data">
          <img src={imageUrl} alt="" />
          <div className="name-container">
            <span>{name.toUpperCase()}</span>
          </div>
          <div className="id-container">
            <span>{id}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PokemonCard
