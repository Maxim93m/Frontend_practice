// Напишите функцию, которая принимает массив строк и возвращает новый массив, 
// содержащий длину каждой строки исходного массива.

let lenghtArr = function (arrStr) {
    let len = [];
    let arr = [];

    arr = arrStr.split(",");
    for (let i = 0; i < arr.length; i++) {
        len[i] = arr[i].length;
    }
    return `Длина каждой строки исходного массива:[${len}]`;
}

let arrStr = prompt("Дан массив строк:", "воздух,земля,вода,огонь");
alert(lenghtArr(arrStr));