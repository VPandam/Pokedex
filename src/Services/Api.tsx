const apiURL = "https://pokeapi.co/api/v2/"

export const getPokemonPage = async (limit = 20, offset = 0) => {
  const url = apiURL + `pokemon?limit=${limit}&offset=${offset}`
  return getURL(url)
}
export const getPokemonByIdOrName = async (id:string|undefined) => {
  const url = apiURL + `pokemon/${id}/`
  return getURL(url)
}
export const getURL = async (url:string) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
