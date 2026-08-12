import { Link } from "react-router-dom"

const questions = [
  {
    question: "Как добавить товар в корзину?",
    answer:
      "Нажмите кнопку + на карточке нужного товара.",
  },
  {
    question: "Как добавить товар в избранное?",
    answer:
      "Нажмите на сердечко в правом верхнем углу карточки товара.",
  },
  {
    question: "Где посмотреть мои заказы?",
    answer:
      "Откройте Профиль → Мои заказы.",
  },
  {
    question: "Как изменить адрес?",
    answer:
      "Откройте Профиль → Настройки → Адрес доставки.",
  },
]

export default function Help() {
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
          Помощь
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Часто задаваемые вопросы
        </p>


        <div className="mt-8 space-y-3">

          {questions.map((item) => (

            <details
              key={item.question}
              className="group rounded-3xl bg-white p-5 shadow-sm"
            >

              <summary className="cursor-pointer list-none font-bold">
                {item.question}
              </summary>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {item.answer}
              </p>

            </details>

          ))}

        </div>

      </div>

    </main>
  )
}