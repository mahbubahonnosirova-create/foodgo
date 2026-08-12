import TelegramBot from "node-telegram-bot-api"
import dotenv from "dotenv"

dotenv.config()

const token = process.env.BOT_TOKEN
const webAppUrl = process.env.WEB_APP_URL

if (!token) {
    console.error("BOT_TOKEN не найден в .env")
    process.exit(1)
}

if (!webAppUrl) {
    console.error("WEB_APP_URL не найден в .env")
    process.exit(1)
}

const bot = new TelegramBot(token, {
    polling: true
})

console.log("Telegram bot started")

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id

    const firstName = msg.from?.first_name || "друг"

    await bot.sendMessage(
        chatId,
        `🍔 Привет, ${firstName}!

Добро пожаловать в FoodGo!

Выбирай любимые блюда, добавляй их в корзину и оформляй заказ прямо здесь 👇`,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🍔 Открыть FoodGo",
                            web_app: {
                                url: webAppUrl
                            }
                        }
                    ]
                ]
            }
        }
    )
})

bot.onText(/\/menu/, async (msg) => {
    await bot.sendMessage(
        msg.chat.id,
        "🍔 Открывай меню FoodGo:",
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🍔 Открыть меню",
                            web_app: {
                                url: webAppUrl
                            }
                        }
                    ]
                ]
            }
        }
    )
})

bot.on("polling_error", (error) => {
    console.error("Telegram polling error:", error.message)
})