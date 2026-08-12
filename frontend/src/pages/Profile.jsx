import { Link } from "react-router-dom"

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-2xl">

        {/* PROFILE */}

        <div className="rounded-[30px] bg-white p-6 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1ec] text-3xl">
              👤
            </div>

            <div>

              <h1 className="text-2xl font-black">
                Мой профиль
              </h1>

              <p className="mt-1 text-sm text-gray-400">
                Добро пожаловать в FoodGo
              </p>

            </div>

          </div>

        </div>


        {/* MENU */}

        <div className="mt-5 space-y-3">

          <ProfileLink
            to="/orders"
            icon="🧾"
            title="Мои заказы"
            description="История заказов"
          />

          <ProfileLink
            to="/favorites"
            icon="♡"
            title="Избранное"
            description="Любимые блюда"
          />

          <ProfileLink
            to="/settings"
            icon="⚙"
            title="Настройки"
            description="Тема, язык и уведомления"
          />

          <ProfileLink
            to="/help"
            icon="?"
            title="Помощь"
            description="Ответы на вопросы"
          />

        </div>

      </div>

    </main>
  )
}


function ProfileLink({
  to,
  icon,
  title,
  description,
}) {
  return (
    <Link
      to={to}
      className="flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ec] text-xl text-[#e85d3f]">
          {icon}
        </div>

        <div>

          <h3 className="font-bold">
            {title}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {description}
          </p>

        </div>

      </div>

      <span className="text-xl text-gray-300">
        ›
      </span>

    </Link>
  )
}