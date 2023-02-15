export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
