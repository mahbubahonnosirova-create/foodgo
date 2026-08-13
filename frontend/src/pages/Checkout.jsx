import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useCart } from "../context/CartContext"
import { createOrder } from "../api/api"

export default function Checkout() {
  const navigate = useNavigate()

  const {
    cart,
    clearCart,
  } = useCart()

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    comment: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const totalPrice = cart.reduce(
    (total, item) => {
      return total + item.price * item.quantity
    },
    0
  )

  const totalItems = cart.reduce(
    (total, item) => {
      return total + item.quantity
    },
    0
  )

  function handleChange(event) {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
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

      const items = cart.map((item) => ({
        productId: item._id || item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }))

      const order = await createOrder({
        ...form,
        items,
        totalPrice,
      })

      /*
        Сохраняем заказ в localStorage,
        чтобы страница "Мои заказы"
        могла его показать.
      */

      const savedOrders =
        JSON.parse(
          localStorage.getItem("orders")
        ) || []

      const newOrder = {
        id: order._id,
        date: new Date().toLocaleString("ru-RU"),
        status: "Принят",
        itemsCount: totalItems,
        total: totalPrice,
      }

      localStorage.setItem(
        "orders",
        JSON.stringify([
          newOrder,
          ...savedOrders,
        ])
      )

      /*
        После успешного заказа
        очищаем корзину.
      */

      clearCart()

      /*
        Переходим на страницу успешного заказа.
      */

      navigate(
        `/order-success?id=${order._id}`
      )

    } catch (error) {
      console.error(error)

      setError(
        error?.message ||
          "Не удалось оформить заказ"
      )

    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white px-5 pb-10 pt-8">

        <div className="mx-auto flex min-h-[80vh] max-w-md flex-col items-center justify-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f5eeee] text-3xl">
            🛒
          </div>

          <h1 className="mt-6 text-2xl font-bold text-[#3d3434]">
            Корзина пуста
          </h1>

          <p className="mt-2 text-sm text-[#999292]">
            Добавь что-нибудь вкусное
          </p>

          <Link
            to="/menu"
            className="mt-7 flex h-12 items-center justify-center rounded-2xl bg-[#3d3030] px-8 text-sm font-bold text-white transition hover:bg-[#2f2525]"
          >
            Перейти в меню
          </Link>

        </div>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white px-5 pb-10 pt-8">

      <div className="mx-auto max-w-md">

        {/* BACK */}

        <Link
          to="/cart"
          className="inline-flex text-sm font-bold text-[#999292] transition hover:text-[#3d3434]"
        >
          ← Назад в корзину
        </Link>


        {/* HEADER */}

        <div className="mt-6">

          <h1 className="text-2xl font-black text-[#3d3434]">
            Оформление заказа
          </h1>

          <p className="mt-2 text-sm text-[#999292]">
            Заполни данные для доставки
          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-5"
        >

          {/* CUSTOMER DATA */}

          <section className="rounded-3xl bg-[#f7f6f6] p-5">

            <h2 className="text-base font-black text-[#3d3434]">
              Данные получателя
            </h2>

            <div className="mt-5 space-y-4">

              {/* NAME */}

              <div>

                <label className="mb-2 block text-xs font-bold text-[#777070]">
                  Имя
                </label>

                <input
                  type="text"
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  placeholder="Введите имя"
                  required
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#3d3434] outline-none transition placeholder:text-[#aaa3a3] focus:border-[#3d3030]"
                />

              </div>


              {/* PHONE */}

              <div>

                <label className="mb-2 block text-xs font-bold text-[#777070]">
                  Телефон
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  required
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#3d3434] outline-none transition placeholder:text-[#aaa3a3] focus:border-[#3d3030]"
                />

              </div>


              {/* ADDRESS */}

              <div>

                <label className="mb-2 block text-xs font-bold text-[#777070]">
                  Адрес доставки
                </label>

                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Введите адрес"
                  required
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#3d3434] outline-none transition placeholder:text-[#aaa3a3] focus:border-[#3d3030]"
                />

              </div>


              {/* COMMENT */}

              <div>

                <label className="mb-2 block text-xs font-bold text-[#777070]">
                  Комментарий
                </label>

                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Комментарий к заказу"
                  rows="4"
                  className="w-full resize-none rounded-2xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#3d3434] outline-none transition placeholder:text-[#aaa3a3] focus:border-[#3d3030]"
                />

              </div>

            </div>

          </section>


          {/* ERROR */}

          {error && (
            <div className="rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-500">
              {error}
            </div>
          )}


          {/* ORDER TOTAL */}

          <section className="rounded-3xl bg-[#f7f6f6] p-5">

            <div className="flex items-center justify-between">

              <span className="text-sm text-[#8f8989]">
                Товаров
              </span>

              <span className="text-sm font-bold text-[#3d3434]">
                {totalItems}
              </span>

            </div>


            <div className="mt-4 flex items-center justify-between border-t border-[#e9e7e7] pt-4">

              <span className="text-base font-bold text-[#3d3434]">
                Итого
              </span>

              <span className="text-xl font-black text-[#3d3434]">
                {totalPrice.toLocaleString("ru-RU")} сум
              </span>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex h-14 w-full items-center justify-center rounded-2xl bg-[#3d3030] text-sm font-bold text-white transition hover:bg-[#2f2525] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Оформляем..."
                : "Оформить заказ"}
            </button>

          </section>

        </form>


        <div className="h-24" />

      </div>

    </main>
  )
}