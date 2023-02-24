import React, { useContext } from "react"
import { getPokemonByIdOrName } from "../../Services/Api"
import PokemonContext from "../../Context/PokemonContext"

export default function Searcher({}) {
  const { contextState, setContextState } = useContext(PokemonContext)
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const searchString = ev.target.search.value.toLowerCase()
    const searchedData = await getPokemonByIdOrName(searchString)
    setContextState({ ...contextState, searchedData: searchedData })
  }
  return (
    <form className="searcher-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className={contextState.searchedData ? "searcher-searched" : "searcher"}
      />
    </form>
  )
}
