import React from "react"
export default function SectionDetail({ title, data }) {
  console.log(data)
  return (
    <div className="section-container">
      <h2>{title}</h2>
      <ul>
        {data?.map((data) => {
          return (
            <li key={data.value1}>
              <h3>
                &nbsp;{data.value1.toUpperCase()}
                &nbsp;{data.value2 ? data.value2 : null}
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
