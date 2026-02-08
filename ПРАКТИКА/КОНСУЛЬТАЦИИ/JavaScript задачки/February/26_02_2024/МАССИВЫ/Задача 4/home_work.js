// Задача 4: "Фильтр четных чисел"
// Дан массив чисел, и ваша задача — создать новый массив, включающий только четные числа.




let getEventNumbers = function (arr) {
    let arrNew = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 13, 118];
console.log(getEventNumbers(numbers));