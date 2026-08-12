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
      <main className="min-h-screen w-full bg-white px-5 pb-32 pt-8">
        <div className="mx-auto max-w-md">

          {/* EMPTY CART */}

          <div className="flex min-h-[75vh] flex-col items-center justify-center text-center">

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

        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen w-full bg-white px-5 pb-8 pt-8">

      <div className="mx-auto max-w-md">

        {/* ORDER SUMMARY */}

        <section>

          <h1 className="text-xl font-bold text-[#3d3434]">
            Order summary
          </h1>

          <div className="mt-5 space-y-3">

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8f8989]">
                Order
              </span>

              <span className="text-xs text-[#8f8989]">
                {cartTotal.toLocaleString()} сум
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8f8989]">
                Taxes
              </span>

              <span className="text-xs text-[#8f8989]">
                0 сум
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8f8989]">
                Delivery fees
              </span>

              <span className="text-xs text-[#8f8989]">
                0 сум
              </span>
            </div>

          </div>

          <div className="my-5 border-t border-[#eeeeee]" />

          <div className="flex items-center justify-between">

            <span className="text-sm font-bold text-[#3d3434]">
              Total
            </span>

            <span className="text-sm font-bold text-[#3d3434]">
              {cartTotal.toLocaleString()} сум
            </span>

          </div>

        </section>


        {/* PRODUCTS */}

        <section className="mt-8">

          <h2 className="text-base font-bold text-[#3d3434]">
            Your order
          </h2>

          <div className="mt-4 space-y-3">

            {cart.map((item) => (

              <article
                key={item.id}
                className="rounded-2xl bg-[#f7f6f6] p-3"
              >

                <div className="flex gap-3">

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[76px] w-[76px] shrink-0 rounded-xl object-cover"
                  />


                  {/* INFO */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                      <div className="min-w-0">

                        <h3 className="truncate text-sm font-bold text-[#3d3434]">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#999292]">
                          {item.price.toLocaleString()} сум
                        </p>

                      </div>

                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-[#aaa3a3] transition hover:text-red-500"
                      >
                        ×
                      </button>

                    </div>


                    {/* QUANTITY */}

                    <div className="mt-3 flex items-center justify-between">

                      <div className="flex items-center rounded-xl bg-white p-1">

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-lg text-[#3d3434] transition hover:bg-[#f1eeee]"
                        >
                          −
                        </button>

                        <span className="w-8 text-center text-xs font-bold text-[#3d3434]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3d3030] text-lg text-white transition hover:bg-[#2f2525]"
                        >
                          +
                        </button>

                      </div>


                      {/* ITEM TOTAL */}

                      <span className="text-sm font-bold text-[#3d3434]">
                        {(item.price * item.quantity).toLocaleString()} сум
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* SAVE DETAILS */}

        <div className="mt-6 flex items-center gap-2">

          <div className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#ef3340] text-[10px] text-white">
            ✓
          </div>

          <span className="text-[11px] text-[#999292]">
            Save cart details for future payments
          </span>

        </div>


        {/* PAYMENT */}

        <section className="mt-8 rounded-2xl bg-white pt-5">

          <div className="border-t border-[#eeeeee] pt-5">

            <div className="flex items-center justify-between gap-4">

              {/* TOTAL PRICE */}

              <div>

                <p className="text-[11px] text-[#999292]">
                  Total price
                </p>

                <p className="mt-1 text-xl font-bold text-[#3d3434]">
                  {cartTotal.toLocaleString()} сум
                </p>

              </div>


              {/* PAY NOW */}

              <Link
                to="/checkout"
                className="flex h-12 min-w-[130px] items-center justify-center rounded-2xl bg-[#3d3030] px-7 text-sm font-bold text-white transition hover:bg-[#2f2525]"
              >
                Pay Now
              </Link>

            </div>

          </div>

        </section>


        {/* EXTRA SPACE FOR BOTTOM NAV */}

        <div className="h-32 w-full" />

      </div>

    </main>
  )
}