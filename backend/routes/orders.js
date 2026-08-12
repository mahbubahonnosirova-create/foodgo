import express from "express"
import Order from "../models/Order.js"

const router = express.Router()


// Создать заказ
router.post("/", async (req, res) => {

    try {

        const {
            customerName,
            phone,
            address,
            comment,
            items,
            totalPrice
        } = req.body


        if (!customerName || !phone || !address) {
            return res.status(400).json({
                message: "Заполни имя, телефон и адрес"
            })
        }


        if (!items || items.length === 0) {
            return res.status(400).json({
                message: "Корзина пуста"
            })
        }


        const order = await Order.create({
            customerName,
            phone,
            address,
            comment,
            items,
            totalPrice
        })


        res.status(201).json(order)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Ошибка при создании заказа"
        })

    }

})


// Получить все заказы
router.get("/", async (req, res) => {

    try {

        const orders = await Order
            .find()
            .sort({ createdAt: -1 })

        res.json(orders)

    } catch (error) {

        res.status(500).json({
            message: "Ошибка при получении заказов"
        })

    }

})


export default router