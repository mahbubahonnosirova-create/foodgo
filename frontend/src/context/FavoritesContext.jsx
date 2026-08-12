import { createContext, useContext, useState } from "react"

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  // Добавить / убрать из избранного
  const toggleFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (item) => item.id === product.id
      )

      if (exists) {
        return currentFavorites.filter(
          (item) => item.id !== product.id
        )
      }

      return [...currentFavorites, product]
    })
  }

  // Проверить, есть ли товар в избранном
  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}