// Задача 3: "Группировка по категориям"
// У вас есть массив объектов, представляющих товары.
// Напишите функцию, которая группирует товары по их категориям.



let groupCategory = function (category, products) {
    let flagCategory = false;
    let strName = '';

    for (let i = 0; i < products.length; i++) {
        if (products[i].category.toLowerCase() == category.toLowerCase()) {
            console.log(products[i]);
            flagCategory = true;
            strName += `${products[i].name}\n`
        }
    }
    if (!flagCategory) {
        return `Введённая категория товаров отсутствует!`
    }
    flagCategory = false;
    return `В категории "${category}", имеются следующие товары:\n\n${strName}`;
}

const products = [
    { id: 1, name: "Лаптоп", category: "Электроника" },
    { id: 2, name: "Книга", category: "Литература" },
    { id: 3, name: "Фотоаппарат", category: "Электроника" },
    { id: 4, name: "Сумка", category: "Мода" },
    { id: 23, name: "Букварь", category: "Литература" },
    { id: 5, name: "Телефон", category: "Электроника" },
    { id: 6, name: "Куртка", category: "Мода" },
    { id: 7, name: "Платье", category: "Мода" },
    { id: 14, name: "Журнал", category: "Литература" },
    { id: 14, name: "Палка", category: "Другое" },

];
let category = prompt("Веведите категорию товара", "Электроника");
alert(groupCategory(category, products));
