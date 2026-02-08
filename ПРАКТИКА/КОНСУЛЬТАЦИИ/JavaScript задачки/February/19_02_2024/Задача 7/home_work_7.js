// Создайте функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные значения из исходного массива. (это задача со звездочкой, подумайте)

let uniq = function (arrStr) {
    let len = [];
    let arr = [];

    arr = arrStr.split(",");
    for (let value of arr) {
        if (!len.includes(value)) {
            len.push(value);
            console.log(len);
        }
    }
    return `Уникальные значения исходного массива:[${len}]`;
}

let arrStr = prompt("Дан массив строк:", "1,2,5,0,1,3,0,6,7,7,6");
alert(uniq(arrStr));