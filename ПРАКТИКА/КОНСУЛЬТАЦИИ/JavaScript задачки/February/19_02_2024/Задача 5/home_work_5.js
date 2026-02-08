// Создайте цикл, который выводит все четные числа от 1 до 20 включительно

let even_numbers = function (arrStr) {
    let even = '';
    let arr = [];

    arr = arrStr.split(",");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += arr[i] + ",";
        }
    }
    return `Чётные элементы массива: ${even}`;
}

let arrStr = prompt("Дан массив чисел от 1 до 20:", "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20");
alert(even_numbers(arrStr));