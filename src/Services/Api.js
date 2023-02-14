import React, { useEffect, useState } from "react"

const apiURL = "https://pokeapi.co/api/v2/"

export const callApi = async (endpoint, options = {}) => {
  options = {
    method: "GET",
    headers: {
      "Content-type": "applications/json",
    },
  }
  const url = apiURL + endpoint + "/?limit=20&offset=20"
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => console.log(err))
}

export const getPokemons = async (limit = 20, offset = 0) => {
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
