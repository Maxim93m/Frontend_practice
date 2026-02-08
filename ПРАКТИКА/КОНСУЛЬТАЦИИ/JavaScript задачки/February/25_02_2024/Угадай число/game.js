// Игра на угадывание числа, пользователю загадывается число от 1 до 10 и записывается в переменную numRand, у пользователя есть 4 попытки (shots)
// необходимо написать условие по которому пользователю будут выводиться аллерты соотвествующие описания (например, "alert (`Загаданное число меньше, осталось попыток ${}`)")
// При каждой попытке количество shots у пользователя уменьшается на 1



const guessNumber = function (shots) {
    let numRand = Math.floor(Math.random() * 10)
    // let shot = shots;

    console.log("numRand ", numRand);
    const gameLoop = function (shots) {
        console.log("shots ", shots);
        if (shots == 0) {
            return confirm("Попытки закончились, хотите сыграть ещё?")
        }
        let nam = prompt("Угадайте число от одного до десяти")
        console.log("nam ", nam);
        if (nam==null) {
            alert("Игра окончена");
            return false;
        }
        if (isNaN(nam)) {
            alert("Введите число")
            return gameLoop(shots)
        }
        if (numRand < nam) {
            alert(`Загаданное число меньше, осталось попыток ${shots--}`)
            return gameLoop(shots--)
        }
        if (numRand > nam) {
            alert(`Загаданное число больше, осталось попыток ${shots--}`)
            return gameLoop(shots--)
        }
        else if (numRand == nam) {
            return confirm("Вы угадали, хотите сыграть ещё?")
        }
        else {
            return false
        }
    }
    if (gameLoop(shots)) {
        numRand = Math.floor(Math.random() * 10);
        console.log("numRand ", numRand);
        gameLoop(shots)
    } else {
        alert("Goodbue")
    }
}

guessNumber(4);