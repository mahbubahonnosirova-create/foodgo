import { Link } from "react-router-dom"

export default function About() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-2xl">

        <Link
          to="/settings"
          className="text-sm text-gray-500"
        >
          ← Настройки
        </Link>


        <div className="mt-8 rounded-[30px] bg-white p-8 text-center shadow-sm">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#fff1ec] text-3xl font-black text-[#e85d3f]">
            FG
          </div>

          <h1 className="mt-6 text-3xl font-black">
            FoodGo
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Вкусно. Быстро. Удобно.
          </p>

          <div className="my-7 h-px bg-gray-100" />

          <p className="text-sm leading-7 text-gray-500">
            FoodGo — мини-приложение для заказа
            любимой еды.
          </p>

          <p className="mt-5 text-xs text-gray-400">
            Версия 1.0.0
          </p>

        </div>

      </div>

    </main>
  )
}