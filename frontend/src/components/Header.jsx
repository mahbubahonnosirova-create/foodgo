import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-[#fafafa]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* LOGO */}

          <Link to="/" className="shrink-0">
            <div className="text-2xl font-black tracking-tight">
              Food<span className="text-[#e85d3f]">Go</span>
            </div>

            <p className="hidden text-[9px] font-medium text-gray-400 sm:block">
              Вкусно. Быстро. Удобно.
            </p>
          </Link>


          {/* DESKTOP NAVBAR */}

          <nav className="hidden items-center gap-8 md:flex">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#e85d3f]"
                    : "text-gray-500 hover:text-[#e85d3f]"
                }`
              }
            >
              Главная
            </NavLink>

            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#e85d3f]"
                    : "text-gray-500 hover:text-[#e85d3f]"
                }`
              }
            >
              Меню
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#e85d3f]"
                    : "text-gray-500 hover:text-[#e85d3f]"
                }`
              }
            >
              Избранное
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#e85d3f]"
                    : "text-gray-500 hover:text-[#e85d3f]"
                }`
              }
            >
              Заказы
            </NavLink>

          </nav>


          {/* DESKTOP RIGHT */}

          <div className="hidden items-center gap-3 md:flex">

            {/* Search */}

            <Link
              to="/search"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              ⌕
            </Link>


            {/* Cart */}

            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              🛒

              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#e85d3f] text-[9px] font-bold text-white">
                0
              </span>
            </Link>


            {/* Profile */}

            <Link
              to="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1ec] text-lg transition hover:scale-105"
            >
              ♙
            </Link>

          </div>


          {/* MOBILE BURGER */}

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm md:hidden"
          >
            ☰
          </button>

        </div>

      </header>


      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
    </>
  )
}