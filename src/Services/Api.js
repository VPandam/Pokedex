const apiURL = "https://pokeapi.co/api/v2/"

export const getPokemonPage = async (limit = 20, offset = 0) => {
  const url = apiURL + `pokemon?limit=${limit}&offset=${offset}`
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err))
}
export const getPokemonByIdOrName = async (id) => {
  const url = apiURL + `pokemon/${id}/`
  return fetch(url).then((res) => res.json())
}
export const getURL = async (url) => {
  return fetch(url).then((res) => res.json())
}
