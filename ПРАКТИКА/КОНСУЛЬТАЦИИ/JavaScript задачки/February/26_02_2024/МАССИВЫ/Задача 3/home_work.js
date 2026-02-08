// Задача 3: "Обратный порядок"
// Вам предоставлен массив, и вам нужно изменить его порядок на обратный без использования метода reverse().




let getReverse = function (arr) {
    let elem = 0;

    for (let i = 0; i < arr.length - i - 1; i++) {
        let lastElem = arr.length - i - 1;
        elem = arr[i];
        arr[i] = arr[lastElem];
        arr[lastElem] = elem;
    }
    return arr;
}



const originalArray = [10, 20, 30, 40, 50, 60, 80, 90];
console.log(getReverse(originalArray));