export default async function getHeadPhones() {
    // let xhr = new XMLHttpRequest();
    // let res;

    // xhr.open("GET", "http://localhost:8000/headphones", true);
    // xhr.send();

    // xhr.onload = () =>{
    //     console.log(`Загружено ${xhr.status} ${xhr.response}}`);
    //      res = xhr.response;
    // }

    // xhr.onerror = () =>{
    //     console.log(`Возникла ошибка при загрузке данных!`);
    // }
    // return res;

    
    let data = [];

    try{
        let response = await fetch('http://localhost:8000/headphones/get-list');
        if (response.ok) {
            console.log(`Загружено статусом ${response.status}`);
            let data =  await response.json();
            return data;
        }
    }
    catch{
        throw new Error('Возникла ошибка передачи данных!')
    }

    // response.catch(e => console.log(e));

    // response.then((answer) => {
    //     if (answer.ok) {
    //         console.log(`Загружено статусом ${answer.status}`);
    //         let data =  answer.json();
    //         console.log(data);
    //     }
    // });

    // response.finally(() => console.log(`Конец передачи данных...`));

}

