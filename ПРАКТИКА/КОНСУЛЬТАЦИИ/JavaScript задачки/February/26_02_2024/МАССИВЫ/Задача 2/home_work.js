// Задача 2: "Сокращаем до половины"
// Дан массив чисел, и вам нужно создать новый массив, содержащий каждое второе число из исходного массива.




let getNumbers = function (arr) {
    let arrNew = [];
    for (let i = 1; i < arr.length; i += 2) {
        arrNew.push(arr[i]);
    }
    return arrNew;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 55, 12, 33, 13, 99];
console.log(getNumbers(numbers));