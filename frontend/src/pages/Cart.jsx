import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    cartTotal,
  } = useCart()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-10">

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#fff1ec] text-4xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Корзина пуста
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Добавь что-нибудь вкусное
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-flex rounded-full bg-[#e85d3f] px-7 py-3.5 font-bold text-white"
          >
            Перейти в меню
          </Link>

        </div>

      </main>
    )
  }


  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-3xl">

        <div className="mb-7">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">
            Ваш заказ
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Корзина
          </h1>

        </div>


        {/* PRODUCTS */}

        <div className="space-y-4">

          {cart.map((item) => (

            <article
              key={item.id}
              className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />


              <div className="min-w-0 flex-1">

                <h2 className="font-bold">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {item.price.toLocaleString()} сум
                </p>


                <div className="mt-3 flex items-center gap-3">

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
                  >
                    −
                  </button>

                  <span className="w-5 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff1ec] text-[#e85d3f]"
                  >
                    +
                  </button>

                </div>

              </div>


              <div className="flex flex-col items-end gap-3">

                <span className="font-black">
                  {(item.price * item.quantity).toLocaleString()} сум
                </span>

                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="text-xs text-gray-400 hover:text-red-500"
                >
                  Удалить
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* TOTAL */}

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <span className="text-gray-400">
              Итого
            </span>

            <span className="text-2xl font-black">
              {cartTotal.toLocaleString()} сум
            </span>

          </div>


          <Link
            to="/checkout"
            className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#e85d3f] font-bold text-white transition hover:bg-[#d94f34]"
          >
            Оформить заказ
          </Link>

        </div>

      </div>

    </main>
  )
}