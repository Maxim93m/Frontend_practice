// Задача 5: "Магазин книг"
// Вы разрабатываете приложение для управления инвентарем в книжном магазине. 
// Напишите функцию, которая принимает массив книг и возвращает объект, 
// содержащий информацию о количестве экземпляров каждой книги.



let getBooksInfo = function (book) {
    let obj = {};

    for (let i = 0; i < books.length; i++) {
        obj[books[i].title] = books[i].copies
    }
    console.log(obj);

    let out_str = '';
    for (let i = 0; i < Object.keys(obj).length; i++) {
        out_str += (`${Object.keys(obj)[i]}: ${Object.values(obj)[i]}\n`);
    }
    return `Информация о количестве книг в магазине:\n\n${out_str}`;
}



const books = [
    { id: 1, title: "JavaScript: The Good Parts", copies: 5 },
    { id: 2, title: "You Don't Know JS", copies: 3 },
    { id: 3, title: "Eloquent JavaScript", copies: 7 },
    { id: 4, title: "JavaScript", copies: 10 },
    { id: 5, title: "HTML CSS JS", copies: 15 },
    { id: 14, title: "HTML", copies: 5 },
    { id: 32, title: "CSS", copies: 7 },
];

alert(getBooksInfo(books));
