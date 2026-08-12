import { NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorites } from "../context/FavoritesContext"

const navItems = [
  {
    to: "/",
    label: "Главная",
    icon: "⌂",
    end: true,
  },
  {
    to: "/favorites",
    label: "Лайки",
    icon: "♡",
    type: "favorites",
  },
  {
    to: "/cart",
    label: "Корзина",
    icon: "🛒",
    type: "cart",
  },
  {
    to: "/profile",
    label: "Профиль",
    icon: "♙",
  },
]

export default function BottomNav() {
  const { cartCount } = useCart()
  const { favorites } = useFavorites()

  return (
    <nav className="fixed bottom-5 left-1/2 z-[100] w-[calc(100%-24px)] max-w-[520px] -translate-x-1/2">

      <div className="flex items-center justify-between rounded-[28px] border border-gray-100 bg-white/95 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">

        {navItems.map((item) => (

          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `relative flex min-w-[70px] flex-1 flex-col items-center justify-center gap-1 rounded-[22px] px-2 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-[#fff0eb] text-[#ef5b3f]"
                  : "text-[#9ca3af] hover:bg-gray-50 hover:text-gray-600"
              }`
            }
          >

            {({ isActive }) => (
              <>
                {/* ICON */}

                <span
                  className={`relative flex h-6 items-center justify-center text-[22px] leading-none ${
                    isActive ? "scale-105" : ""
                  }`}
                >
                  {item.icon}


                  {/* FAVORITES COUNTER */}

                  {item.type === "favorites" &&
                    favorites.length > 0 && (
                      <span className="absolute -right-3 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ef5b3f] px-1 text-[9px] font-bold text-white shadow-sm">
                        {favorites.length}
                      </span>
                    )}


                  {/* CART COUNTER */}

                  {item.type === "cart" &&
                    cartCount > 0 && (
                      <span className="absolute -right-3 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ef5b3f] px-1 text-[9px] font-bold text-white shadow-sm">
                        {cartCount}
                      </span>
                    )}

                </span>


                {/* LABEL */}

                <span className="text-[10px] font-bold leading-none">
                  {item.label}
                </span>

              </>
            )}

          </NavLink>

        ))}

      </div>

    </nav>
  )
}