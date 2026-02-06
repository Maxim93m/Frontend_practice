export default async function getCart() {
    let data = [];

    try{
        let response = await fetch('http://localhost:8000/cart/get');
        if (response.ok) {
            console.log(`Загружено статусом ${response.status}`);
            let data =  await response.json();
            return data;
        }
    }
    catch{
        throw new Error('Возникла ошибка передачи данных!')
    }
}