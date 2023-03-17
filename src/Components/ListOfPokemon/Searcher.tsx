import React, { useContext } from "react"
import { getPokemonByIdOrName } from "../../Services/Api"
import PokemonContext from "../../Context/PokemonContext"

export default function Searcher() {
  const { globalState, setGlobalState } = useContext(PokemonContext)
  
  const handleSubmit = async (ev:React.SyntheticEvent) => {
    ev.preventDefault()
    const target = ev.target as typeof ev.target & {
      search: { value: string };
    };
    const searchString = target.search.value.toLowerCase()
    const searchedData = await getPokemonByIdOrName(searchString)
    if(setGlobalState) setGlobalState({ ...globalState, searchedData: searchedData })
  }
  return (
    <form className="searcher-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className={globalState.searchedData ? "searcher-searched" : "searcher"}
      />
    </form>
  )
}
