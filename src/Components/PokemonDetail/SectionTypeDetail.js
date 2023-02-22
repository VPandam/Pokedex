import React from "react"
import { getPokemonTypeStyle } from "../../Functions/functions"

export default function SectionTypeDetail({ title, data }) {
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
                &nbsp;{data.value2 ? data.value2 : null}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
