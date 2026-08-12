import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import productRoutes from "./routes/products.js"
import orderRoutes from "./routes/orders.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Проверка сервера
app.get("/", (req, res) => {
    res.json({
        message: "FoodGo API is working"
    })
})

// API
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)

console.log("MONGO_URI exists:", !!process.env.MONGO_URI)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        })

        console.log("MongoDB connected")

        const PORT = process.env.PORT || 3000

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server started on port ${PORT}`)
        })

    } catch (error) {
        console.error("MongoDB error:")
        console.error(error.message)

        process.exit(1)
    }
}

startServer()