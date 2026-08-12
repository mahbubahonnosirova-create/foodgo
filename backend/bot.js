import TelegramBot from "node-telegram-bot-api"

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        `🍔 Добро пожаловать в Nomi!

Заказывай любимую еду прямо здесь.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🍔 Открыть Nomi",
                            web_app: {
                                url: "https://YOUR-MINI-APP-URL.com"
                            }
                        }
                    ]
                ]
            }
        }
    )

})