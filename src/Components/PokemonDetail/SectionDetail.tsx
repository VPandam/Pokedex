import React, { FC } from "react"

interface SectionDetailProps {
  title:string, 
  data: {value1:string, value2:string|null}[]| undefined
}

const SectionDetail:FC<SectionDetailProps> = ({title, data}) => {
  return (
    <div className="section-container">
      <h2>{title}</h2>
      <ul>
        {data?.map((data) => {
          return (
            <li key={data.value1}>
              <h3>
                &nbsp;{data.value1?.toUpperCase()}
                &nbsp;{ data.value2? data.value2: null}
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SectionDetail