// создать div

const div = document.createElement('div') 

// Добавить класс

div.classList.add('constructor') 

// Добавить внутрь бади

const body = document.querySelector('body') 

body.appendChild(div) 
            
// создать заголовок
            
const header = document.createElement('h1') 

// Добавить в него текст

header.textContent = 'fjkghjlfkg;flg'

// Добавить перед дивом конструктором

div.insertAdjacentElement('beforebegin', header) 

// создать список и добавить в него три элемента

const ul = `
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`

// поместить в конструктор

div.innerHTML = ul

// создать изображение

const img = document.createElement('img')

// добавить атрибут сорс

img.src = 'http://pic.jpg/240'

// добавить width 240

img.width = 240

// добавить класс js

img.classList.add('super')

// добавить альт

img.alt = 'какая-то картинка'

// посместить в конструктор

div.appendChild(img)

// создать див-параграф (pDiv) c двумя параметрами

const ElHTML = `
<div class='pDiv'>
<p>Параграф 1</p>
<p>Параграф 2</p>
</div>
`

// поместить до ul

const ulList = div.querySelector('ul')
ulList.insertAdjacentHTML('beforebegin', ElHTML)

console.log(body)