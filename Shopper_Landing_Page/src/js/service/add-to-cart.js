export default async function AddToCart() {

    try {
        let response = await fetch('http://localhost:8000/cart/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "productName": "Наушники 95",
                "productReviews": 75,
                "productPrice": 15
            })
        })
    }
    catch {
        throw new Error('Возникла ошибка передачи данных!')
    }
}
