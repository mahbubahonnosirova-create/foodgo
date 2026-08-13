import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { IoArrowBack, IoSearch } from "react-icons/io5"
import { FaStar } from "react-icons/fa"

import { getProduct } from "../api/api"
import { useCart } from "../context/CartContext"

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [quantity, setQuantity] = useState(2)
  const [spicy, setSpicy] = useState(50)

  // =========================
  // LOAD PRODUCT
  // =========================

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true)
        setError("")

        const data = await getProduct(id)

        setProduct(data)
      } catch (error) {
        console.error("Ошибка загрузки товара:", error)

        setError(
          error?.message || "Не удалось загрузить товар"
        )
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadProduct()
    }
  }, [id])

  // =========================
  // QUANTITY
  // =========================

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  // =========================
  // ORDER
  // =========================

  const handleOrder = () => {
    if (!product) return

    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }

    navigate("/cart")
  }

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-2 py-5 pb-24">

        <div className="mx-auto max-w-md overflow-hidden bg-white">

          <div className="animate-pulse">

            <div className="h-[310px] bg-gray-200" />

            <div className="p-5">

              <div className="h-7 w-3/4 rounded bg-gray-200" />

              <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

              <div className="mt-6 h-24 rounded bg-gray-200" />

            </div>

          </div>

        </div>

      </main>
    )
  }

  // =========================
  // ERROR
  // =========================

  if (error || !product) {
    return (
      <main className="min-h-screen bg-white px-2 py-5">

        <div className="mx-auto flex min-h-[700px] max-w-md flex-col items-center justify-center bg-white px-6 text-center">

          <div className="text-5xl">
            😕
          </div>

          <h1 className="mt-5 text-2xl font-black text-[#3d3434]">
            Товар не найден
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            {error || "Не удалось загрузить товар"}
          </p>

          <Link
            to="/menu"
            className="mt-6 rounded-2xl bg-[#3d3030] px-7 py-3 text-sm font-bold text-white"
          >
            Вернуться в меню
          </Link>

        </div>

      </main>
    )
  }

  // =========================
  // PRICE
  // =========================

  const price = Number(product.price) || 0

  const totalPrice = price * quantity

  // =========================
  // SPICY SLIDER
  // =========================

  const spicyBackground = {
    background: `linear-gradient(
      to right,
      #ff3043 0%,
      #ff3043 ${spicy}%,
      #eeeeee ${spicy}%,
      #eeeeee 100%
    )`,
  }

  // =========================
  // PAGE
  // =========================

  return (
    <main className="min-h-screen bg-white px-2 py-5 pb-24">

      <div className="mx-auto max-w-md overflow-hidden bg-white">

        {/* =========================
            IMAGE
        ========================= */}

        <div className="relative">

          <img
            src={product.image}
            alt={product.name}
            className="h-[320px] w-full object-cover"
          />

          {/* TOP BUTTONS */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              flex
              items-center
              justify-between
              px-4
              pt-5
            "
          >

            {/* BACK */}

            <Link
              to="/menu"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#3d3434]
                shadow-sm
                backdrop-blur
                transition
                hover:scale-105
              "
            >
              <IoArrowBack size={21} />
            </Link>

            {/* SEARCH */}

            <Link
              to="/search"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#3d3434]
                shadow-sm
                backdrop-blur
                transition
                hover:scale-105
              "
            >
              <IoSearch size={21} />
            </Link>

          </div>

        </div>

        {/* =========================
            INFO
        ========================= */}

        <div className="px-4 pb-7 pt-5">

          {/* NAME */}

          <h1
            className="
              text-[20px]
              font-black
              leading-tight
              text-[#4a3d3d]
            "
          >
            {product.name}
          </h1>

          {/* RATING */}

          <div className="mt-2 flex items-center gap-1.5">

            <FaStar
              className="text-[#ff9d25]"
              size={13}
            />

            <span className="text-xs text-[#888181]">
              {product.rating || "4.9"}
            </span>

            <span className="text-xs text-[#aaa3a3]">
              •
            </span>

            <span className="text-xs text-[#888181]">
              {product.time || "26"} mins
            </span>

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              text-[13px]
              leading-[1.8]
              text-[#777070]
            "
          >
            {product.description ||
              "Этот вкусный продукт приготовлен из свежих ингредиентов. Идеальный выбор для быстрого и вкусного перекуса."}
          </p>

          {/* =========================
              SPICY + PORTION
          ========================= */}

          <div className="mt-6 flex items-end justify-between gap-6">

            {/* SPICY */}

            <div className="flex-1">

              <p className="text-xs font-bold text-[#4a3d3d]">
                Spicy
              </p>

              {/* SLIDER */}

              <div className="relative mt-3 w-[175px]">

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={spicy}
                  onChange={(event) =>
                    setSpicy(Number(event.target.value))
                  }
                  style={spicyBackground}
                  className="
                    h-[5px]
                    w-full
                    cursor-pointer
                    appearance-none
                    rounded-full
                    outline-none
                    accent-[#ff3043]
                  "
                />

              </div>

              {/* MILD / HOT */}

              <div className="mt-2 flex w-[175px] justify-between">

                <span className="text-[10px] font-bold text-[#35b64a]">
                  Mild
                </span>

                <span className="text-[10px] font-bold text-[#ff3043]">
                  Hot
                </span>

              </div>

            </div>

            {/* PORTION */}

            <div className="w-[115px] shrink-0">

              <p className="text-xs font-bold text-[#4a3d3d]">
                Portion
              </p>

              <div className="mt-2 flex items-center justify-between">

                {/* MINUS */}

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#ff3043]
                    text-xl
                    font-bold
                    leading-none
                    text-white
                    shadow-[0_4px_10px_rgba(255,48,67,0.2)]
                    transition
                    hover:bg-[#ed2638]
                    active:scale-90
                  "
                >
                  −
                </button>

                {/* NUMBER */}

                <span className="text-sm font-bold text-[#4a3d3d]">
                  {quantity}
                </span>

                {/* PLUS */}

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#ff3043]
                    text-xl
                    font-bold
                    leading-none
                    text-white
                    shadow-[0_4px_10px_rgba(255,48,67,0.2)]
                    transition
                    hover:bg-[#ed2638]
                    active:scale-90
                  "
                >
                  +
                </button>

              </div>

            </div>

          </div>

          {/* =========================
              PRICE + ORDER
          ========================= */}

          <div className="mt-8 flex items-center gap-4">

            {/* PRICE */}

            <div
              className="
                flex
                h-14
                min-w-[84px]
                items-center
                justify-center
                rounded-[16px]
                bg-[#ff3043]
                px-4
                text-base
                font-black
                text-white
                shadow-[0_7px_18px_rgba(255,48,67,0.2)]
              "
            >
              {totalPrice.toLocaleString("ru-RU")} сум
            </div>

            {/* ORDER NOW */}

            <button
              type="button"
              onClick={handleOrder}
              className="
                flex
                h-14
                flex-1
                items-center
                justify-center
                rounded-[16px]
                bg-[#3d3030]
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#302626]
                active:scale-[0.98]
              "
            >
              ORDER NOW
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}