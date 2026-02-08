// Задача №1
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
// let div = document.querySelector('div');

// div.addEventListener('click', () => {
//     div.textContent += ' ' + div.dataset.text;

// });


// Задача №2
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
// let div = document.querySelectorAll('div');


// div.forEach(element => {
//     element.addEventListener('click', () => {
//         element.textContent += ' ' + element.dataset.num;
//     });
// });

// Задача №3
// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, 
// записывая их в какой-нибудь пользовательский атрибут. 
// Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let p = document.querySelector('.res');

// btn1.addEventListener('click', () => {
//     btn1.dataset.counter++;
// });

// btn2.addEventListener('click', () => {
//     p.textContent = btn1.dataset.counter;
// });


// Задача №4
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. 
// Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, 
// выводилось сообщение об этом.
// let inp1 = document.querySelector("#elem");
// let _length = Number(inp1.dataset.length);

// inp1.addEventListener('blur', () => {
//     if (inp1.value.length != _length) {
//         alert("Количество символов не совпадает!");
//     }
// });

// Задача №5
// В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, 
// если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
// let inp1 = document.querySelector("#elem");
// let _min = Number(inp1.dataset.min);
// let _max = Number(inp1.dataset.max);

// inp1.addEventListener('blur', () => {
//     if (inp1.value.length < _min || inp1.value.length > _max) {
//         alert("Количество символов не попадает в диапазон!");
//     }
// });

// Задача №6
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, 
// равная цене, умноженной на количество.
let div = document.querySelector("#elem");
let price = Number(div.dataset.productPrice);
let amount = Number(div.dataset.productAmount);

div.addEventListener('click', () => {
    div.textContent += ' ' + price * amount;
});