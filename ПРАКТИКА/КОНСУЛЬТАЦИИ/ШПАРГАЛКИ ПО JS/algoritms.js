
// O(1) Константная зависимость
// всегда 1

function getElem(arr) {
  return arr[arr.length-1]
}
console.log(([10, 11, 27, 31, 48, 51, 62, 71, 81, 91]))
// O(n) линейная зависимость
// сколько данных, столько и значение

function sumArr(arr) {
  let sum = 0
  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i] 
  }
  
  return sum
  
}

console.log(sumArr([10, 11, 27, 31, 48, 51, 62, 71, 81, 91]))

// О(log n) логарифмическая сложность
// 1 = 1, 100 = 7, 10 000 = 14 операций

let find = function (num, target) {
  let left = 0;
  let right = num.length - 1;
  let middle;
  
  while(left <= right) {
    middle = Math.round((right-left)/2) + left;
    
    if(target === num[middle]) {
      return middle
    } else if (target < num[middle]) {
       left = middle + 1  
    } else {
     
      right = middle - 1
    }
  }
  return -1
}

console.log(find([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 7)

// O (n^2) Квадратичная сложность
//  O(n) в квадрате


function multyplyList(n) {
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      console.log(`${i} * ${j} = ${i*j}`)
    }
  }
}


// O(2(квадрат от n)) Экспоненциальная сложность
// 10 = 1024
// 20 = 1 048 576



function fib3(num) {
  if(num < 2) {
    return num
  }
  
  return fib3(num - 1) + fib3 (num - 2)
}
