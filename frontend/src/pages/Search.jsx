import { useState } from "react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Search() {
  const [query, setQuery] = useState("")

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-10 pt-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-black">
          Поиск
        </h1>

        <div className="mt-6">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Найти бургер, пиццу..."
            className="w-full rounded-2xl bg-white px-5 py-4 shadow-sm outline-none focus:ring-2 focus:ring-[#e85d3f]"
          />

        </div>

        {query && (
          <p className="mt-6 text-sm text-gray-400">
            Найдено: {results.length}
          </p>
        )}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {results.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {query && results.length === 0 && (
          <div className="py-20 text-center">

            <div className="text-5xl">
              🔍
            </div>

            <h2 className="mt-4 text-xl font-bold">
              Ничего не найдено
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Попробуй другое название
            </p>

          </div>
        )}

      </div>

    </main>
  )
}