// Задача №1
// Определите, сколько секунд прошло с начала дня до настоящего момента времени.
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let diff = now - date;
// let seconds = Math.round(diff / 1000);

// console.log(seconds);

// Задача №2
// Определите, сколько секунд осталось до конца дня.
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
// let diff = date - now;
// let seconds = Math.round(diff / 1000);
// console.log(seconds);

// Задача №3
// Определите, сколько дней осталось до нового года.
// let now = new Date();
// let newYear = new Date(2025, 0, 1);
// let days = Math.round((newYear-now)/1000/60/60/24);

// console.log(days);

// Задача №4
// Определите, сколько пятниц 13-е в текущем году.
// let count = 0;

// for (let i = 0; i < 12; i++) {
//     let now = new Date(1987, i, 13);
//     if (now.getDay() === 5) {
//         count++;
//     }
// }

// console.log(count);

// Задача №5
// Определите, какой год был 3 месяца назад.
// let now = new Date();
// let month = now.getMonth() - 3;

// if (month < 0) {
//     console.log(now.getFullYear() - 1);
// }
// else {
//     console.log(now.getFullYear());
// }

// Задача №6
// Определите, какой день недели будет в последнем дне текущего месяца.
// let now = new Date(2024, 4, 0);
// let week = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

// console.log(week[now.getDay()]);

// Задача №7
// Напишите код, который будет определять, високосный ли текущий год.
// let now = new Date(2024, 2, 0);
// if (now.getDate() == 29) {
//     console.log("Високосный");
// }
// else {
//     console.log("Обычный");
// }

// Задача №8
// Напишите код, который будет находить предыдущий високосный год.
// let now = new Date(1996, 2, 0);

// if(now.getDate()==29){
//     console.log(`Предыдущий високосный год - ${now.getFullYear()-4}`);
// }
// else{
//     console.log(`Текущий год обычный...`)
// }

// Задача №9
// Напишите код, который будет находить следующий високосный год.
let now = new Date(2020, 2, 0);

if(now.getDate()==29){
    console.log(`Следующий високосный год - ${now.getFullYear()+4}`);
}
else{
    console.log(`Текущий год обычный...`)
}


