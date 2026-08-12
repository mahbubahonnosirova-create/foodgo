const API_URL = import.meta.env.VITE_API_URL


// ===============================
// PRODUCTS
// ===============================

// Получить все товары
export async function getProducts() {
    const response = await fetch(
        `${API_URL}/api/products`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || "Ошибка загрузки товаров"
        )
    }

    return data
}


// Получить один товар
export async function getProduct(id) {
    const response = await fetch(
        `${API_URL}/api/products/${id}`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || "Ошибка загрузки товара"
        )
    }

    return data
}



// ===============================
// ORDERS
// ===============================

// Создать заказ
export async function createOrder(orderData) {
    const response = await fetch(
        `${API_URL}/api/orders`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(orderData)
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || "Ошибка создания заказа"
        )
    }

    return data
}


// Получить все заказы
export async function getOrders() {
    const response = await fetch(
        `${API_URL}/api/orders`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || "Ошибка загрузки заказов"
        )
    }

    return data
}