import { useState } from "react"
import { Link } from "react-router-dom"

export default function Address() {
  const [address, setAddress] = useState(
    localStorage.getItem("address") || ""
  )

  const [entrance, setEntrance] = useState(
    localStorage.getItem("entrance") || ""
  )

  const [floor, setFloor] = useState(
    localStorage.getItem("floor") || ""
  )

  const [apartment, setApartment] = useState(
    localStorage.getItem("apartment") || ""
  )

  const saveAddress = () => {
    localStorage.setItem("address", address)
    localStorage.setItem("entrance", entrance)
    localStorage.setItem("floor", floor)
    localStorage.setItem("apartment", apartment)

    alert("Адрес сохранён")
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-2xl">

        <Link
          to="/settings"
          className="text-sm text-gray-500"
        >
          ← Настройки
        </Link>

        <h1 className="mt-5 text-3xl font-black">
          Адрес доставки
        </h1>


        <div className="mt-8 space-y-5 rounded-3xl bg-white p-6 shadow-sm">

          <div>

            <label className="mb-2 block text-sm font-bold">
              Адрес
            </label>

            <input
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Улица, дом"
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none focus:ring-2 focus:ring-[#e85d3f]"
            />

          </div>


          <div className="grid grid-cols-3 gap-3">

            <input
              value={entrance}
              onChange={(e) =>
                setEntrance(e.target.value)
              }
              placeholder="Подъезд"
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none"
            />

            <input
              value={floor}
              onChange={(e) =>
                setFloor(e.target.value)
              }
              placeholder="Этаж"
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none"
            />

            <input
              value={apartment}
              onChange={(e) =>
                setApartment(e.target.value)
              }
              placeholder="Кв."
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none"
            />

          </div>


          <button
            onClick={saveAddress}
            className="w-full rounded-2xl bg-[#e85d3f] py-4 font-bold text-white"
          >
            Сохранить адрес
          </button>

        </div>

      </div>

    </main>
  )
}