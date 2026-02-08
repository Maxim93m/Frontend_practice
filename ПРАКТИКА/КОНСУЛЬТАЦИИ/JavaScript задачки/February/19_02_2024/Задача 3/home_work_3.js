// Напишите функцию JavaScript, 
// которая принимает строку в качестве входных данных и возвращает новую строку, 
// в которой первая буква каждого слова заглавная.
// Максимальная длина строки -15 символов.

let upper_letter = function (str) {
    let arr = [];
    let count = 0;
    if (str.length > 15) {
        return `Длина строки больше 15 символов`;
    }
    else {
        arr = str.split(" ");
        str = "";
        for(let i = 0; i<arr.length; i++){
            str += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1) + " ";
        }
        return `Новая строка: ${str}`;
    }
}

let str = prompt("Введите строку не более 15 символов:", "люди любят пиво");
alert(upper_letter(str));