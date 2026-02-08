// Задача №1
// Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];


// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.textContent = elem;
//     p.addEventListener('click', () => {
//         p.textContent = elem++;
//     });
//     parent.appendChild(p);
// }

// Задача №2
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let arr = [1, 2, 3, 4, 5];
// let elem = document.querySelector('#elem');

// for(let item of arr){
//     let li = document.createElement('li');
//     li.addEventListener('click', ()=>{
//         li.textContent = item + "!";
//     });     
//     elem.appendChild(li);
// }

// Задача №3
// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// let rows = document.querySelector('#rows');
// let columns = document.querySelector('#columns');
// let rowsValue = 0, columnsValue = 0;
// let btn = document.querySelector('#btn');
// let table = document.querySelector('#table');

// rows.addEventListener('blur', () => {
//     rowsValue = Number(rows.value);
// });
// columns.addEventListener('blur', () => {
//     columnsValue = Number(columns.value);
// });

// btn.addEventListener('click', () => {
//     for (let i = 0; i < rowsValue; i++) {
//         let tr = document.createElement('tr');
//         tr.classList.add('tr' + i);
//         table.appendChild(tr);
//         let trr = table.querySelector('.tr' + i);
//         for (let j = 0; j < columnsValue; j++) {
//             let td = document.createElement('td');
//             td.textContent = 'x';
//             trr.appendChild(td);
//         }
//     }
// });

// Задача №4
// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, 
// чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// Модифицируйте предыдущую задачу так, 
// чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// let table = document.querySelector('#table');
// let count = 1;

// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 10; i++) {
//         let td = document.createElement('td');
//         if(count%2==0){
//         td.textContent = count;
//         }
//         count++;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// Задача №5
// Не подсматривая в теоретическую часть урока, 
// выведите элементы приведенного массива в виде HTML таблицы table.
// Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, 
// а квадраты этих элементов.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let i = 0; i < arr.length; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < arr[i].length; j++) {
//         let td = document.createElement('td');
//         td.textContent = Math.pow(arr[i][j], 2);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// Задача №6
// Выведите элементы этого массива в виде HTML таблицы.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку 
// с возрастом ее содержимое увеличивалось на 1.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой 
// ее содержимое увеличивалось на 10%.
// let employees = [
//     { name: 'employee1', age: 30, salary: 400 },
//     { name: 'employee2', age: 31, salary: 500 },
//     { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.getElementById('table');

// for (let user of employees) {
//     let tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.textContent = user.name;
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.textContent = user.age;
//     tr.appendChild(td2);
//     td2.addEventListener('click', () => {
//         td2.textContent = user.age++;
//     });

//     let td3 = document.createElement('td');
//     td3.textContent = user.salary;
//     tr.appendChild(td3);
//     td3.addEventListener('click', () => {
//         user.salary = Number(user.salary + (user.salary * 0.1));
//         td3.textContent = Math.ceil(user.salary);
//     });
//     table.appendChild(tr);
// }

// Задача №7
// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// Дана также кнопка. Сделайте так, 
// чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

// let table = document.querySelector('#table');
// let addRows = document.querySelector('#addRows');

// addRows.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//     let trs = document.querySelectorAll('#table tr');

//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// });

// Задача №8
// Пусть дана некоторая HTML таблица с числами и кнопка.
// По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let table = document.querySelector('#table');
// let btn = document.querySelector('#addRows');
// let count = 1;

// for (let i = 0; i < 3; i++) {
//     let tr = document.createElement('tr');

//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         td.textContent = count;
//         count++;

//         tr.appendChild(td);

//     }
//     table.appendChild(tr);
// }
// let tds = document.querySelectorAll('#table td');

// btn.addEventListener('click', () => {
//     for (let value of tds) {
//         value.textContent *= 2;
//     }
// });

// Задача №9
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. 
// Сделайте так, чтобы любая li удалялась по клику на нее. 
// Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
// let btn = document.querySelector('#button');
// let ul_len = 0;

// const RemoveItem = () => {
//     let li = document.querySelectorAll('#parent li');
//     for (let elem of li) {
//         elem.addEventListener('click', () => {
//             elem.remove();
//         });
//     }
// }

// btn.addEventListener('click', () => {
//     let ul = document.querySelector('#parent');
//     let li_n = document.createElement('li');
//     if (ul.lastElementChild != null) {
//         let last = ul.lastElementChild.textContent;
//         last++;
//         li_n.textContent = last;
//     }
//     else {
//         li_n.textContent = 1;
//     }
//     ul.appendChild(li_n);
//     RemoveItem();
// });

// RemoveItem();

// Задача №10
// Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, 
// с помощью которой этот абзац можно будет удалить
// let p = document.querySelector('#elem');
// let a = document.querySelector('#remove');

// a.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     p.remove();
// });

// Задача №11
// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let ul = document.querySelector('#parent');
// let li = document.querySelectorAll('#parent li');

// for(let elem of li){
//     let a = document.createElement('a');
//     a.href = 'https://github.com/Maxim93mk';
//     a.textContent = ' remove';
//     elem.appendChild(a);

//     a.addEventListener('click', (evt)=>{
//         evt.preventDefault();
//         elem.remove();
//     });
// }

// Задача №12
// Дана HTML таблица. Добавьте в нее еще одну колонку, 
// в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда
// let table = document.querySelector('#table');
// let tr = document.querySelectorAll('#table tr');

// for(let elem of tr){
//     let td = document.createElement('td');
//     let tdR = elem.appendChild(td);
//     let a = document.createElement('a');
//     a.href = 'https://github.com/Maxim93mk';
//     a.textContent = 'remove';
//     tdR.appendChild(a);

//     a.addEventListener('click', (evt)=>{
//         evt.preventDefault();
//         elem.remove();
//     });
// }

// Задача №13
// let elem = document.querySelector('#elem');
// let div = document.querySelector('#parent');

// elem.addEventListener('click', () => {
//     input = document.createElement('input');
//     input.value = elem.textContent;
//     div.appendChild(input);
//     input.addEventListener('input', () => {
//         elem.textContent = input.value;
//     });
// });

// Задача №14
// let elem = document.querySelector('#elem');
// let div = document.querySelector('#parent');

// elem.addEventListener('click', func = () => {
//     input = document.createElement('input');
//     input.value = elem.textContent;
//     elem.textContent = '';
//     div.appendChild(input);
//     input.addEventListener('blur', ()=>{
//         elem.textContent = input.value;

//     });
//     elem.removeEventListener('click', func)
// });


// Задача №15
// let ul = document.querySelector('#parent');
 let li = document.querySelectorAll('#parent li');


 for(let elem of li){    
     elem.addEventListener('click', func = ()=>{
       let  input = document.createElement('input');
        input.value = elem.textContent;
        elem.textContent = '';
		elem.appendChild(input);
		
 		input.addEventListener('blur', function() {
 			elem.textContent = this.value;
 			 elem.addEventListener('click', func);
 		});
        elem.removeEventListener('click', func)

});

 }

//let elems = document.querySelectorAll('p');

//for (let elem of elems) {
	//elem.addEventListener('click', function func() {
		// let input = document.createElement('input');
		// input.value = elem.textContent;
		
		// elem.textContent = '';
		// elem.appendChild(input);
		
		//input.addEventListener('blur', function() {
			// elem.textContent = this.value;
			// elem.addEventListener('click', func);
		//});
		
		// elem.removeEventListener('click', func);
	//});
//}
