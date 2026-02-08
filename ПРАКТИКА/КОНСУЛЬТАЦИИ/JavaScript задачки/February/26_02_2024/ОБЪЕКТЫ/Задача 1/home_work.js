// Задача 1: "Шифр Виженера"
// Вы создаете функцию для шифрования сообщений в стиле Виженера. 
// Ваша функция должна принимать на вход ключ и строку для шифрования, а затем возвращать зашифрованное сообщение. 
// Каждая буква в сообщении должна сдвигаться в соответствии с алфавитом ключа.




let getEncryp = function (key, word) {
    let obj = {
        0: 'а',
        1: 'б',
        2: 'в',
        3: 'г',
        4: 'д',
        5: 'е',
        6: 'ё',
        7: 'ж',
        8: 'з',
        9: 'и',
        10: 'й',
        11: 'к',
        12: 'л',
        13: 'м',
        14: 'н',
        15: 'о',
        16: 'п',
        17: 'р',
        18: 'с',
        19: 'т',
        20: 'у',
        21: 'ф',
        22: 'х',
        23: 'ц',
        24: 'ч',
        25: 'ш',
        26: 'щ',
        27: 'ъ',
        28: 'ы',
        29: 'ь',
        30: 'э',
        31: 'ю',
        32: 'я'
    };
    // Функция для замены букв на номера, которые соответствую номеру в алфавите
    function getNumArr(in_arr, obj_arr, obj_arr_len) {
        let out_arr = [];
        for (let i = 0; i < in_arr.length; i++) {
            for (let j = 0; j < obj_arr_len; j++) {
                if (in_arr[i] == obj_arr[j]) {
                    out_arr.push(j);
                }
            }
        }
        return out_arr;
    }

    word = word.split("");
    key = key.split("");

    let word_num = [], key_num = [];
    let obj_length = Object.keys(obj).length;

    word_num = getNumArr(word, obj, obj_length);
    key_num = getNumArr(key, obj, obj_length);

    for (let i = 0; i < word_num.length; i++) {
        if (key_num.length < word_num.length) {
            key_num.push(key_num[i]);
        }
    }

    let num = 0;
    let str = '';

    for (let i = 0; i < word_num.length; i++) {
        num = (word_num[i] + key_num[i]) % obj_length;
        str += obj[num];
    }
    return str.toUpperCase();
}

let word = prompt("Введите слово которое нужно зашифровать: ", "программирование");
let key = prompt("Введите ключ шифрования: ", "код");
alert(`Зашифрованное сообщение: --> ${getEncryp(key.toLowerCase(), word.toLowerCase())}`);