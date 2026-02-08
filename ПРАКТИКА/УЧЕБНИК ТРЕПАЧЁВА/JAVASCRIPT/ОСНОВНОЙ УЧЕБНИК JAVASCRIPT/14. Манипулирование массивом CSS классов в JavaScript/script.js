// Задача №1, Задача №2, Задача №3, Задача №4, Задача №5, Задача №6
// Узнайте количество его классов.
// Переберите в цикле его классы.
// Добавьте ему класс xxx.
// Удалите у него класс www и класс zzz.
// Проверьте наличие у него класса ggg.
// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
let p = document.querySelector('#elem');

console.log(p.classList.length);

for (value of p.classList) {
    console.log(value);
}

p.classList.add('xxx');

p.classList.remove('www', 'zzz');

if (p.classList.contains('ggg')) {
    console.log('true');
}
else{
    console.log('false');
}

p.classList.toggle('www');