
export interface Page {
    next: string,
    previous: string,
    results: [{url: string}]
}

export interface PokemonData {
    id: string
    sprites: {other: {'official-artwork':{'front_default': any} & {'front_shiny': any}}}
    name: string
    types: [{type: {name: string}}]
    abilities: [{ability: {name: string}}]
    stats: [{stat:{name:string}, base_stat:string}]
}
export interface ContextStateType {
    pokemonPage: Page
    loading: boolean
    pokemonList: PokemonData[]
    searchedData: PokemonData|undefined
  }
  
export const initialContextState: ContextStateType = {
    pokemonPage: {next: '', previous: '', results:[{url:''}]},
    loading: false,
    pokemonList: [],
    searchedData: {id:'', name: '', sprites: {other:{"official-artwork":{front_default: ''}}}, types: [{type:{name:''}}]}
  }