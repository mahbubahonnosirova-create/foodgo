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