import { useState } from "react"
import { Link } from "react-router-dom"

export default function EditProfile() {
  const [name, setName] = useState(
    localStorage.getItem("userName") || ""
  )

  const [phone, setPhone] = useState(
    localStorage.getItem("userPhone") || ""
  )

  const saveProfile = () => {
    localStorage.setItem("userName", name)
    localStorage.setItem("userPhone", phone)

    alert("Данные сохранены")
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
          Личные данные
        </h1>


        <div className="mt-8 space-y-5 rounded-3xl bg-white p-6 shadow-sm">

          <div>

            <label className="mb-2 block text-sm font-bold">
              Имя
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#e85d3f]"
            />

          </div>


          <div>

            <label className="mb-2 block text-sm font-bold">
              Телефон
            </label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 000 00 00"
              className="w-full rounded-2xl bg-[#f7f7f7] px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#e85d3f]"
            />

          </div>


          <button
            onClick={saveProfile}
            className="w-full rounded-2xl bg-[#e85d3f] py-4 font-bold text-white"
          >
            Сохранить
          </button>

        </div>

      </div>

    </main>
  )
}