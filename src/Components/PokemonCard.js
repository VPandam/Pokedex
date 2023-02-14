import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PokemonCard({ name, imageUrl, id }) {
  const [capitalizedName, setCapitalizedName] = useState("")
  const capitalizeName = () => {
    setCapitalizedName(name.charAt(0).toUpperCase() + name.slice(1))
  }
  useEffect(() => capitalizeName(), [])
  return (
    <div className="pokemon-card">
      <Link>
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
