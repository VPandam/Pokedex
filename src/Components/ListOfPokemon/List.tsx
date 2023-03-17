import Searcher from "./Searcher"
import PokemonCard from "../PokemonCard"
import forthButtonImage from "../../Images/backButton.png"
import backButtonImage from "../../Images/forth-button.png"
import { scrollTop } from "../../Functions/functions"
import { PokemonData } from "../../types"
import { getURL } from "../../Services/Api"
import { useContext } from "react"
import PokemonContext from "../../Context/PokemonContext"

interface ListProps {
  pokemonList: PokemonData[],
  setActualPage: Function
}

const List:React.FC<ListProps> = ({ pokemonList, setActualPage}) => {
  const {globalState, setGlobalState} = useContext(PokemonContext)
  const {pokemonPage} = globalState
  
  const handleClickNextPage = async () => {
    if(pokemonPage?.next){
      const nextPageURL = pokemonPage?.next
      const nextPage = await getURL(nextPageURL)
      if(setGlobalState)setGlobalState({...globalState, pokemonPage: nextPage})
      setActualPage(nextPage)
      scrollTop()
    }
  }
  const handleClickPrevPage = async () => {
    const prevPageURL = pokemonPage?.previous
    const prevPage = await getURL(prevPageURL)
    if(setGlobalState)setGlobalState({...globalState, pokemonPage: prevPage})    
    setActualPage(prevPage)
    scrollTop()
  }
  return (
    <>
      <Searcher />
      <div className="list-of-pokemon-container">
        <div className="list-of-pokemon">
          {pokemonList?.map(({ id, sprites, name, types }) => {
            return (
              <PokemonCard
                types={types}
                imageUrl={sprites?.other["official-artwork"].front_default}
                key={id}
                id={id}
                name={name}
              />
            )
          })}
        </div>
      </div>
      <div className="pages-buttons-container">
        <button onClick={handleClickPrevPage}>
          <img src={backButtonImage} alt="" />
        </button>
        <button onClick={handleClickNextPage}>
          <img src={forthButtonImage} alt="" />
        </button>
      </div>
    </>
  )
}

export default List