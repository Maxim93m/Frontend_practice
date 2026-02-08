// Задача 4: "Счетчик слов"
// Напишите функцию, которая принимает на вход строку и возвращает объект, 
// содержащий количество каждого уникального слова в строке.



let counterWords = function (str) {

    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let arr = str.toLowerCase().split(' ');
    let count = 0;
    let obj = {};


    for (let arr_value of arr) {
        if (!obj.hasOwnProperty(arr_value)) {
            count++;
            obj[arr_value] = count;
        }
        else {
            count++;
            obj[arr_value] = Number(obj[arr_value]) + count;
        }
        count = 0;
    }

    let out_str = '';
    for (let i = 0; i < Object.keys(obj).length; i++) {
        out_str += (`${Object.keys(obj)[i]}: ${Object.values(obj)[i]}\n`);
    }
    return `Введённая строка:\n${str}\n\nКоличество уникальных слов в введёной строке:\n\n${out_str}`;

}

let str = prompt("Введите предложение:", "Программирование это просто, программирование это просто круто!");
alert(counterWords(str));
