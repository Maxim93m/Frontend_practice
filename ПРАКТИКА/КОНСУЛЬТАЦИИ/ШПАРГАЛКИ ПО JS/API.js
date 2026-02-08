const url = 'https://reqres.in/api/users?per_page=12'

let users = fetch(url)
.then ((response) => {
  return response.json();
})

users.then((userList) => {

/*1) Получить данные
*/
  console.log(userList.data);
  console.log("-------");

/*2) Получить фамилии
*/
userList.data.forEach((userPoint) => {
  console.log(userPoint.last_name);
  });
  console.log("-------");

/*) фамилии на f
*/
userList.data.forEach((userPoint) => {
  if(userPoint.last_name[0]=="F"){
    console.log(`id: ${userPoint.last_name}`); 
  };
});
console.log("-------");
/*) метод reduce
*/
let userData = userList.data.reduce((userEnabled, userPoint) => {
  return userEnabled + userPoint.first_name + " " + userPoint.last_name + ",";
}, "")
console.log(`Наша база содержит данные следующих пользователей: ${userData}`);
console.log("-------");

/*) Вывести названия всех ключей
*/
Object.keys(userList.data[0]).forEach
((keysObj) => {

console.log(keysObj);
})

});