const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productsInfoListPick = require('./db/headphones-list.json');
const cart = require('./db/cart.json');
const path = require('path')
const fs = require('fs')


const port = 8000;
const DB = path.join('db', 'cart.json')


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/headphones/get-list', (req, res) => {
    res.status(200);
    res.send(productsInfoListPick);
});

app.get('/cart/get', (req, res) => {
    res.status(200);
    res.send(cart);
});

app.post('/cart/add', (req, res) => {
    const postData = req.body;

    if (!postData) {
        res.status(400).send("Ошибка данных!");
    }

    fs.readFile(DB, (err, data) => {
        if (err) throw err;
        try {
            let cardData = JSON.stringify([...JSON.parse(data), postData]);

            fs.writeFile(DB, cardData, (writeErr) => {
                if (writeErr) {
                    return res.status(500).send("Не удалость перевести запись");
                }
                return res.status(200).send("Успешно добвален товар в корзину")
            })
        } catch {
            return res.status(500).send("Не удалость перевести запись");
        }

    })
});


app.listen(port, () => {
    console.log(`Server запущен на порту ${port}...`)
});