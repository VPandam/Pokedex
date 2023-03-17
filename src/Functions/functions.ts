export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export const capitalizeWord = (word:string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const getPokemonTypeStyle = (type:string) => {
  switch (type) {
    case "water":
      return "rgba(0, 132, 255,1)"
    case "grass":
      return "green"
    case "fire":
      return "red"
    case "electric":
      return "rgb(255, 217, 0)"
    case "dark":
      return "black"
    case "fairy":
      return "pink"
    case "rock":
      return "grey"
    case "ground":
      return "brown"
    case "bug":
      return "darkolivegreen"
    case "psychic":
      return "purple"
    case "ghost":
      return " rgb(42, 0, 126)"
    case "flying":
      return "rgb(1, 163, 163)"
    case "poison":
      return "darkmagenta"
    case "ice":
      return "aqua"
    case "normal":
      return "rgb(200,156,114)"
    case "fighting":
      return "rgb(255, 140, 33)"
    case "dragon":
      return "darkslateblue"
    case "steel":
      return "silver"
    default:
      break
  }
}
