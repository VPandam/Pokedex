import React from "react"
import { getPokemonTypeStyle } from "../../Functions/functions"
import { PokemonData } from "../../types"

interface SectionTypeDetailProps {
  title: string
  data: {value1: string}[]|undefined
    
}
const SectionTypeDetail:React.FC<SectionTypeDetailProps> = ({ title, data }) =>{
  return (
    <div className="section-type-container">
      <h2>{title}</h2>
      <ul className="types-list">
        {data?.map((data) => {
          return (
            <li
              key={data.value1}
              style={{
                backgroundColor: getPokemonTypeStyle(data.value1.toLowerCase()),
              }}
            >
              <p>
                &nbsp;{data.value1.toUpperCase()}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SectionTypeDetail
