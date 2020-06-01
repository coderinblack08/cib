const express = require('express');
const volleyball = require('volleyball');
require('dotenv').config();

const urls = require('./db/url');

const app = express();
const port = process.env.PORT || 3000;

app.use(volleyball);
app.use(express.json());
app.use(express.static('public'));

app.post('/', async (req, res) => {
    try {
        const url = await urls.create(req.body);
        res.json(url);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
});

app.get('/:name', async (req, res) => {
    const url = await urls.find(req.params.name);
    if (url) {
        res.redirect(url.link);
    } else {
        res.redirect('/404.html');
    }
});

app.listen(port, _ => console.log(`Listening on http://localhost:${port}`));
