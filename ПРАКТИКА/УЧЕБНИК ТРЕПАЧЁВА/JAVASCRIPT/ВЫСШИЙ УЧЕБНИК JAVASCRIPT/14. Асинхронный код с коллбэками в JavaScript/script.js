// Задача №1
// Асинхронный код с коллбэками в JavaScript
// function make(callback) {
// 	setTimeout(function() {
// 		console.log('1');
// 		callback();
// 	}, 3000);
// }

// make(function() {
// 	console.log('2');
// 	console.log('3');
// });

// Задача №2
// Асинхронная передача результата в коллбэк в JavaScript
// Допишите код коллбэка так, чтобы он находил сумму элементов массива с результатом.
// function make(callback) {
//     setTimeout(function () {
//         let res = [1, 2, 3, 4, 5];
//         callback(res); // передаем результат параметром
//     }, 3000);
// }
// make(function (res) {
//     let sum = 0;
//     res.forEach(element => {
//         sum += element;
//     });
//     console.log(sum);
// });

// Задача №3
// Передача параметров в асинхронный коллбэк в JavaScript
// Сделайте так, чтобы функция make принимала два параметра: 
// номер одного и другого элемента массива. 
// Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов.
// function make(num1, num2, callback) {
//     setTimeout(function () {
//         let arr = [1, 2, 3, 4, 5];
//         callback(arr[num1], arr[num2]); // результатом передаем элемент массива
//     }, 3000);
// }

// make(0, 4, function (val1, val2) {
//     let sum = val1 + val2;
//     console.log(sum);
// });

// Задача №4
// Иключения в асинхронных коллбэках в JavaScript
// function make(num, callback) {
// 	setTimeout(function() {
// 		let arr = [1, 2, 3, 4, 5];
		
// 		let err;
// 		if (arr[num] === undefined) {
// 			err = 'elem not exists'; // текст ошибки
// 		} else {
// 			err = null; // ошибки нет
// 		}
		
// 		callback(arr[num], err);
// 	}, 3000);
// }

// Задача №5
// Загрузка картинок через асинхронные коллбэки в JavaScript
// Реализуйте функцию loadImage. 
// Используйте для этого изученный вами ранее код для загрузки картинок.
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let img = document.createElement('img');
    // img.src = 'img/iwe.jpg';
    loadImage('/img/iwe.jpg', function(img, err){
      if(!err){
        document.body.appendChild(img);
      }  
      else{
        alert("Ошибка!");
      }
    });

});

