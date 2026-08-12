import { Link } from "react-router-dom"
import { categories, products } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] pb-10">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-[#e85d3f] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Decorative circles */}

          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-white/5" />

          <div className="absolute right-10 top-10 hidden text-7xl lg:block">
            🍔
          </div>

          <div className="relative max-w-xl">

            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
              🔥 Только сегодня
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Вкусная еда
              <br />
              рядом с тобой
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:text-base">
              Заказывай любимые блюда быстро,
              удобно и без лишних движений.
            </p>

            <Link
              to="/menu"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#e85d3f] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Смотреть меню
            </Link>

          </div>

        </div>
      </section>


      {/* CATEGORIES */}

      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-5 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">
              Выбирай
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Категории
            </h2>
          </div>

          <Link
            to="/menu"
            className="text-sm font-bold text-[#e85d3f]"
          >
            Все →
          </Link>

        </div>


        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">

          {categories.map((category) => (
            <Link
              key={category.id}
              to="/menu"
              className="group flex items-center gap-3 rounded-[22px] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-col sm:justify-center sm:py-7"
            >

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff1ec] text-2xl transition duration-300 group-hover:scale-110">
                {category.emoji}
              </span>

              <span className="text-sm font-bold">
                {category.name}
              </span>

            </Link>
          ))}

        </div>

      </section>


      {/* PROMO */}

      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-[28px] bg-[#1f1f1f] px-6 py-7 text-white sm:px-8">

          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e85d3f]/20" />

          <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#e85d3f]">
                Специальное предложение
              </span>

              <h2 className="mt-2 text-2xl font-black">
                Скидка 20% на первый заказ
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Используй промокод FOOD20
              </p>

            </div>

            <Link
              to="/menu"
              className="w-fit rounded-full bg-[#e85d3f] px-6 py-3 text-sm font-bold transition hover:bg-[#d94f34]"
            >
              Заказать
            </Link>

          </div>

        </div>

      </section>


      {/* POPULAR */}

      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-5 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">
              Наш выбор
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Популярное
            </h2>
          </div>

          <Link
            to="/menu"
            className="text-sm font-bold text-[#e85d3f]"
          >
            Все →
          </Link>

        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* WHY FOODGO */}

      <section className="mx-auto mt-14 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-6">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">
            Почему FoodGo
          </p>

          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            Всё просто
          </h2>

        </div>


        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-[24px] bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1ec] text-2xl">
              🚀
            </div>

            <h3 className="mt-5 font-black">
              Быстрая доставка
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Доставим горячую еду прямо к твоей двери.
            </p>

          </div>


          <div className="rounded-[24px] bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1ec] text-2xl">
              🥗
            </div>

            <h3 className="mt-5 font-black">
              Свежие продукты
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Используем свежие ингредиенты для каждого блюда.
            </p>

          </div>


          <div className="rounded-[24px] bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1ec] text-2xl">
              💳
            </div>

            <h3 className="mt-5 font-black">
              Удобная оплата
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Быстрая и удобная оплата заказа.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="mx-auto mt-16 max-w-7xl border-t border-gray-200 px-5 pb-5 pt-8 text-center sm:px-8 lg:px-10">

        <h2 className="text-xl font-black">
          Food<span className="text-[#e85d3f]">Go</span>
        </h2>

        <p className="mt-2 text-xs text-gray-400">
          Вкусно. Быстро. Удобно.
        </p>

        <p className="mt-6 text-[11px] text-gray-300">
          © 2026 FoodGo. Все права защищены.
        </p>

      </footer>

    </main>
  )
}

