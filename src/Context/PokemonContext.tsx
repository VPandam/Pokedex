import { createContext } from "react"
import { ContextStateType, initialContextState } from "../types.d"

interface PokemonContextType {
    globalState: ContextStateType,
    setGlobalState: React.Dispatch<React.SetStateAction<ContextStateType>>| null
}

  const PokemonContext = createContext<PokemonContextType>({globalState: initialContextState, setGlobalState: null})

  export default PokemonContext