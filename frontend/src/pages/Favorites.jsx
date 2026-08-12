import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { useFavorites } from "../context/FavoritesContext"

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">
            Твои любимые
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Избранное
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            {favorites.length === 0
              ? "Здесь пока ничего нет"
              : `${favorites.length} ${favorites.length === 1 ? "товар" : "товара"}`
            }
          </p>

        </div>


        {/* EMPTY */}

        {favorites.length === 0 && (

          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[30px] bg-white px-6 text-center shadow-sm">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#fff1ec] text-5xl">
              ♡
            </div>

            <h2 className="mt-6 text-2xl font-black">
              Пока пусто
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
              Нажимай на сердечко возле понравившихся
              блюд, чтобы сохранить их здесь.
            </p>

            <Link
              to="/menu"
              className="mt-7 rounded-full bg-[#e85d3f] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#d94f34]"
            >
              Перейти в меню
            </Link>

          </div>

        )}


        {/* PRODUCTS */}

        {favorites.length > 0 && (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>

    </main>
  )
}