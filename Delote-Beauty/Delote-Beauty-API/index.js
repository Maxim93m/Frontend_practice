const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/price/get-list', (req, res) => {
    res.status(200)
    res.send(
        [
            {
                nameService: 'Простая укладка',
                additionalService: '+ окрашивание',
                priceService: '500 ₽',
            },

            {
                nameService: 'Event-укладка',
                additionalService: '+ завивка',
                priceService: '700 ₽',
            },
            {
                nameService: 'Стрижка',
                additionalService: '+ выпрямление',
                priceService: '1500 ₽',
            },
            {
                nameService: 'Ламинирование волос',
                additionalService: '+ обработка кончинков волос',
                priceService: '1000 ₽',
            },
            {
                nameService: 'Тонирование волос',
                additionalService: '+ мелирование',
                priceService: '900 ₽',
            },

            {
                nameService: 'Cтрижка горячими ножницами',
                additionalService: '+ горячее обертывание',
                priceService: '2200 ₽',
            },
            {
                nameService: 'Африканские косички',
                additionalService: '+ дреды',
                priceService: '5000 ₽',
            },
            {
                nameService: 'Биоревитализация волос',
                additionalService: '+ биозавивка',
                priceService: '7200 ₽',
            },
            {
                nameService: 'Камуфляж седины',
                additionalService: '+ частичное окрашивание',
                priceService: '1800 ₽',
            },
            {
                nameService: 'Вечерняя прическа',
                additionalService: '+ плетение кос',
                priceService: '3800 ₽',
            },
            {
                nameService: 'Лечение волос и кожи головы',
                additionalService: '+ обработка кончинков волос',
                priceService: '11000 ₽',
            },
            {
                nameService: 'Трихология',
                additionalService: '+ мезотерапия кожи головы',
                priceService: '12000₽',
            }
        ]
    )
});

app.listen(PORT, () => {
    console.log("Сервер запущен...")
});