// Задача 1: "Шпионский переворот"
// Вам предоставлен массив слов, и ваша задача — создать новый массив, 
// в котором все слова перевернуты задом наперёд.




let reverseFunc = function (arr) {
    let arrNew = [];
    for (let value of arr) {
        let str = value.split("").reverse().join();
        arrNew.push(str);
    }
    return arrNew;
}

let words = ["стул", "кот", "яблоко", "программирование", "юла", "задача"];
console.log(reverseFunc(words));