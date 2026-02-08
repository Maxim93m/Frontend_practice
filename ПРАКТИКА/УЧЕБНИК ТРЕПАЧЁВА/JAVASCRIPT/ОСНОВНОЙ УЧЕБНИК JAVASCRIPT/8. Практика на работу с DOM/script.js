// Задача №1
// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let inp1 = document.querySelector('.input1');
let p1 = document.querySelector('.elem1');

inp1.addEventListener('blur', () => 

localStorage.setItem('key', inp1.value)

);

inp1.value = localStorage.getItem('key');

// Задача №2
// Дано несколько инпутов, абзац и кнопка. 
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let btn1 = document.querySelector('.btn1');
// let p1 = document.querySelector('.elem1');

// btn1.addEventListener('click', function(){
//     p1.textContent = Number(inp1.value) + Number(inp2.value) + Number(inp3.value);
// });

// Задача №3
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function () {
//     let arr = inp1.value.split('');
//     let summ = 0;
//     for (value of arr) {
//         summ += Number(value);
//     }
//     console.log(summ);
// });

// Задача №4
// Дан инпут. В него вводятся числа через запятую. 
// По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)...
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function () {
//     let arr = inp1.value.split(',');
//     let summ = 0, middleSum = 0;
//     for (value of arr) {
//         summ += Number(value);
//     }
//     middleSum = summ / arr.length;
//     console.log(middleSum);
// });

// Задача №5
// Даны 4 инпута. 
// В первый инпут вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let inp4 = document.querySelector('.inp4');

// inp1.addEventListener('blur', function(){
//     let fio = inp1.value.split(' ');
//     inp2.value = fio[0];
//     inp3.value = fio[1];
//     inp4.value = fio[2];
// });

// Задача №6
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
// Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество 
// автоматически стали записанными с большой буквы (в этом же инпуте).
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function () {
//     let fio = inp1.value.split(' ');
//     let fio_str = ' ';

//     for (let value of fio) {
//         fio_str += value.slice(0, 1).toUpperCase() + value.slice(1, fio.lenght) + " ";
//     }

//     inp1.value = fio_str;
// });

// Задача №7
// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function () {
//     let words = inp1.value.split(' ');
//     console.log(words.length);
// });

// Задача №8
// Дан инпут. В него вводится дата в формате 31.12.2016. 
// По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function () {
//     let arr = inp1.value.split('.').reverse().join('-');

//     inp1.value = arr;
// });

// Задача №9
// Дан инпут. В него вводится слово. 
// По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');

// btn1.addEventListener('click', function(){
//     let reverse_inp1 = inp1.value.split('').reverse().join('');

//     if(inp1.value==reverse_inp1){
//         console.log('true');
//     }
//     else{
//         console.log('false');  
//     }
// });

// Задача №10
// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function(){
//     let str = String(inp1.value);

//     if(str.includes('3')){
//         console.log('true');
//     }
//     else{
//         console.log('false');  
//     }
// });

// Задача №11
// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let p_all = document.querySelectorAll('p');
// let btn1 = document.querySelector('.btn1');

// btn1.addEventListener('click', function () {

//     for (let i = 0; i < p_all.length; i++) {
//         p_all.item(i).textContent += " " + i;

//     }
// });

// Задача №12
// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let link = document.querySelectorAll('a');

// for(let i=0;i<link.length;i++){
//     console.log(link.item(i).getAttribute("href"))
//     link.item(i).textContent += " ("+ link.item(i).getAttribute("href") +")"

// }

// Задача №13
// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let link = document.querySelectorAll('a');

// for(let i=0; i<link.length;i++){
//     console.log(link.item(i).getAttribute("href"))
//     if(link.item(i).getAttribute("href").startsWith("http://")){
//         link.item(i).textContent += "\u2192";
//     }
// }

// Задача №14
// Даны несколько абзацев с числами. 
// По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let p_all = document.querySelectorAll('p');

// for(let i = 0;i<p_all.length; i++){
//     p_all.item(i).addEventListener('click', function(){
//         p_all.item(i).textContent = Math.pow(Number(p_all.item(i).textContent),2);
//     });
// }

// Задача №15
// Дан инпут. В него вводится дата в формате 31.12.2016. 
// По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let inp1 = document.querySelector('.inp1');

// inp1.addEventListener('blur', function(){
//     let dateR = inp1.value.split('.').reverse().join('.');
//     let date = new Date(dateR);
//     let days = ["вс","пн","вт","ср","чт","пт","сб",];

//     console.log(days[date.getDay()]);
// });

// Задача №16
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. 
// Сделайте так, чтобы это значение не могло стать меньше нуля.
// let inp1 = document.querySelector(".inp1");
// let btn_m = document.querySelector(".minus");
// let btn_p = document.querySelector(".plus");

// btn_m.addEventListener('click', function(){
//     if(inp1.value!=0){
//         inp1.value--;
//     }
// });

// btn_p.addEventListener('click', function(){
//         inp1.value++;
// });


// Задача №17
// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let p_all = document.querySelectorAll('p');
// let inp1 = document.querySelector('.inp1');
// let counter = 0;

// p_all.forEach(element => {
//     element.addEventListener('click', function(){
//         inp1.value = ++counter;
//     });
// });



// Задача №18
// На странице есть дивы. В них есть текст. 
// Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. 
// И добавьте троеточие в конец обрезанного текста
// let div_all = document.querySelectorAll('div');

// div_all.forEach(elem =>{
//     if(elem.textContent.length>10){
//        elem.textContent = elem.textContent.slice(0,10) + "..."
//     }
// });

// Задача №19
// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let chars = ["x", "u", "g", "q", "w", "d", "o", "a", "z", "h", "y", "t", "i", "j", "k"];

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// btn1.addEventListener('click', function () {
//     inp1.value='';
//     for (let i = 0; i < 8; i++) {
//         inp1.value += chars[getRandomInt(0, chars.length)];
//     }

// });

// Задача №20
// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
// По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// btn1.addEventListener('click', function () {
//     let arr = inp1.value.split('').reverse().join('');
//     inp1.value = arr;
// });


// Задача №21
// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. 
// По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let p1 = document.querySelector('.p1');

// btn1.addEventListener('click', function(){
//     p1.textContent = (Number(inp1.value)-32)*5/9;
// });

// Задача №22
// Дан инпут, кнопка и абзац. В инпут вводится число. 
// По нажатию на кнопку выведите в абзац факториал этого числа.
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let p1 = document.querySelector('.p1');

// btn1.addEventListener('click', function () {
//     let factorial = 1;
//     for (let i = 1; i <= Number(inp1.value); i++) {
//         factorial *=i;
//     }
//     p1.textContent = factorial;
// });

// Задача №23
// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. 
// По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let btn1 = document.querySelector('.btn1');
// let p1 = document.querySelector('.p1');

// btn1.addEventListener('click', function () {
//     let a = Number(inp1.value);
//     let b = Number(inp2.value);
//     let c = Number(inp3.value);

//     let D = Math.pow(b, 2) - 4 * a * c;
//     if (D > 0) {
//         let x1 = Math.round((b - Math.sqrt(D)) / 2 * a);
//         let x2 = Math.round((b + Math.sqrt(D)) / 2 * a);
//         p1.textContent = `x1: ${x1}\n\nx2: ${x2}`;
//     }
//     else if(D==0){
//         let x1 = Math.round(-b/2*a);
//         let x2 = x1;
//         p1.textContent = `x1: ${x1}\n``x2: ${x2}\n`;
//     }
//     else {
//         p1.textContent = "Корней нет..."
//     }
// });
