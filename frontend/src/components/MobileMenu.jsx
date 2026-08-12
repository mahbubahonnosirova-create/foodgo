import { Link } from "react-router-dom"

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Background */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
        />
      )}


      {/* Menu */}

      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-[85%] max-w-sm bg-[#fafafa] shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex h-full flex-col">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black"
            >
              Food<span className="text-[#e85d3f]">Go</span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm"
            >
              ×
            </button>

          </div>


          {/* User */}

          <div className="mx-5 mt-6 rounded-3xl bg-[#e85d3f] p-5 text-white">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                👤
              </div>

              <div>
                <p className="text-xs text-white/70">
                  Добро пожаловать
                </p>

                <p className="font-bold">
                  FoodGo
                </p>
              </div>

            </div>

          </div>


          {/* Navigation */}

          <nav className="mt-6 flex flex-col px-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                ⌂
              </span>

              Главная
            </Link>


            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                🍔
              </span>

              Меню
            </Link>


            <Link
              to="/search"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                ⌕
              </span>

              Поиск
            </Link>


            <Link
              to="/favorites"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                ♡
              </span>

              Избранное
            </Link>


            <Link
              to="/orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                📦
              </span>

              Мои заказы
            </Link>


            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition hover:bg-white"
            >
              <span className="text-xl">
                👤
              </span>

              Профиль
            </Link>

          </nav>


          {/* Bottom */}

          <div className="mt-auto p-5">

            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-[#e85d3f] px-5 py-4 font-bold text-white"
            >
              <span>
                🛒 Корзина
              </span>

              <span>
                0 сум
              </span>
            </Link>

          </div>

        </div>

      </aside>
    </>
  )
}