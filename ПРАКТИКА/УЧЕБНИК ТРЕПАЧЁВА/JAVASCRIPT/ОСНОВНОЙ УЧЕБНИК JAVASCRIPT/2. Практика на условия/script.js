// Задача №1
// В переменной month лежит какое-то число из интервала от 1 до 12. 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let month = getRandomInt(1, 12);
// let season = '';

// if (month == 1 || month == 2 || month == 12) {
//     season = 'ЗИМА';
// }
// else if (month >= 3 && month <= 5) {
//     season = 'ВЕСНА';
// }
// else if (month >= 6 && month <= 8) {
//     season = 'ЛЕТО';
// }
// else if (month >= 9 && month <= 11) {
//     season = 'ОСЕНЬ';
// }


// console.log(`${month} --> ${season}`);

// Задача №2
// Дана строка, состоящая из символов, например, 'abcde'. 
// Проверьте, что первым символом этой строки является буква 'a'. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = 'sasaaaaaaaaaaaavabcde';

// if(str[0]=='a'){
//     console.log('Да');
// }
// else{
//     console.log('Нет');
// }

// Задача №3
// Дано число, например, 12345. 
// Проверьте, что первым символом этого числа является цифра 1, 2 или 3.
//  Если это так - выведите 'да', в противном случае выведите 'нет'.

// let number = 3892912345;
// let str = String(number);

// if (str[0] >= '1' && str[0] <= '3') {
//     console.log('Да');
// }
// else {
//     console.log('Нет');
// }

// Задача №4
// Дано трехзначное число. Найдите сумму цифр этого числа.
// let number = 984;
// let sum = 0;

// number = String(number).split('');

// for (let value of number) {
//     sum += Number(value);
// }

// console.log(sum);

// Задача №5
// Дано число из 6-ти цифр. 
// Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

let number = 723129;
number = String(number).split('');

let sum_1 = Number(number[0]) + Number(number[1]) + Number(number[2]);
let sum_2 = Number(number[3]) + Number(number[4]) + Number(number[5]);

console.log(sum_1,sum_2 )

if (sum_1 == sum_2) {
    console.log('Да');
}
else {
    console.log('Нет');
}

