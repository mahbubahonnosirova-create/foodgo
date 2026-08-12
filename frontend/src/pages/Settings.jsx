import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false"
  })

  const [saveAddress, setSaveAddress] = useState(() => {
    return localStorage.getItem("saveAddress") !== "false"
  })

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "Русский"
  })

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode)

    document.documentElement.classList.toggle(
      "dark",
      darkMode
    )
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      notifications
    )
  }, [notifications])

  useEffect(() => {
    localStorage.setItem(
      "saveAddress",
      saveAddress
    )
  }, [saveAddress])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <main
      className={`min-h-screen px-5 pb-32 pt-8 transition-colors ${
        darkMode
          ? "bg-[#181818] text-white"
          : "bg-[#fafafa] text-gray-900"
      }`}
    >

      <div className="mx-auto max-w-2xl">

        {/* HEADER */}

        <div className="mb-8">

          <Link
            to="/profile"
            className={
              darkMode
                ? "text-sm text-gray-400"
                : "text-sm text-gray-500"
            }
          >
            ← Профиль
          </Link>

          <h1 className="mt-4 text-3xl font-black">
            Настройки
          </h1>

          <p
            className={
              darkMode
                ? "mt-2 text-sm text-gray-500"
                : "mt-2 text-sm text-gray-400"
            }
          >
            Настрой FoodGo под себя
          </p>

        </div>


        {/* APPLICATION */}

        <section className="mb-6">

          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Приложение
          </h2>

          <div
            className={`overflow-hidden rounded-3xl ${
              darkMode
                ? "bg-[#242424]"
                : "bg-white"
            }`}
          >

            {/* DARK MODE */}

            <SettingToggle
              title="Тёмная тема"
              description="Изменить внешний вид приложения"
              value={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              darkMode={darkMode}
            />

            {/* NOTIFICATIONS */}

            <SettingToggle
              title="Уведомления"
              description="Статус заказа и акции"
              value={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
              darkMode={darkMode}
            />

            {/* SAVE ADDRESS */}

            <SettingToggle
              title="Сохранять адрес"
              description="Не вводить адрес повторно"
              value={saveAddress}
              onChange={() =>
                setSaveAddress(!saveAddress)
              }
              darkMode={darkMode}
              last
            />

          </div>

        </section>


        {/* LANGUAGE */}

        <section className="mb-6">

          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Язык
          </h2>

          <div
            className={`rounded-3xl p-5 ${
              darkMode
                ? "bg-[#242424]"
                : "bg-white"
            }`}
          >

            <p className="mb-3 font-bold">
              Язык приложения
            </p>

            <div className="grid grid-cols-3 gap-2">

              {[
                "Русский",
                "O'zbek",
                "English",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => setLanguage(item)}
                  className={`rounded-2xl px-3 py-3 text-sm font-bold transition ${
                    language === item
                      ? "bg-[#e85d3f] text-white"
                      : darkMode
                        ? "bg-[#303030] text-gray-400"
                        : "bg-[#f5f5f5] text-gray-500"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </section>


        {/* ACCOUNT */}

        <section className="mb-6">

          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Аккаунт
          </h2>

          <div
            className={`overflow-hidden rounded-3xl ${
              darkMode
                ? "bg-[#242424]"
                : "bg-white"
            }`}
          >

            <Link
              to="/profile/edit"
              className="flex items-center justify-between border-b border-gray-100/10 p-5"
            >

              <div>

                <p className="font-bold">
                  Личные данные
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Имя и номер телефона
                </p>

              </div>

              <span className="text-xl text-gray-400">
                ›
              </span>

            </Link>


            <Link
              to="/profile/address"
              className="flex items-center justify-between p-5"
            >

              <div>

                <p className="font-bold">
                  Адрес доставки
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Управление адресами
                </p>

              </div>

              <span className="text-xl text-gray-400">
                ›
              </span>

            </Link>

          </div>

        </section>


        {/* OTHER */}

        <section>

          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Другое
          </h2>

          <div
            className={`overflow-hidden rounded-3xl ${
              darkMode
                ? "bg-[#242424]"
                : "bg-white"
            }`}
          >

            <Link
              to="/help"
              className="flex items-center justify-between border-b border-gray-100/10 p-5"
            >
              <span className="font-bold">
                Помощь
              </span>

              <span className="text-xl text-gray-400">
                ›
              </span>
            </Link>


            <Link
              to="/about"
              className="flex items-center justify-between p-5"
            >
              <span className="font-bold">
                О приложении
              </span>

              <span className="text-xl text-gray-400">
                ›
              </span>
            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}


function SettingToggle({
  title,
  description,
  value,
  onChange,
  darkMode,
  last = false,
}) {
  return (
    <div
      className={`flex items-center justify-between p-5 ${
        !last
          ? "border-b border-gray-100/10"
          : ""
      }`}
    >

      <div>

        <p className="font-bold">
          {title}
        </p>

        <p
          className={`mt-1 text-xs ${
            darkMode
              ? "text-gray-500"
              : "text-gray-400"
          }`}
        >
          {description}
        </p>

      </div>


      <button
        onClick={onChange}
        className={`relative h-7 w-12 rounded-full transition ${
          value
            ? "bg-[#e85d3f]"
            : "bg-gray-200"
        }`}
      >

        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
            value
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  )
}