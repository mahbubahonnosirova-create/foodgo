import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorites } from "../context/FavoritesContext"

const API_URL = import.meta.env.VITE_API_URL

export default function Product() {
    const { id } = useParams()

    const { addToCart } = useCart()

    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetch(
                    `${API_URL}/api/products/${id}`
                )

                if (!response.ok) {
                    throw new Error("Товар не найден")
                }

                const data = await response.json()

                setProduct(data)
            } catch (error) {
                console.error(error)
                setError("Не удалось загрузить товар")
            } finally {
                setLoading(false)
            }
        }

        getProduct()
    }, [id])

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#fafafa]">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#e85d3f]" />

                    <p className="mt-4 text-sm text-gray-400">
                        Загружаем товар...
                    </p>
                </div>
            </main>
        )
    }

    if (error || !product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">
                <div className="text-center">

                    <div className="text-6xl">
                        🍽️
                    </div>

                    <h1 className="mt-5 text-2xl font-black">
                        Товар не найден
                    </h1>

                    <Link
                        to="/menu"
                        className="mt-6 inline-block rounded-full bg-[#e85d3f] px-6 py-3 font-bold text-white"
                    >
                        Вернуться в меню
                    </Link>

                </div>
            </main>
        )
    }

    const favorite = isFavorite(product._id)

    return (
        <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-6 sm:px-8">

            <div className="mx-auto max-w-5xl">

                {/* BACK */}

                <Link
                    to="/menu"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gray-500"
                >
                    ← Назад
                </Link>


                {/* PRODUCT */}

                <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">

                    {/* IMAGE */}

                    <div className="relative">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-[320px] w-full object-cover sm:h-[450px]"
                        />


                        {/* FAVORITE */}

                        <button
                            onClick={() => toggleFavorite(product)}
                            className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg transition hover:scale-110 active:scale-95 ${
                                favorite
                                    ? "text-[#e85d3f]"
                                    : "text-gray-400"
                            }`}
                        >
                            {favorite ? "♥" : "♡"}
                        </button>

                    </div>


                    {/* CONTENT */}

                    <div className="p-6 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-widest text-[#e85d3f]">
                            {product.category}
                        </p>


                        <h1 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                            {product.name}
                        </h1>


                        <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                            {product.description}
                        </p>


                        <div className="my-7 border-t border-gray-100" />


                        {/* PRICE */}

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs text-gray-400">
                                    Цена
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {product.price.toLocaleString()} сум
                                </p>
                            </div>


                            <button
                                onClick={() => addToCart(product)}
                                className="rounded-full bg-[#e85d3f] px-7 py-4 font-bold text-white shadow-lg shadow-[#e85d3f]/20 transition hover:scale-105 hover:bg-[#d94f34] active:scale-95"
                            >
                                Добавить в корзину
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    )
}