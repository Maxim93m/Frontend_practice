// Задача №1
// Сделайте так, чтобы при движении мышки по странице, 
// отображались координаты курсора, подобно тому, как это сделано в следующем образце
let div = document.querySelector('#elem');

div.addEventListener('mousemove', (evt)=>{
    let X_coordinate = evt.pageX;
    let Y_coordinate = evt.pageY;
    
    div.innerHTML = `X: ${X_coordinate} : Y:${Y_coordinate}`;

});