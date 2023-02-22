import { useParams } from "react-router-dom"
import "./PokemonDetail.css"
import { useGetPokemonDetailData } from "../../Hooks/useGetPokemonDetailData"
import SectionDetail from "./SectionDetail"
import { getPokemonTypeStyle } from "../../Functions/functions"
import SectionTypeDetail from "./SectionTypeDetail"

function PokemonDetail() {
  const { id } = useParams()
  const { data } = useGetPokemonDetailData(id)
  return (
    <div className="container">
      <div
        className="pokemon-detail"
        style={
          data?.types[0]
            ? {
                background: `linear-gradient(315deg, ${getPokemonTypeStyle(
                  data.types[0].type.name.toLowerCase()
                )} 0%, rgba(255,255,255,1) 100%)`,
              }
            : undefined
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>{data?.name ? data.name.toUpperCase() : null}</h1>
          <h2> &nbsp; #{id}</h2>
        </div>
        <div className="image-container">
          <img
            src={data?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <img
            src={data?.sprites.other["official-artwork"].front_shiny}
            alt=""
          />
        </div>
        <div className="data-container">
          <SectionTypeDetail
            title="TYPE"
            data={data?.types?.map(({ type }) => {
              return { value1: type.name.toUpperCase() }
            })}
          />
          <SectionDetail
            title="ABILITIES"
            data={data?.abilities?.map(({ ability }) => {
              return {
                value1: ability.name,
              }
            })}
          />
          <div className="stats-container">
            <SectionDetail
              title="STATS"
              data={data?.stats?.map((stat) => {
                return {
                  value1: stat.stat.name,
                  value2: stat.base_stat,
                }
              })}
            />
          </div>

          <br />
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
