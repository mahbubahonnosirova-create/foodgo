import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

// GET все товары
router.get("/", async (req, res) => {
    try {
        const products = await Product.find()

        res.json(products)
    } catch (error) {
        res.status(500).json({
            message: "Ошибка при получении товаров",
            error: error.message
        })
    }
})

// GET один товар
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                message: "Товар не найден"
            })
        }

        res.json(product)
    } catch (error) {
        res.status(500).json({
            message: "Ошибка при получении товара",
            error: error.message
        })
    }
})

// POST создать товар
router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Ошибка при создании товара",
            error: error.message
        })
    }
})

export default router