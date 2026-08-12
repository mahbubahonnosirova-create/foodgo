import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function ProductCard({
  product,
  isFavorite = false,
  onFavorite,
}) {
  const { addToCart } = useCart()

  const productId = product._id || product.id

  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1">

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <Link
          to={`/product/${productId}`}
          className="block"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
          />
        </Link>


        {/* FAVORITE */}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

            if (onFavorite) {
              onFavorite(product)
            }
          }}
          className={`
            absolute
            right-3
            top-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/95
            text-[22px]
            shadow-[0_4px_15px_rgba(0,0,0,0.12)]
            backdrop-blur
            transition
            hover:scale-105
            active:scale-90
            ${
              isFavorite
                ? "text-[#ff3043]"
                : "text-[#555555]"
            }
          `}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>


      {/* INFO */}

      <div className="p-4">

        <Link to={`/product/${productId}`}>

          <h3 className="line-clamp-1 text-[15px] font-black">
            {product.name}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-400">
            {product.description}
          </p>

        </Link>


        {/* PRICE + CART */}

        <div className="mt-4 flex items-center justify-between">

          <span className="text-[16px] font-black">
            {product.price?.toLocaleString("ru-RU")}

            <span className="ml-1 text-xs font-semibold text-gray-400">
              сум
            </span>
          </span>


          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4d35] text-xl font-medium text-white shadow-lg shadow-[#ff4d35]/20 transition active:scale-90"
          >
            +
          </button>

        </div>

      </div>

    </article>
  )
}