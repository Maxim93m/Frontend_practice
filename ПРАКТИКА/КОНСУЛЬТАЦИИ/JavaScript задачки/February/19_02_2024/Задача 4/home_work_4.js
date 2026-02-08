// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов массива.

let summ = function (arrStr) {
    let sum = 0;
    let arr = [];

    arr = arrStr.split(",");
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return `Сумма элементов массива: ${sum}`;
}

let arrStr = prompt("Введите массив чисел через запятую:", "2,3,19,5,7");
alert(summ(arrStr));