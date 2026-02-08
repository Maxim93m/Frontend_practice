// Задача 2
// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность 
// и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом 
// и сохраняет исходный порядок элементов.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


let uniqueInOrder = function (value) {
    let outArr = [];
    let arr = value;

    if (!Array.isArray(value)) {
        arr = value.split('');
    }
    arr.forEach(function (elem, index, arr) {
        if (arr[index] != arr[index + 1]) {
            outArr.push(elem);
        }
        return outArr;
    });
    console.log(outArr);
}

uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcDCCdADD');
uniqueInOrder([1, 2, 2, 3, 3, 4, 5, 5, 7, 7, 7, 9, 15, 15, 19]);