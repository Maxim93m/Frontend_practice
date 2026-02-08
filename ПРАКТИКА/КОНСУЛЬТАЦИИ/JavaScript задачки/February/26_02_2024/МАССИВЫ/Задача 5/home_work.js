// Задача 5: "Сумма квадратов"
// У вас есть массив чисел, и ваша задача — вычислить сумму квадратов этих чисел.




let getSumSQR = function (arr) {


    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSumSQR(numbers));