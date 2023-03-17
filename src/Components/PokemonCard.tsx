import { Link } from "react-router-dom"
import { getPokemonTypeStyle } from "../Functions/functions"

interface PokemonCardProps {
  name: string
  imageUrl: string
  id: string
  types: [{type: {name: string}}]
}

function PokemonCard({ name, imageUrl, id, types }: PokemonCardProps) {
  return (
    <div
      className="pokemon-card"
      style={
        types[0]
          ? {
              background: `linear-gradient(264deg, ${getPokemonTypeStyle(
                types[0].type.name.toLowerCase()
              )} 20%, rgba(255,255,255,1) 100%)`,
            }
          : undefined
      }
    >
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-card-data">
          <img src={imageUrl} alt="" />
          <div className="name-container">
            <h3>{name?.toUpperCase()}</h3>
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
