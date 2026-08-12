import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        comment: {
            type: String,
            default: ""
        },

        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },

                name: {
                    type: String,
                    required: true
                },

                price: {
                    type: Number,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                },

                image: {
                    type: String,
                    default: ""
                }
            }
        ],

        totalPrice: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", orderSchema)

export default Order