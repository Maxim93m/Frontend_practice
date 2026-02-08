// Задача 3
// Проверьте, содержит ли строка одинаковое количество символов «x» и «o». 
// Метод должен возвращать логическое значение и быть нечувствительным к регистру. 
// Строка может содержать любой символ.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // когда нет «x» и «o», должно возвращаться true
// XO("zzoo") => false

let getStatusXO = function (str) {
    let countX = 0, countO = 0;

    str = str.toLowerCase();
    let arr = str.split('');

    arr.forEach(function (elem) {
        if (elem == 'o') {
            countO++;
        }
        if (elem == 'x') {
            countX++;
        }
    });
    if (countO == countX) {
        console.log(`Количество символов О:${countO}\nКоличество символов X:${countX}\nВозвращаемое значение ----> True`);
        return true;
    }
    else {
        console.log(`Количество символов О:${countO}\nКоличество символов X:${countX}\nВозвращаемое значение ----> False`);
        return false;
    }

}

getStatusXO("ooxx");
getStatusXO("xooxx");
getStatusXO("ooxXm");
getStatusXO("zpzpzpp");
getStatusXO("zzoo");
getStatusXO("ooodxxXx");

