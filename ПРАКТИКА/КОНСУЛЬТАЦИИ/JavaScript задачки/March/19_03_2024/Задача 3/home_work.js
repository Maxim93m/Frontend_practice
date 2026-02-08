// Задача 3: "JavaScript Challenge: Фильтр товаров"
// Задание: Напиши функцию, которая принимает массив товаров и критерии фильтрации 
// (ценовой диапазон, категория товара, бренд и т.д.).
// Реализуй логику фильтрации товаров в соответствии с переданными критериями.
// Функция должна возвращать новый массив товаров, отфильтрованный в соответствии с заданными критериями.
// Реализуй дополнительные критерии фильтрации, такие как наличие скидки, рейтинг товара и другие параметры.
// Добавь возможность сортировки отфильтрованного массива товаров по различным параметрам, таким как цена или рейтинг.

let catalog = [
    {
        id: 1,
        name: 'Samsung Indigo',
        description: 'МР-3 плеер Samsung Indigo',
        price: 1500,
        discount: 5,
        brand: 'Samsung',
        category: 'Плеер',
        raiting: 10,
    },

    {
        id: 2,
        name: 'iPhone SE',
        description: 'Мобильный телефон iPhone SE',
        price: 7000,
        discount: 10,
        brand: 'iPhone',
        category: 'Мобильный телефон',
        raiting: 10,
    },

    {
        id: 3,
        name: 'ASUS K55VD',
        description: 'Ноутбук ASUS K55VD',
        price: 25000,
        discount: 5,
        brand: 'ASUS',
        category: 'Ноутбук',
        raiting: 1,
    },

    {
        id: 4,
        name: 'Power Bank 20000mAh',
        description: 'Внешний портативный аккамулятор Power Bank 20000mAh',
        price: 2000,
        discount: 0,
        brand: 'Power',
        category: 'Внешний портативный аккамулятор',
        raiting: 2,
    },

    {
        id: 5,
        name: 'Huawei Band 8',
        description: 'Фитнес-часы Huawei Band 8',
        price: 3000,
        discount: 15,
        brand: 'Huawei',
        category: 'Фитнес-часы',
        raiting: 10,
    },

    {
        id: 6,
        name: 'iPhone 7 Pro',
        description: 'Мобильный телефон iPhone 7 Pro',
        price: 17000,
        discount: 25,
        brand: 'iPhone',
        category: 'Мобильный телефон',
        raiting: 3,
    },

    {
        id: 7,
        name: 'Apple Watch SE',
        description: 'Фитнес-часы Apple Watch SE',
        price: 15000,
        discount: 0,
        brand: 'Apple',
        category: 'Фитнес-часы',
        raiting: 10,
    },

    {
        id: 8,
        name: 'Power Bank 25000mAh',
        description: 'Внешний портативный аккамулятор Power Bank 25000mAh',
        price: 4000,
        discount: 0,
        brand: 'Power',
        category: 'Внешний портативный аккамулятор',
        raiting: 10,
    },
];

function displayProducts(array) {
    document.write(`<h3>| id | Наименование товара | Описание товара | Цена за шт. | Скидка | Бренд | Категория товара | Рейтинг |</h3>`);
    array.forEach(function (elem) {
        document.write(`<p>${elem.id} | ${elem.name} | ${elem.description} | ${elem.price}₽ | ${elem.discount}% | ${elem.brand} | ${elem.category} | ${elem.raiting}/10</p>`);
    });
}



let catalogFilter = function (catalog, markFilter) {
    switch (markFilter) {
        case 1: // Бренд
            let brand = Number(prompt(`1 - Samsung\n2 - iPhone\n3 - ASUS\n4 - Power\n5 - Huawei\n\nВведите номер бренда:`));
            switch (brand) {
                case 1: // Samsung
                    brand = 'Samsung';
                    break;
                case 2: // iPhone
                    brand = 'iPhone';
                    break;
                case 3: // ASUS
                    brand = 'ASUS';
                    break;
                case 4: // Power
                    brand = 'Power';
                    break;
                case 5: // Huawei
                    brand = 'Huawei';
                    break;
                default:
                    alert("Введенный бренд отсутствует! Обновите страницу!");
                    return;
                    break;
            }
            catalog = catalog.filter(function (elem) {
                if (elem.brand == brand) {
                    return true;
                }
            });
            break;
        case 2: // Ценовой диапазон
            let min_price = Number(prompt(`Введите минимальную цену товара:`, 1000));
            let max_price = Number(prompt(`Введите минимальную цену товара:`, 10000));
            catalog = catalog.filter(function (elem) {
                if (elem.price >= min_price && elem.price <= max_price) {
                    return true;
                }
            });
            break;
        case 3: // Категория товара
            let category = Number(prompt(`1 - Плеер\n2 - Мобильный телефон\n3 - Ноутбук\n4 - Внешний портативный аккамулятор\n5 - Фитнес-часы\n\nВведите номер категории товара:`));
            switch (category) {
                case 1: // Плеер
                    category = 'Плеер';
                    break;
                case 2: // Мобильный телефон
                    category = 'Мобильный телефон';
                    break;
                case 3: // Ноутбук
                    category = 'Ноутбук';
                    break;
                case 4: // Внешний портативный аккамулятор
                    category = 'Внешний портативный аккамулятор';
                    break;
                case 5: // Фитнес-часы
                    category = 'Фитнес-часы';
                    break;
                default:
                    alert("Введенная категория товара отсутствует! Обновите страницу!");
                    return;
                    break;
            }
            catalog = catalog.filter(function (elem) {
                if (elem.category == category) {
                    return true;
                }
            });
            break;
        case 4: // Наличие скидки     
            catalog = catalog.filter(function (elem) {
                if (elem.discount > 0) {
                    return true;
                }
            });
            break;
        case 5: // Рейтинг
            let raiting = Number(prompt(`Введите рейтинг товара:`, 10));
            catalog = catalog.filter(function (elem) {
                if (elem.raiting == raiting) {
                    return true;
                }
            });
            break;
        default: alert("Недопустимый критерий! Обновите страницу!"); break;
    }
    if (catalog.length != 0) {
        catalog.sort(function (a, b) {
            return a.price - b.price;
        });
        displayProducts(catalog);
    }
    else {
        document.write(`<h3>По заданным критериям товаров нет!</h3>`);
    }
}


displayProducts(catalog);
setTimeout(function () {
    let mark = Number(prompt(`1 - Бренд\n2 - Ценовой диапазон\n3 - Категория товара\n4 - Наличие скидки\n5 - Рейтинг\n\nВведите критерий по которому нужно отфильтровать каталог:`));
    catalogFilter(catalog, mark);
}, 2000);