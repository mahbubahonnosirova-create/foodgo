import { Link, useSearchParams } from "react-router-dom"

export default function OrderSuccess() {
  const [searchParams] = useSearchParams()

  const orderId = searchParams.get("id")

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5">

      <div className="w-full max-w-md rounded-[30px] bg-white p-8 text-center">

        {/* SUCCESS ICON */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f5eeee] text-4xl font-bold text-[#3d3030]">
          ✓
        </div>


        {/* TITLE */}

        <h1 className="mt-6 text-3xl font-black text-[#3d3434]">
          Заказ принят!
        </h1>


        {/* DESCRIPTION */}

        <p className="mt-3 text-sm leading-6 text-[#999292]">
          Мы получили ваш заказ и уже готовим его.
        </p>


        {/* ORDER NUMBER */}

        <div className="mt-6 rounded-2xl bg-[#f7f6f6] p-4">

          <p className="text-xs text-[#999292]">
            Номер заказа
          </p>

          <p className="mt-1 font-black text-[#3d3434]">
            #{orderId || "—"}
          </p>

        </div>


        {/* MY ORDERS */}

        <Link
          to="/orders"
          className="mt-6 flex h-12 items-center justify-center rounded-2xl bg-[#3d3030] text-sm font-bold text-white transition hover:bg-[#2f2525]"
        >
          Мои заказы
        </Link>


        {/* HOME */}

        <Link
          to="/"
          className="mt-3 block py-3 text-sm font-semibold text-[#999292] transition hover:text-[#3d3434]"
        >
          На главную
        </Link>

      </div>

    </main>
  )
}