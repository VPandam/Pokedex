import React from "react"
import { Link } from "react-router-dom"

function PokemonCard({ name, imageUrl, id }) {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-card-data">
          <img src={imageUrl} alt="" />
          <div className="name-container">
            <h3>{name.toUpperCase()}</h3>
          </div>
          <div className="id-container">
            <span>
              <b>{id}</b>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PokemonCard
