import { useEffect, useState } from "react"
import { useFavorites } from "../context/FavoritesContext"
import { Link } from "react-router-dom"

export default function Home() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("Все")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites()

  const categories = [
    "Все",
    "Комбо",
    "Бургеры",
    "Шавухи",
    "Хот-доги",
    "Напитки",
  ]

  // =========================
  // ЗАГРУЗКА ТОВАРОВ
  // =========================

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки товаров")
        }

        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Ошибка:", error)
        setLoading(false)
      })
  }, [])

  // =========================
  // ПОИСК + КАТЕГОРИЯ
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Все" ||
      product.category === activeCategory

    const searchText = search
      .trim()
      .toLowerCase()

    const matchesSearch =
      searchText === "" ||
      product.name
        ?.toLowerCase()
        .includes(searchText) ||
      product.description
        ?.toLowerCase()
        .includes(searchText) ||
      product.category
        ?.toLowerCase()
        .includes(searchText)

    return matchesCategory && matchesSearch
  })

  // =========================
  // HOME
  // =========================

  return (
    <main className="min-h-screen bg-[#fafafa] pb-32">

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            SEARCH
        ========================= */}

        <section className="mt-5 flex items-center gap-3">

          <div className="relative flex-1">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[24px] leading-none text-[#333333]">
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search"
              className="h-[52px] w-full rounded-[18px] bg-white pl-14 pr-5 text-[15px] font-medium text-[#333333] shadow-[0_5px_20px_rgba(0,0,0,0.07)] outline-none transition focus:shadow-[0_6px_24px_rgba(0,0,0,0.10)] placeholder:text-[#888888]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-[#999999] transition hover:text-[#333333]"
              >
                ×
              </button>
            )}

          </div>


          {/* FILTER BUTTON */}

          <button
            type="button"
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[17px] bg-[#f7253d] text-white shadow-[0_6px_18px_rgba(247,37,61,0.22)] transition active:scale-95"
          >
            <span className="text-[23px]">
              ☷
            </span>
          </button>

        </section>


        {/* =========================
            CATEGORIES
        ========================= */}

        <section className="mt-7">

          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {categories.map((category) => (

              <button
                type="button"
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`shrink-0 rounded-[17px] px-7 py-3.5 text-[14px] font-medium transition-all active:scale-95 ${
                  activeCategory === category
                    ? "bg-[#f7253d] text-white shadow-[0_7px_18px_rgba(247,37,61,0.20)]"
                    : "bg-[#f1f1f3] text-[#777777] hover:bg-[#e9e9eb]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </section>


        {/* =========================
            PRODUCTS
        ========================= */}

        <section className="mt-7">

          {/* LOADING */}

          {loading && (

            <div className="py-20 text-center">

              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#f7253d] border-t-transparent" />

              <p className="mt-4 text-sm text-[#999999]">
                Загрузка товаров...
              </p>

            </div>

          )}


          {/* EMPTY */}

          {!loading &&
            filteredProducts.length === 0 && (

              <div className="rounded-[28px] bg-white px-6 py-16 text-center shadow-[0_5px_25px_rgba(0,0,0,0.05)]">

                <div className="text-5xl">
                  🔍
                </div>

                <h2 className="mt-4 text-xl font-black text-[#292525]">
                  Ничего не найдено
                </h2>

                <p className="mt-2 text-sm text-[#999999]">
                  Попробуй изменить запрос или выбрать другую категорию
                </p>

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mt-6 rounded-[16px] bg-[#f7253d] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(247,37,61,0.20)]"
                  >
                    Очистить поиск
                  </button>
                )}

              </div>

            )}


          {/* PRODUCT GRID */}

          {!loading &&
            filteredProducts.length > 0 && (

              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">

                {filteredProducts.map((product) => (

                  <article
                    key={product._id}
                    className="group overflow-hidden rounded-[24px] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1"
                  >

                    {/* =========================
                        IMAGE
                    ========================= */}

                    <div className="relative h-[180px] w-full overflow-hidden bg-[#eeeeee] sm:h-[210px]">

                      <Link
                        to={`/product/${product._id}`}
                        className="block h-full w-full"
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                      </Link>


                      {/* FAVORITE */}

                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          toggleFavorite(product)
                        }}
                        className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[21px] shadow-[0_4px_15px_rgba(0,0,0,0.12)] transition active:scale-90 ${
                          isFavorite(product)
                            ? "text-[#f7253d]"
                            : "text-[#777777]"
                        }`}
                      >
                        {isFavorite(product)
                          ? "♥"
                          : "♡"}
                      </button>

                    </div>


                    {/* =========================
                        INFO
                    ========================= */}

                    <div className="px-4 pb-4 pt-3">

                      <Link
                        to={`/product/${product._id}`}
                      >

                        <h3 className="truncate text-[15px] font-bold text-[#302b2b]">
                          {product.name}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-[#999999]">
                          {product.description}
                        </p>

                      </Link>


                      <div className="mt-3 flex items-center justify-between">

                        <span className="text-[15px] font-black text-[#222222]">
                          {product.price?.toLocaleString("ru-RU")} сум
                        </span>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            )}

        </section>

      </div>

    </main>
  )
}