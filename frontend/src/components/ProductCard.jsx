import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorites } from "../context/FavoritesContext"

export default function ProductCard({ product }) {
    const { addToCart } = useCart()

    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites()

    const favorite = isFavorite(product._id)

    return (
        <article className="group overflow-hidden rounded-[26px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* IMAGE */}

            <div className="relative">

                <Link to={`/product/${product._id}`}>

                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                </Link>


                {/* LIKE */}

                <button
                    onClick={() => toggleFavorite(product)}
                    className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl shadow-md backdrop-blur-sm transition hover:scale-110 active:scale-90 ${
                        favorite
                            ? "text-[#e85d3f]"
                            : "text-gray-400"
                    }`}
                >
                    {favorite ? "♥" : "♡"}
                </button>

            </div>


            {/* CONTENT */}

            <div className="p-4">

                <Link to={`/product/${product._id}`}>

                    <h3 className="font-bold text-gray-900">
                        {product.name}
                    </h3>

                </Link>


                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-400">
                    {product.description}
                </p>


                <div className="mt-4 flex items-center justify-between">

                    <span className="font-black">
                        {product.price.toLocaleString()} сум
                    </span>


                    <button
                        onClick={() => addToCart(product)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e85d3f] text-xl font-medium text-white transition hover:scale-105 hover:bg-[#d94f34] active:scale-95"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>
    )
}