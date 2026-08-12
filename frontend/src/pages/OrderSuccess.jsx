import { Link } from "react-router-dom"

export default function OrderSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">

      <div className="w-full max-w-md rounded-[30px] bg-white p-8 text-center shadow-sm">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1ec] text-4xl">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-black">
          Заказ принят!
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Мы получили ваш заказ и уже готовим его.
        </p>

        <div className="mt-6 rounded-2xl bg-gray-50 p-4">
          <p className="text-xs text-gray-400">
            Номер заказа
          </p>

          <p className="mt-1 font-black">
            #FG-1048
          </p>
        </div>

        <Link
          to="/orders"
          className="mt-6 block rounded-2xl bg-[#e85d3f] py-4 font-bold text-white"
        >
          Мои заказы
        </Link>

        <Link
          to="/"
          className="mt-3 block py-3 text-sm font-semibold text-gray-400"
        >
          На главную
        </Link>

      </div>

    </main>
  )
}