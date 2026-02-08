// Задача №1, Задача №2, Задача №3
// Объясните, зачем в приведенном выше коде используется функция Number. 
// Что будет, если не написать эту функцию в данном коде?
// Пусть в инпуте в атрибуте value изначально записано число 10. 
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// Модифицируйте предыдущую задачу так, чтобы, 
// как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
// let inp1 = document.querySelector('#elem');
// let timer;

// timer = setInterval(() => {
//     Number(--inp1.value);
//     if(inp1.value==0){
//         clearInterval(timer);
//     }
// }, 1000);

// Задача №4
// Дана кнопка. Дан абзац, текстом которого является число. 
// По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// let btn1 = document.querySelector('.btn1');
// let p = document.querySelector('.p');

// btn1.addEventListener('click', () => {
//     setInterval(() => {
//         Number(++p.innerHTML);
//     }, 1000);
// });

// Задача №5
// Дана кнопка. Дан абзац, текстом которого является число, например, 10. 
// По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. 
// Как только значение абзаца станет равно нулю - остановите таймер.
// let btn1 = document.querySelector('.btn1');
// let p = document.querySelector('.p');
// let timerId;

// btn1.addEventListener('click', () => {
//     timerId = setInterval(() => {
//         Number(--p.innerHTML);
//         if (p.innerHTML == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// });

// Задача №6
// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let inp1 = document.querySelector('#elem');

// setInterval(()=>{
//     inp1.value = Math.pow(Number(inp1.value), 2);
// }, 1000);

// Задача №7
// Дан инпут. В него вводится число. По потери фокуса сделайте так, 
// чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа.
// Когда отсчет дойдет до нуля - он должен закончится.
// let inp1 = document.querySelector('#elem');
// let p = document.querySelector('p');
// let timer;

// inp1.addEventListener('blur', () => {
//     p.innerHTML = inp1.value;
//     timer = setInterval(() => {
//         Number(--p.innerHTML);
//         if (Number(p.innerHTML) == 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// });


// Задача №8
// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: 
// пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
// let inp1 = document.querySelector('#elem');
// let btn1 = document.querySelector('.btn1');
// let p = document.querySelector('p');
// let timer;

// btn1.addEventListener('click', () => {
//     p.innerHTML = inp1.value;
//     timer = setInterval(() => {
//         Number(--p.innerHTML);
//         if (Number(p.innerHTML) == 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// });

// Задача №9
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку 
// в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let p = document.querySelector('p');
// let timer;


// btn1.addEventListener('click', ()=>{
//     timer = setInterval(()=>{
//         Number(++p.innerHTML);
//     },1000);
// });

// btn2.addEventListener('click', ()=>{
//     clearInterval(timer);
// });

// Задача №10
// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let p = document.querySelector('p');
// p.style.color = 'red';

// setInterval(()=>{
//     if(p.style.color=='red'){
//         p.style.color = 'green';
//     }
//     else{
//         p.style.color = 'red';
//     }
// }, 1000);

// Задача №11
// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. 
// Реализуйте такие же часики, как показано ниже в образце:
let p = document.querySelector('.p');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    p.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);


