import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useCart } from "../context/CartContext"
import { createOrder } from "../api/api"

export default function Checkout() {

    const navigate = useNavigate()

    const {
        cart,
        totalPrice,
        clearCart
    } = useCart()


    const [form, setForm] = useState({
        customerName: "",
        phone: "",
        address: "",
        comment: ""
    })


    const [loading, setLoading] = useState(false)

    const [error, setError] = useState("")


    function handleChange(event) {

        const { name, value } = event.target

        setForm({
            ...form,
            [name]: value
        })

    }


    async function handleSubmit(event) {

        event.preventDefault()

        setError("")


        if (cart.length === 0) {
            setError("Корзина пуста")
            return
        }


        try {

            setLoading(true)


            const items = cart.map(item => ({
                productId: item._id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            }))


            const order = await createOrder({
                ...form,
                items,
                totalPrice
            })


            clearCart()


            navigate(
                `/order-success?id=${order._id}`
            )

        } catch (error) {

            console.error(error)

            setError(
                error.message || "Не удалось оформить заказ"
            )

        } finally {

            setLoading(false)

        }

    }


    if (cart.length === 0) {

        return (
            <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">

                <div className="text-center">

                    <div className="text-6xl">
                        🛒
                    </div>

                    <h1 className="mt-5 text-2xl font-black">
                        Корзина пуста
                    </h1>

                    <Link
                        to="/menu"
                        className="mt-6 inline-block rounded-full bg-[#e85d3f] px-6 py-3 font-bold text-white"
                    >
                        Перейти в меню
                    </Link>

                </div>

            </main>
        )

    }


    return (
        <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

            <div className="mx-auto max-w-2xl">

                <Link
                    to="/cart"
                    className="text-sm font-bold text-gray-500"
                >
                    ← Назад в корзину
                </Link>


                <h1 className="mt-6 text-3xl font-black">
                    Оформление заказа
                </h1>


                <p className="mt-2 text-sm text-gray-400">
                    Заполни данные для доставки
                </p>


                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <div className="rounded-3xl bg-white p-5 shadow-sm">

                        <h2 className="text-lg font-black">
                            Данные получателя
                        </h2>


                        <div className="mt-5 space-y-4">

                            <input
                                type="text"
                                name="customerName"
                                value={form.customerName}
                                onChange={handleChange}
                                placeholder="Имя"
                                required
                                className="w-full rounded-2xl bg-gray-50 px-4 py-4 outline-none focus:ring-2 focus:ring-[#e85d3f]"
                            />


                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Телефон"
                                required
                                className="w-full rounded-2xl bg-gray-50 px-4 py-4 outline-none focus:ring-2 focus:ring-[#e85d3f]"
                            />


                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Адрес доставки"
                                required
                                className="w-full rounded-2xl bg-gray-50 px-4 py-4 outline-none focus:ring-2 focus:ring-[#e85d3f]"
                            />


                            <textarea
                                name="comment"
                                value={form.comment}
                                onChange={handleChange}
                                placeholder="Комментарий к заказу"
                                rows="4"
                                className="w-full resize-none rounded-2xl bg-gray-50 px-4 py-4 outline-none focus:ring-2 focus:ring-[#e85d3f]"
                            />

                        </div>

                    </div>


                    {error && (
                        <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-500">
                            {error}
                        </div>
                    )}


                    <div className="rounded-3xl bg-white p-5 shadow-sm">

                        <div className="flex justify-between text-gray-500">
                            <span>Товаров</span>

                            <span>
                                {cart.reduce(
                                    (sum, item) =>
                                        sum + item.quantity,
                                    0
                                )}
                            </span>
                        </div>


                        <div className="mt-4 flex justify-between text-xl font-black">

                            <span>
                                Итого
                            </span>

                            <span>
                                {totalPrice.toLocaleString()} сум
                            </span>

                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 w-full rounded-full bg-[#e85d3f] py-4 font-bold text-white transition hover:bg-[#d94f34] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading
                                ? "Оформляем..."
                                : "Оформить заказ"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </main>
    )
}