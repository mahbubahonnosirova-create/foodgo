import { Link } from "react-router-dom"

import {
  IoReceiptOutline,
  IoHeartOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoChevronForward,
} from "react-icons/io5"

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-5 pb-32 pt-8">

      <div className="mx-auto max-w-2xl">

        {/* PROFILE */}

        <div className="rounded-[30px] bg-white p-6 shadow-sm">

          <div className="flex items-center gap-4">

            {/* AVATAR */}

            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff1ec]">

              <img
                src="/миньон.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />

            </div>


            {/* INFO */}

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
            icon={IoReceiptOutline}
            title="Мои заказы"
            description="История заказов"
          />

          <ProfileLink
            to="/favorites"
            icon={IoHeartOutline}
            title="Избранное"
            description="Любимые блюда"
          />

          <ProfileLink
            to="/settings"
            icon={IoSettingsOutline}
            title="Настройки"
            description="Тема, язык и уведомления"
          />

          <ProfileLink
            to="/help"
            icon={IoHelpCircleOutline}
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
  icon: Icon,
  title,
  description,
}) {
  return (
    <Link
      to={to}
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div className="flex items-center gap-4">

        {/* ICON */}

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-[#fff1ec]
            text-[#e85d3f]
          "
        >

          <Icon
            size={23}
            strokeWidth={1.8}
          />

        </div>


        {/* TEXT */}

        <div>

          <h3 className="font-bold">
            {title}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {description}
          </p>

        </div>

      </div>


      {/* ARROW */}

      <IoChevronForward
        size={20}
        className="shrink-0 text-gray-300"
      />

    </Link>
  )
}