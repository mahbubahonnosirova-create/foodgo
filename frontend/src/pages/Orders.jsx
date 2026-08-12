import { useEffect, useState } from "react"

export default function Orders() {
  const [orders, setOrders] = useState([])


  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || []

    setOrders(savedOrders)
  }, [])


  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-black">
          Мои заказы
        </h1>


        {orders.length === 0 ? (

          <div className="mt-8 rounded-[24px] bg-white p-8 text-center shadow-sm">

            <div className="text-5xl">
              🛍️
            </div>

            <h2 className="mt-4 text-xl font-black">
              Пока нет заказов
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Оформите первый заказ
            </p>

          </div>

        ) : (

          <div className="mt-8 space-y-4">

            {orders.map((order) => (

              <div
                key={order.id}
                className="rounded-[24px] bg-white p-5 shadow-sm"
              >

                <div className="flex justify-between">

                  <div>

                    <p className="font-black">
                      Заказ #{order.id}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {order.date}
                    </p>

                  </div>


                  <span className="h-fit rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                    {order.status}
                  </span>

                </div>


                <div className="mt-5 flex justify-between border-t pt-4">

                  <span className="text-sm text-gray-400">
                    {order.itemsCount}{" "}
                    {order.itemsCount === 1
                      ? "товар"
                      : "товара"}
                  </span>


                  <span className="font-black">
                    {order.total.toLocaleString()} сум
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  )
}