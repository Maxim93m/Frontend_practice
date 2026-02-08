// Задача №1
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5, 7, 14];
let summ = 0;
arr.forEach(elem => summ += elem * elem);
console.log(summ);


