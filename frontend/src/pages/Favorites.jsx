import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

export default function Favorites() {
  const {
    favorites,
    toggleFavorite,
  } = useFavorites()

  return (
    <main className="min-h-screen bg-[#fafafa] pb-32">

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}

        <section className="pt-8">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f7253d]">
            FOODGO
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">

            <div>

              <h1 className="text-[32px] font-black leading-[1.05] tracking-[-1px] text-[#242020]">
                Избранное
              </h1>

              <p className="mt-2 text-[14px] text-[#999]">
                Твои любимые блюда
              </p>

            </div>

            <div className="shrink-0 rounded-full bg-[#fff0f0] px-4 py-2 text-[12px] font-bold text-[#f7253d]">
              {favorites.length}{" "}
              {favorites.length === 1
                ? "блюдо"
                : "блюд"}
            </div>

          </div>

        </section>


        {/* EMPTY */}

        {favorites.length === 0 ? (

          <div className="mt-10 rounded-[28px] bg-white px-6 py-16 text-center shadow-[0_5px_25px_rgba(0,0,0,0.05)]">

            <div className="text-5xl text-[#f7253d]">
              ♡
            </div>

            <h2 className="mt-4 text-xl font-black text-[#242020]">
              Пока ничего нет
            </h2>

            <p className="mt-2 text-sm text-[#999]">
              Добавляй любимые блюда в избранное
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-[16px] bg-[#f7253d] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(247,37,61,0.2)]"
            >
              Перейти к блюдам
            </Link>

          </div>

        ) : (

          /* FAVORITES */

          <section className="mt-8">

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">

              {favorites.map((product) => {

                const productId =
                  product._id || product.id

                return (

                  <article
                    key={productId}
                    className="group overflow-hidden rounded-[24px] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1"
                  >

                    {/* IMAGE */}

                    <div className="relative h-[180px] w-full overflow-hidden bg-[#eeeeee] sm:h-[210px]">

                      <Link
                        to={`/product/${productId}`}
                        className="block h-full w-full"
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                      </Link>


                      {/* HEART */}

                      <button
                        type="button"
                        onClick={() =>
                          toggleFavorite(product)
                        }
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[21px] text-[#f7253d] shadow-[0_4px_15px_rgba(0,0,0,0.12)] transition active:scale-90"
                      >
                        ♥
                      </button>

                    </div>


                    {/* INFO */}

                    <div className="px-4 pb-4 pt-3">

                      <Link
                        to={`/product/${productId}`}
                      >

                        <h3 className="truncate text-[15px] font-bold text-[#302b2b]">
                          {product.name}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-[#999]">
                          {product.description}
                        </p>

                      </Link>


                      <p className="mt-3 text-[15px] font-black text-[#222]">
                        {product.price?.toLocaleString("ru-RU")} сум
                      </p>

                    </div>

                  </article>

                )
              })}

            </div>

          </section>

        )}

      </div>

    </main>
  )
}