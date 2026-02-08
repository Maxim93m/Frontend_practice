// Степень и корень в JavaScript
// Задача №1
// Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10));
// Задача №2
// Найдите квадратный корень из 245.
// console.log(Math.sqrt(245));;
// Задача №3
// Дан следующий массив: [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
// }
// console.log(Math.sqrt(sum));

// Функции округления в JavaScript
// Задача №1
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let value = Math.sqrt(379);
// console.log(value);
// console.log(Math.round(value));
// console.log(value.toPrecision(3));
// console.log(value.toPrecision(4));
// Задача №2
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// let value = Math.sqrt(587);
// let obj = {};

// obj.floor = Math.floor(value);
// obj.ceil = Math.ceil(value);

// console.log(obj);

// Экстремальные числа в JavaScript
// Задача №1
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Рандом в JavaScript
// Задача №1
// Выведите на экран случайное целое число от 1 до 100.
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));
// Задача №2
// С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// Модули в JavaScript
// Задача №1
// Даны переменные a и b. Найдите модуль разности a и b. 
// Проверьте работу скрипта самостоятельно для различных a и b.
// let a = -35, b = 15;
// console.log(Math.abs(a-b));

// Регистр символов в JavaScript
// Задача №1
// Дана строка 'js'. Сделайте из нее строку 'JS'.
// console.log('js'.toUpperCase());
// Задача №2
// Дана строка 'JS'. Сделайте из нее строку 'js'.
// console.log('JS'.toLowerCase());

// Вырезание строк в в JavaScript
// Задача №1
// Дана строка 'я учу javascript!'.
// Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let str = 'я учу javascript!'
// str = str.substr(-str.length, 1)
// console.log(str);

// let str1 = 'я учу javascript!'
// str1 = str1.substring(-str1.length, 1)
// console.log(str1);

// let str2 = 'я учу javascript!'
// str2 = str2.slice(-str2.length, 1)
// console.log(str2);

// Поиск по строкам в JavaScript
// Задача №1
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = 'http://runebook.dev/ru/docs/webpack/guides/asset-management';
// let res = str.startsWith('http://');
// console.log(res);

// Задача №2
// let str = 'http://runebook.dev/ru/docs/webpack/guides/asset-management.html';
// let res = str.endsWith('.html');
// console.log(res);

// Замена частей строки в JavaScript
// Задача №1
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
// let str = '1-2-3-4-5';
// for (let i = 0; i < str.length; i++) {
//     str = str.replace('-', '.');
// }
// console.log(str);

// Части строк в JavaScript
// Задача №1
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
// console.log('1-2-3-4-5'.split('-'));

// Задача №2
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
//  console.log('12345'.split(''));

// Задача №3
// С помощью метода join слейте его в строку '1-2-3-4-5'.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('-'));

// Граничные элементы в JavaScript
// Задача №1
//  Выведите на экран первый элемент этого массива.
// let arr = [93, 2, 3];
// console.log(arr[0]);
// Задача №2
//  Выведите на экран последний элемент этого массива.
// let arr = [93, 2, 35];
// console.log(arr[2]);
// Задача №3
//  Добавьте ему в конец элементы 4, 5, 6.
//  let arr = [1, 2, 3];
//  arr.push(4,5,6);
//  console.log(arr);
// Задача №4
//  Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4,5,6);
// console.log(arr);

// Части массивов в JavaScript
// Задача №1
// Сделайте из этого массива следующий: [1, 2, 3]
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));

// Задача №2
// Используя этот массив, запишите в новую переменную следующий массив: [4, 5]
// let arr = [1, 2, 3, 4, 5];
// let arr_out = [];

// arr_out = arr.slice(3);
// console.log(arr_out);

// Вырезание массивов в JavaScript
// Задача №1
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);
// Задача №2
// С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0,  'a', 'b', 'c');
// console.log(arr);
// Задача №3
// С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// Поиск по массивам в JavaScript
// Проверьте, есть ли в этом массиве число 3.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.includes(3);
// console.log(res);

// Массив ключей объекта в JavaScript
// Задача №1
// Получите массив его ключей.
let obj = {a: 1, b: 2, c: 3};
let arr_keys =[];

arr_keys.push(Object.keys(obj));
console.log(arr_keys);