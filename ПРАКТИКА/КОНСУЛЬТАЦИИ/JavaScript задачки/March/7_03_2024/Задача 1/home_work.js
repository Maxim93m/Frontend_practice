// Задача 1
// Создайте из массива телефонный номер
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


let createPhoneNumber = function (numbers) {
    // // Решение как по примеру:

    // let str = numbers.join('');
    // let firstNumberStr = str.substr(0, 3);
    // let secondNumberStr = str.substr(3, 3);
    // let thridNumberStr = str.substr(6);
    // return (`Телефонный номер: (${firstNumberStr}) ${secondNumberStr}-${thridNumberStr}`);

    // Решение - вывод случайного номера из массива чисел:
    function randomNumbers(count, arr) {
        let randomIndex = numbers;
        let randomStr = '';
        for (let i = 0; i < count; i++) {
            randomIndex = Math.floor(Math.random() * (arr.length - 1));
            randomStr += numbers[randomIndex];
        }
        return randomStr;
    }

    let strCodeRandom = '', strBeginNumber = '', strMiddleNumber = '', strEndNumber = '', phoneNumber ='';
    let str = numbers.join('');
    let strSeven = str.substr(6, 1);

    strCodeRandom = randomNumbers(3, numbers);
    strBeginNumber = randomNumbers(3, numbers);
    strMiddleNumber = randomNumbers(2, numbers);
    strEndNumber = randomNumbers(2, numbers);
    phoneNumber = `+${strSeven} (${strCodeRandom}) ${strBeginNumber}-${strMiddleNumber}-${strEndNumber}`;
    return (`Телефонный номер: ${phoneNumber}`);



}

alert(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));