function showMeTheMoney(sum) {
    const denom = [10, 50, 100, 500, 1000, 5000]
    const res = []
    let nominal = 0;
    let count = 0;
    let sumNominal = 0;

    console.log(`Сумма, которую надо выдать: ${sum}`);
    if (sum > 0) {
        for (let i = 0; i < denom.length; i++) {
            denom.sort((a, b) => {
                return b - a;
            });
            nominal = denom[i];
            count = Math.trunc(sum / nominal);
            sumNominal = nominal * count;
            if (sum - sumNominal < sumNominal) {
                sum = sum - sumNominal;
                console.log(`Выдача ${count} купюр номиналом ${nominal}`);
                for (let i = 0; i < count; i++) {
                    res.push(nominal);
                }
            }
        }

    }
    else {
        console.log('слишком большая сумма')
    }
    return res;
}

console.log(showMeTheMoney(47880))

// const showMeTheMoney = (amount) => {
//     const denom = [5000, 1000, 500, 100, 10];
//     let res = [];
//     for (const note of denom) {
//         while (amount >= note) {
//             amount -= note;
//             res.push(note);
//         }
//     }
//     return res;
// };

// console.log(showMeTheMoney(2440));