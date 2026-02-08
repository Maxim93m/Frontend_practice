// Задача 2: "JavaScript Challenge: Shopping Cart"
// Задание: Создай объект "корзина", который будет содержать информацию о добавленных товарах, их количестве и ценах.
// Реализуй методы для добавления товаров в корзину, удаления товаров из корзины, 
// изменения количества товаров и расчета общей суммы покупки.
// Реализуй метод для оформления заказа, который будет выводить полный список товаров в корзине, 
// итоговую сумму и другую необходимую информацию.
// Реализуй проверки на наличие товаров в наличии перед добавлением в корзину.
// Позаботься о визуализации - создай функцию для вывода содержимого корзины в удобочитаемом виде.
// Реализуй учет скидок и акций при оформлении заказа.

let catalog = [
    {
        id: 1,
        name: 'Samsung Indigo',
        description: 'МР-3 плеер Samsung Indigo',
        price: 1500,
        discount: 5,
    },

    {
        id: 2,
        name: 'iPhone SE',
        description: 'Мобильный телефон iPhone SE',
        price: 7000,
        discount: 10,
    },

    {
        id: 3,
        name: 'ASUS K55VD',
        description: 'Ноутбук ASUS K55VD',
        price: 25000,
        discount: 5,
    },

    {
        id: 4,
        name: 'Power Bank 20000mAh',
        description: 'Внешний портативный аккамулятор Power Bank 20000mAh',
        price: 2000,
        discount: 0,
    },

    {
        id: 5,
        name: 'Huawei Band 8',
        description: 'Фитнес-часы Huawei Band 8',
        price: 3000,
        discount: 15,
    }
];


let productsCart = function (catalog) {

    let idProduct = 0;
    let cart = [];
    let countProducts = Number(prompt(`Введите количество товаров, которые нужно добавить в корзину:`, 3));
    let countProd = 0;

    function getCartProducts(array) {
        let arr = [];

        for (let elem of array) {
            if (!arr.includes(elem)) {
                arr.push(elem);
                elem.count = 1;
            }
            else {
                elem.count++;
            }
        }
        return arr;
    }

    function displayProducts(array) {
        let sumDiscount = 0, summ = 0;

        if (array.length != 0) {
            document.write(`<h3>| id | Наименование товара | Описание товара | Цена за шт. | Количество товаров | Общая стоимость | Скидка | Общая стоимость с учетом скидки |</h3>`);
            array.forEach(function (elem) {
                let allPrice = elem.price * elem.count;
                let discountPrice = allPrice - allPrice * (elem.discount / 100);
                document.write(`<p>${elem.id} | ${elem.name} | ${elem.description} | ${elem.price}₽ | ${elem.count} | ${allPrice} | ${elem.discount}% | ${discountPrice}₽</p>`);
                sumDiscount += discountPrice;
                summ += allPrice;
            })
            document.write(`<h3>Итоговая сумма без учёта скидки: ${summ}</h3>`);
            document.write(`<h3>Итоговая сумма c учётом скидки: ${sumDiscount}</h3>`);
        }
        else {
            document.write(`<h3>Товаров нет в корзине!</h3>`);
        }
    }

    // Добавление товаров в корзину
    for (let i = 0; i < countProducts; i++) {
        let flagErrId = false, flagNoErrId = false;
        idProduct = Number(prompt(`Введите id(1-5), который хотите добавить в корзину: `, 1));


        catalog.forEach(function (elem) {
            if (elem.id == idProduct) {
                cart.push(elem);
                flagNoErrId = true;
            }
            else {
                flagErrId = true;
            }
        });
        if (flagErrId == true && flagNoErrId == false) {
            alert(`С указанным id нет товаров!`);

        }
    }

    cart = getCartProducts(cart);
    displayProducts(cart);
    idProduct = 0;
    // Удаление товаров из корзины
    if (cart.length != 0) {
        setTimeout(function () {
            let flagDeleteProduct = confirm(`Удалить товары из корзины?`);
            if (flagDeleteProduct) {
                let countProductsDel = Number(prompt(`Общее количество товаров в корзине: ${countProducts}\nВведите количество товаров, которые нужно удалить из корзины:`, 2));

                if (countProductsDel <= countProducts) {
                    for (let i = 0; i < countProductsDel; i++) {
                        let flagErrId = false, flagNoErrId = false;
                        idProduct = Number(prompt(`Введите id, который хотите удалить из корзины: `, 1));
                        cart.forEach(function (elem, index) {
                            if (elem.id == idProduct) {
                                elem.count--;
                                flagNoErrId = true;
                                if (elem.count == 0) {
                                    cart.splice(index, 1);
                                }
                            }
                            else {
                                flagErrId = true;
                            }
                        });
                        if (flagErrId == true && flagNoErrId == false) {
                            alert(`С указанным id нет товаров!`);

                        }
                    }
                }
                else {
                    alert("Количество элементов в корзине меньше, чем количество, которое требуется удалить из корзины!");
                }
            }
            displayProducts(cart);
        }, 2000);
    }


    console.log(cart);
}
productsCart(catalog);