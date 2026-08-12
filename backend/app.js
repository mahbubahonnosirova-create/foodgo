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
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)

console.log("MONGO_URI exists:", !!process.env.MONGO_URI)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        })

        console.log("MongoDB connected")

        app.listen(process.env.PORT || 3000, () => {
            console.log("Server started on port 3000")
        })

    } catch (error) {
        console.log("MongoDB error:")
        console.log(error.message)
    }
}

startServer()