import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"

import {
  IoHomeOutline,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5"

export default function BottomNav() {
  const location = useLocation()

  const { cart } = useCart()

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const items = [
    {
      path: "/",
      icon: IoHomeOutline,
      label: "Главная",
    },
    {
      path: "/favorites",
      icon: IoHeartOutline,
      label: "Лайки",
    },
    {
      path: "/cart",
      icon: IoCartOutline,
      label: "Корзина",
    },
    {
      path: "/profile",
      icon: IoPersonOutline,
      label: "Профиль",
    },
  ]

  return (
    <nav
      className="
        fixed
        bottom-3
        left-1/2
        z-50
        flex
        h-[68px]
        w-[calc(100%-24px)]
        max-w-md
        -translate-x-1/2
        items-center
        justify-around
        rounded-[25px]
        bg-[#f7253d]
        px-2
        shadow-[0_10px_35px_rgba(247,37,61,0.28)]
        md:hidden
      "
    >

      {items.map((item) => {

        const active =
          location.pathname === item.path

        const Icon = item.icon

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`
              relative
              flex
              h-[58px]
              min-w-[62px]
              flex-col
              items-center
              justify-center
              gap-[2px]
              rounded-[18px]
              px-2
              transition-all
              duration-200
              active:scale-90
              ${
                active
                  ? "bg-white/15 text-white"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }
            `}
          >

            {/* ICON */}

            <span
              className={`
                leading-none
                transition-transform
                duration-200
                ${
                  active
                    ? "scale-110"
                    : "scale-100"
                }
              `}
            >
              <Icon
                size={
                  item.path === "/cart"
                    ? 20
                    : 24
                }
                strokeWidth={1.8}
              />
            </span>


            {/* LABEL */}

            <span
              className={`
                text-[8px]
                font-semibold
                tracking-wide
                transition
                ${
                  active
                    ? "text-white"
                    : "text-white/70"
                }
              `}
            >
              {item.label}
            </span>


            {/* ACTIVE DOT */}

            {active && (
              <span
                className="
                  absolute
                  bottom-[4px]
                  h-[3px]
                  w-[3px]
                  rounded-full
                  bg-white
                "
              />
            )}


            {/* CART COUNT */}

            {item.path === "/cart" &&
              cartCount > 0 && (

                <span
                  className="
                    absolute
                    right-[5px]
                    top-[5px]
                    flex
                    h-[18px]
                    min-w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#f7253d]
                    bg-white
                    px-1
                    text-[9px]
                    font-black
                    text-[#f7253d]
                    shadow-sm
                  "
                >
                  {cartCount > 99
                    ? "99+"
                    : cartCount}
                </span>

              )}

          </Link>
        )
      })}


      {/* CENTER PLUS */}

      <Link
        to="/menu"
        className="
          absolute
          left-1/2
          top-[-23px]
          flex
          h-[54px]
          w-[54px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-white
          bg-[#f7253d]
          text-[29px]
          font-light
          leading-none
          text-white
          shadow-[0_6px_18px_rgba(0,0,0,0.18)]
          transition-all
          duration-200
          hover:scale-105
          active:scale-90
        "
      >
        +
      </Link>

    </nav>
  )
}