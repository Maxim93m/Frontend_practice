// Задача №1
// Синхронный и асинхронный код в JavaScript
// setTimeout(function() {
// 	console.log('1');
// }, 6000);

// console.log('2');

// Задача №2
// Асинхронность загрузки картинок в JavaScript
// Сделайте кнопку, по нажатию на которую будет загружаться картинка. 
// Покажите картинку, когда она будет загружена. 
// Выведите сообщение в случае проблем с загрузкой картинки.
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let img = document.createElement('img');
    img.src = '/img/iwe.jpg';
    img.addEventListener('load', () => {
        document.body.appendChild(img);
    });
    img.addEventListener('error', () => {
        alert("Ошибка!");
    });
});


