import { Link, NavLink } from "react-router-dom"  
import { useState } from "react"  
import MobileMenu from "./MobileMenu"  
  
export default function Header() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false)  
  
  return (  
    <>  
      <header className="sticky top-0 z-40 border-b border-[#eeeeee] bg-white">  
  
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">  
  
          {/* LOGO */}  
  
          <Link to="/" className="shrink-0">  
            <div className="text-[30px] font-bold italic leading-none tracking-[-1.5px] text-[#292525] [font-family:Georgia,serif]">  
              Food<span className="text-[#292525]">Go</span>  
            </div>  
  
            <p className="mt-1 text-[14px] font-medium leading-none tracking-[0.1px] text-[#777777]">  
              Order your favourite food!  
            </p>  
          </Link>  
  
  
          {/* DESKTOP NAVBAR */}  
  
          <nav className="hidden items-center gap-10 md:flex">  
  
            <NavLink  
              to="/"  
              end  
              className={({ isActive }) =>  
                `text-[14px] font-medium transition-colors duration-200 ${  
                  isActive  
                    ? "text-[#222222]"  
                    : "text-[#777777] hover:text-[#222222]"  
                }`  
              }  
            >  
              Главная  
            </NavLink>  
  
            <NavLink  
              to="/menu"  
              className={({ isActive }) =>  
                `text-[14px] font-medium transition-colors duration-200 ${  
                  isActive  
                    ? "text-[#222222]"  
                    : "text-[#777777] hover:text-[#222222]"  
                }`  
              }  
            >  
              Меню  
            </NavLink>  
  
            <NavLink  
              to="/favorites"  
              className={({ isActive }) =>  
                `text-[14px] font-medium transition-colors duration-200 ${  
                  isActive  
                    ? "text-[#222222]"  
                    : "text-[#777777] hover:text-[#222222]"  
                }`  
              }  
            >  
              Избранное  
            </NavLink>  
  
            <NavLink  
              to="/orders"  
              className={({ isActive }) =>  
                `text-[14px] font-medium transition-colors duration-200 ${  
                  isActive  
                    ? "text-[#222222]"  
                    : "text-[#777777] hover:text-[#222222]"  
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-[21px] font-light text-[#444444] shadow-none transition-all duration-200 hover:border-[#dddddd] hover:bg-[#fafafa]"  
            >  
              ⌕  
            </Link>  
  
  
            {/* Cart */}  
  
            <Link  
              to="/cart"  
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-[17px] shadow-none transition-all duration-200 hover:border-[#dddddd] hover:bg-[#fafafa]"  
            >  
              🛒  
  
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#222222] text-[9px] font-semibold text-white">  
                0  
              </span>  
            </Link>  
  
  
            {/* Profile */}  
  
            <Link  
              to="/profile"  
              className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#eeeeee] bg-[#f5f5f5] transition-all duration-200 hover:scale-105"  
            >  
              <img  
                src="/миньон.jpg"  
                alt="Profile"  
                className="h-full w-full object-cover"  
              />  
            </Link>  
  
          </div>  
  
  
          {/* MOBILE PROFILE */}  
  
          <Link  
            to="/profile"  
            className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#eeeeee] bg-[#f5f5f5] transition-all duration-200 hover:scale-105 md:hidden"  
          >  
            <img  
              src="/миньон.jpg"  
              alt="Profile"  
              className="h-full w-full object-cover"  
            />  
          </Link>  
  
        </div>  
  
      </header>  
  
  
      <MobileMenu  
        isOpen={isMenuOpen}  
        setIsOpen={setIsMenuOpen}  
      />  
    </>  
  )  
}