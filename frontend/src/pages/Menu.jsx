import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const API_URL = import.meta.env.VITE_API_URL

export default function Menu() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("Все")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // ТЕ ЖЕ КАТЕГОРИИ, ЧТО И НА HOME
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

        const response = await fetch(
          `${API_URL}/api/products`
        )

        if (!response.ok) {
          throw new Error("Ошибка загрузки товаров")
        }

        const data = await response.json()

        setProducts(data)
      } catch (error) {
        console.error("Ошибка:", error)

        setError("Не удалось загрузить меню")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  // =========================
  // ФИЛЬТРАЦИЯ
  // =========================

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "Все") {
      return true
    }

    return product.category === activeCategory
  })

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="py-20 text-center">

            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#f7253d] border-t-transparent" />

            <p className="mt-4 text-sm text-[#999999]">
              Загрузка товаров...
            </p>

          </div>

        </div>

      </main>
    )
  }

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[28px] bg-white px-6 py-16 text-center shadow-[0_5px_25px_rgba(0,0,0,0.05)]">

            <div className="text-5xl">
              :(
            </div>

            <h2 className="mt-4 text-xl font-black text-[#292525]">
              Не удалось загрузить меню
            </h2>

            <p className="mt-2 text-sm text-[#999999]">
              Проверь, запущен ли backend
            </p>

          </div>

        </div>

      </main>
    )
  }

  // =========================
  // MENU
  // =========================

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8 sm:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-[#f7253d]">
            FoodGo
          </p>

          <h1 className="mt-2 text-4xl font-black text-[#292525]">
            Наше меню
          </h1>

          <p className="mt-2 text-sm text-[#999999]">
            Выбирай любимые блюда
          </p>

        </div>


        {/* CATEGORIES */}

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


        {/* PRODUCTS */}

        <section className="mt-7">

          {filteredProducts.length === 0 ? (

            <div className="rounded-[28px] bg-white px-6 py-16 text-center shadow-[0_5px_25px_rgba(0,0,0,0.05)]">

              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-4 text-xl font-black text-[#292525]">
                Здесь пока пусто
              </h2>

              <p className="mt-2 text-sm text-[#999999]">
                В этой категории пока нет блюд
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.map((product) => (

                <ProductCard
                  key={product._id}
                  product={product}
                />

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  )
} 