import { useEffect, useState } from "react"
import { useFavorites } from "../context/FavoritesContext"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../api/api"

export default function Home() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("Все")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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
    async function loadProducts() {
      try {
        setLoading(true)
        setError("")

        const data = await getProducts()

        setProducts(data)
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error)

        setError("Не удалось загрузить товары")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
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
  // ERROR
  // =========================

  if (error) {
    return (
      <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

        <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center text-center">

          <div className="text-5xl">
            :(
          </div>

          <h2 className="mt-4 text-xl font-black text-[#292525]">
            Не удалось загрузить товары
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {error}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-2xl bg-[#f7253d] px-6 py-3 text-sm font-bold text-white"
          >
            Повторить
          </button>

        </div>

      </main>
    )
  }

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
              className="
                h-[52px]
                w-full
                rounded-[18px]
                bg-white
                pl-14
                pr-5
                text-[15px]
                font-medium
                text-[#333333]
                shadow-[0_5px_20px_rgba(0,0,0,0.07)]
                outline-none
                transition
                focus:shadow-[0_6px_24px_rgba(0,0,0,0.10)]
                placeholder:text-[#888888]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[18px]
                  text-[#999999]
                  transition
                  hover:text-[#333333]
                "
              >
                ×
              </button>
            )}

          </div>


          {/* FILTER BUTTON */}

          <button
            type="button"
            className="
              flex
              h-[52px]
              w-[52px]
              shrink-0
              items-center
              justify-center
              rounded-[17px]
              bg-[#f7253d]
              text-white
              shadow-[0_6px_18px_rgba(247,37,61,0.22)]
              transition
              active:scale-95
            "
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

          <div className="
            flex
            gap-3
            overflow-x-auto
            pb-1
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          ">

            {categories.map((category) => (

              <button
                type="button"
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  shrink-0
                  rounded-[17px]
                  px-7
                  py-3.5
                  text-[14px]
                  font-medium
                  transition-all
                  active:scale-95
                  ${
                    activeCategory === category
                      ? "bg-[#f7253d] text-white shadow-[0_7px_18px_rgba(247,37,61,0.20)]"
                      : "bg-[#f1f1f3] text-[#777777] hover:bg-[#e9e9eb]"
                  }
                `}
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

              <div className="
                mx-auto
                h-8
                w-8
                animate-spin
                rounded-full
                border-2
                border-[#f7253d]
                border-t-transparent
              " />

              <p className="mt-4 text-sm text-[#999999]">
                Загрузка товаров...
              </p>

            </div>

          )}


          {/* EMPTY */}

          {!loading &&
            filteredProducts.length === 0 && (

              <div className="
                rounded-[28px]
                bg-white
                px-6
                py-16
                text-center
                shadow-[0_5px_25px_rgba(0,0,0,0.05)]
              ">

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
                    className="
                      mt-6
                      rounded-[16px]
                      bg-[#f7253d]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_6px_18px_rgba(247,37,61,0.20)]
                    "
                  >
                    Очистить поиск
                  </button>
                )}

              </div>

            )}


          {/* PRODUCT GRID */}

          {!loading &&
            filteredProducts.length > 0 && (

              <div className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              ">

                {filteredProducts.map((product) => (

                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                    isFavorite={isFavorite(product)}
                    onFavorite={toggleFavorite}
                  />

                ))}

              </div>

            )}

        </section>

      </div>

    </main>
  )
}