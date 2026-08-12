import { useEffect, useState } from "react"
import { categories } from "../data/products"
import ProductCard from "../components/ProductCard"

const API_URL = import.meta.env.VITE_API_URL

export default function Menu() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("all")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(
                    `${API_URL}/api/products`
                )

                if (!response.ok) {
                    throw new Error("Ошибка загрузки товаров")
                }

                const data = await response.json()

                setProducts(data)
            } catch (error) {
                console.error(error)
                setError("Не удалось загрузить меню")
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [])

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(
                (product) => product.category === category
            )

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#fafafa]">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#e85d3f]" />

                    <p className="mt-4 text-sm text-gray-400">
                        Загружаем меню...
                    </p>
                </div>
            </main>
        )
    }

    if (error) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">
                <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                    <p className="text-4xl">:(</p>

                    <h2 className="mt-4 text-xl font-black">
                        Не удалось загрузить меню
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                        Проверь, запущен ли backend
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#fafafa] px-5 pb-10 pt-8 sm:px-8">

            <div className="mx-auto max-w-7xl">

                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#e85d3f]">
                        FoodGo
                    </p>

                    <h1 className="mt-2 text-4xl font-black">
                        Наше меню
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Выбирай любимые блюда
                    </p>
                </div>


                <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

                    <button
                        onClick={() => setCategory("all")}
                        className={`rounded-full px-5 py-3 text-sm font-bold ${
                            category === "all"
                                ? "bg-[#e85d3f] text-white"
                                : "bg-white text-gray-500"
                        }`}
                    >
                        Все
                    </button>


                    {categories.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCategory(item.id)}
                            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold ${
                                category === item.id
                                    ? "bg-[#e85d3f] text-white"
                                    : "bg-white text-gray-500"
                            }`}
                        >
                            {item.emoji} {item.name}
                        </button>
                    ))}

                </div>


                {filteredProducts.length === 0 ? (
                    <div className="mt-16 text-center">

                        <p className="text-5xl">
                            🍽️
                        </p>

                        <h2 className="mt-4 text-xl font-black">
                            Здесь пока пусто
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            В этой категории пока нет блюд
                        </p>

                    </div>
                ) : (

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}

                    </div>

                )}

            </div>

        </main>
    )
}