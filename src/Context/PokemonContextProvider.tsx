import React,{ useState } from "react"
import { ContextStateType, initialContextState } from '../types.d'
import PokemonContext from "./PokemonContext"


   const PokemonContextProvider:React.FC<{children: React.ReactNode}> = ({children})=> {
    
    const [globalState, setGlobalState] = useState<ContextStateType>(initialContextState)

    return (
        <PokemonContext.Provider value={{globalState, setGlobalState}}>
          {children}
        </PokemonContext.Provider>
    )
  }
  


export default PokemonContextProvider
