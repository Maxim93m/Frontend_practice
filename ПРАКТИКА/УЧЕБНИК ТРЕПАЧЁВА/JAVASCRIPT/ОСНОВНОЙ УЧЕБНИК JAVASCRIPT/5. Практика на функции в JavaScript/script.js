// Задача №1
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// function getSummArrItem(arr){
//     let summ = 0;
//     for(value of arr){
//         summ += value;
//     }
//     return summ
// }

// let arr = [5, 5, 5, 5, 5];
// console.log(getSummArrItem(arr));

// Задача №2
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// function getDividerNumber(number) {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         if(number%i==0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let num = 18;
// console.log(getDividerNumber(num));

// Задача №3
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function getArray(string){
//     let arr = string.split('');
//     return arr;
// }

// let str = "javascript";
// console.log(getArray(str));

// Задача №4
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// function getArray(string){
//     let arr = string.split('');
//     arr = arr.reverse();
//     string = arr.join('');
//     return string;
// }

// let str = "javascript";
// console.log(getArray(str));

// Задача №5
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function getUpperFirstChar(string){
//     let arr = string.split('');
//     let char = arr.splice(0,1).join('');
//     string = char.toUpperCase()+ arr.join('');
//     return  string;
// }

//  let str = "javascript";
//  console.log(getUpperFirstChar(str));

// Задача №6
// Сделайте функцию, которая параметром будет принимать строку 
// и делать заглавной первую букву каждого слова этой строки.
// function getUpperFirstCharWord(string) {
//     let arr = string.split(' ');
//     string = '';
//     for (value of arr) {
//         string += value.slice(0, 1).toUpperCase() + value.slice(1, value.length) + " ";
//     }

//     return string;
// }

// let str = "javascript css html main function";
// console.log(getUpperFirstCharWord(str));

// Задача №7
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// function getArrayNumbers(Number) {
//     let arr = [];
//     for (let i = 1; i < endNumber; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// let endNumber = 10;
// console.log(getArrayNumbers(endNumber));

// Задача №8
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// function getArraySummNumbers(number){
//     let summ = 0;
//     let arr = String(number).split('');

//     for(value of arr){
//         summ += Number(value); 
//     }
//     return summ;
// }

//  let Numb = 554;
//  console.log(getArraySummNumbers(Numb));

// Задача №9
// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// function getYear(value) {
//     if (year % 400 == 0) {
//         return `Год ${year} - високосный...`
//     }
//     else if (year % 100 == 0 && year % 4 != 0) {
//         return `Год ${year} - невисокосный...`
//     }
//     else if (year % 100 != 0 && year % 4 == 0) {
//         return `Год ${year} - високосный...`
//     }
//     else {
//         return `Год ${year} - невисокосный...`
//     }
// }


// let year = 2019;
// console.log(getYear(year));

// Задача №10
// Сделайте функцию, которая параметром будет принимать секунды, 
// // а возвращать количество суток, соответствующих этим секундам.
// function getDay(seconds){
//     return Math.trunc(seconds/60/60/24);
// }

// let seconds = 700000;
// console.log(getDay(seconds));

// Задача №11
// Сделайте функцию, которая будет возвращать случайный элемент из массива.
// function getRandomNumber(array) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }


// let arr = [0, 1, 2, 3, 400, 500, 600, 700, 8, 900];
// console.log(getRandomNumber(arr));

// Задача №12
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function getNumber(numb) {
    if (numb % numb == 0 && numb % 1 == 0) {
        return "Простое число"
    }
}

let numb = 4;
console.log(getNumber(numb));