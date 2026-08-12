import { createContext, useContext, useEffect, useState } from "react"

const FavoritesContext = createContext(null)

const getProductId = (product) => {
  return product?._id || product?.id
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("foodgo-favorites")

      if (!saved) {
        return []
      }

      const parsed = JSON.parse(saved)

      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      "foodgo-favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  const toggleFavorite = (product) => {
    const productId = getProductId(product)

    if (!productId) {
      return
    }

    setFavorites((current) => {
      const exists = current.some(
        (item) => getProductId(item) === productId
      )

      if (exists) {
        return current.filter(
          (item) => getProductId(item) !== productId
        )
      }

      return [...current, product]
    })
  }

  const isFavorite = (product) => {
    const productId =
      typeof product === "object"
        ? getProductId(product)
        : product

    return favorites.some(
      (item) => getProductId(item) === productId
    )
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    )
  }

  return context
}